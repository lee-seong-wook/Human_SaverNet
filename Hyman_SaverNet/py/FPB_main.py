from multiprocessing import Process
from gtts import gTTS
from playsound import playsound
import numpy as np
import cv2
import base64
import asyncio
import websockets
import socket
import serial
import time

global_data = '1'
count = 0
ser = serial.Serial('/dev/ttyACM0', 9600)


# 현재 IP 주소 가져오기
def get_host_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.1)
        # doesn't even have to be reachable
        s.connect(("10.0.0.0", 80))
        ip_addr = s.getsockname()[0]
    except Exception:
        ip_addr = "127.0.0.1"
    finally:
        s.close()
    return ip_addr

ip_addr = get_host_ip()

# OpenCV로 두 개의 웹캠 스트리밍
cap1 = cv2.VideoCapture(0)
cap2 = cv2.VideoCapture(2)
cap1.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
cap1.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)
cap2.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
cap2.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)

#아두이노 시리얼 읽어오기
async def read_serial_data():
    global dataardu
    while True:
        data = ser.readline().decode('utf-8').rstrip()
        print(f'아두이노에서 받은 데이터: {data}')
        dataardu = data

# 웹 소켓 서버 설정
async def video_server(websocket, path):
    print("WebSocket 클라이언트가 연결되었습니다.1")  # 연결 시 출력할 메시지
    while True:
        ret1, frame1 = cap1.read()
        ret2, frame2 = cap2.read()

        # 첫 번째 웹캠이 연결되지 않았을 경우, 빈 프레임을 생성
        if not ret1:
            frame1 = np.zeros((240, 320, 3), dtype=np.uint8)

        # 두 번째 웹캠이 연결되지 않았을 경우, 빈 프레임을 생성
        if not ret2:
            frame2 = np.zeros((240, 320, 3), dtype=np.uint8)

        # 이미지를 base64로 인코딩
        _, buffer1 = cv2.imencode('.jpg', frame1)
        frame_encoded1 = base64.b64encode(buffer1).decode('utf-8')

        _, buffer2 = cv2.imencode('.jpg', frame2)
        frame_encoded2 = base64.b64encode(buffer2).decode('utf-8')

        # 인코딩된 이미지 데이터를 클라이언트로 전송
        await websocket.send(frame_encoded1 + ";" + frame_encoded2)  # 두 개의 비디오 프레임을 세미콜론으로 구분

async def data_Change():
    global global_data
    while True:
        dataardu = ser.readline().decode('utf-8').rstrip()
        
        if dataardu == 'danger_1':
            global_data = '1'
            playsound('/파일경로/FPB/tts.mp3')
        elif dataardu == 'danger_2':
            global_data = '2'
            playsound('/파일경로/FPB/tts.mp3')
        else:
            global_data ='0'
        
        return global_data

#데이터 전송(수정할 부분 압센서 서버로 넘기기)
async def send_data(websocket, path):
    print("WebSocket 클라이언트가 연결되었습니다.2")  # 연결 시 출력할 메시지    
    while True:
        user_input = await data_Change() #1 2전환 1번화면 2번화면
        await websocket.send(user_input)

async def handle_received_message(message):
    print("Received message:", message)
    commend = 'a'
    ser.write(commend.encode())
    time.sleep(0.1)
    commend = 'b'
    ser.write(commend.encode())
    time.sleep(0.1)

#데이터 수신(수정할 부분: 서버 -> 해제명령)
async def receive_data(websocket, path):
    print("WebSocket 클라이언트가 연결되었습니다.3")
    async for message in websocket: #message: clear
        await handle_received_message(message)

# 웹 소켓 서버 설정
start_server = websockets.serve(video_server, ip_addr, 8765)
print(f"video서버가 시작되었습니다. 클라이언트 연결을 기다립니다... (IP 주소: {ip_addr})")
start_server2 = websockets.serve(send_data, ip_addr, 8766)
print(f"send서버가 시작되었습니다. 클라이언트 연결을 기다립니다... (IP 주소: {ip_addr})")
start_server3 = websockets.serve(receive_data, ip_addr, 8767)
print(f"receive서버가 시작되었습니다. 클라이언트 연결을 기다립니다... (IP 주소: {ip_addr})")


def func0():
    # 비동기 이벤트 루프 시작
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()

def func1():
    asyncio.get_event_loop().run_until_complete(start_server2)
    asyncio.get_event_loop().run_forever()

def func2():
    asyncio.get_event_loop().run_until_complete(start_server3)
    asyncio.get_event_loop().run_forever()

if __name__ == '__main__':
    p0 = Process(target=func0)
    p1 = Process(target=func1)
    p2 = Process(target=func2)
    p0.start()
    p1.start()
    p2.start()
    print("webSocket 준비완료")