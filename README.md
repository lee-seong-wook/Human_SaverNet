# Human_SaverNet
> **** <br/>
> 주제: 자동화 아이디어 경진대회  <br/>
> **프로젝트 기간: 2023.09 ~ 2023.10.**
>
> <img width="500" alt="image" src="https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/e2ce4e69-6778-4641-8eeb-65d5237d3fd0">
## 팀 소개

|      이성욱       |          이용진         |       장성영         |         예진희        |
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
|   <img width="160px" src="https://github.com/lee-seong-wook/MyLock/assets/130055880/813d2c89-0c3b-49c6-89ed-43969d02ce1f" />    |                      <img width="160px" src="https://github.com/lee-seong-wook/object-detection-robot-/assets/130055880/b032aa51-f0d0-4354-b310-d57b3549b58a" />    |                  <img width="160px" src="https://github.com/lee-seong-wook/MyLock/assets/130055880/cf67e022-41c2-45d4-94ab-dff07c089034"/>   |       <img width="160px" src="https://github.com/lee-seong-wook/MyLock/assets/130055880/0bf50633-c987-4620-b488-602a8f4f91c6"/>         |
| 대림대 메카트로닉스과 3학년 | 대림대 메카트로닉스과 3학년 | 대림대 메카트로닉스과 3학년 | 대림대 메카트로닉스과 3학년 |
|  하드웨어 및 소프트웨어 구현    |  하드웨어 및 소프트웨어 구현   | 웹 개발  |  PPT 제작    |


## 환경
#### Rasberry Pi 4, Arduino UNO

## 라이브러리
```bash
아래의 라이브러리들을 설치해주시면 됩니다.

#TTS 관련 
$pip install gtts #tts를 제작하는 툴이기 때문에 따로 soundmaker.py를 실행하지 않으려면 설치하지 않아도 됩니다.
$pip install playsound

#스트리밍 처리 관련
$pip install numpy
$pip install opencv-python

#웹소켓 관련
$pip install websocket

#시리얼 통신 관련
$pip install pyserial
```

## 참고사항
```bash
실행파일은 py안의 main.py파일입니다.
tts를 만들려면 py 파일 내의 soundmaker.py파일로 만들면 됩니다.(경로 재설정 필요)
작품의 라즈베리파이와 안의 cctv를 화면을 보는 기기는 같은 와이파이환경에서 실행되어야 합니다.
cctv의 스트리밍 화면은 파일내의 index.html파일에서 코드 실행 후 보이는 아이피주소를 입력시켜주면 됩니다.
```


## 개발동기
<img width="600" alt="image" src=https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/31b5c024-45e6-4304-9322-a1ecfffe8e98>

## 기존사례
<img src="https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/09933ce7-2e21-454b-8ec4-4b4fbf004f3a" width="500" alt="image" style="margin-right: 10px;"> <img src="https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/29b68ce3-cb4b-4c47-9da8-b2d480cc7eea" width="500" alt="image">


## 핵심 구현 기술과 작품 구성도
<img src="https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/1f8ad318-f22e-481c-a942-42b4d4669b90" width="500" alt="image" style="margin-right: 10px;"> <img src="https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/e1e93a20-878c-4ca0-9daa-7cac698325d7" width="500" alt="image">

## 기대효과
<img width="600" alt="image" src=https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/dbc98b7e-56cd-4286-b5c8-c6814cb977d4>


