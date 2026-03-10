// ~Btn과 Modal은 modalControl에서 선언
const cam1 = document.querySelector("#cam1");
const cam2 = document.querySelector("#cam2");

const HIDDEN_CLASSNAME = "hidden";
let focusCamValue = "0";
let crashValue = false;

// IP값 읽어오기
const urlParams = new URLSearchParams(window.location.search);
const ipAddress = urlParams.get('ip');

// hidden class 제거
function removeHidden(element) {
    element.classList.remove(HIDDEN_CLASSNAME);
}
// hidden class 추가
function addHidden(element) {
    element.classList.add(HIDDEN_CLASSNAME);
}

// cam화면 크기 설정
function setWebcamSize(cam, size) {
    cam.style.width = size;
}
// cam화면 초기화: 기본 화면
function resetWebcam() {
    setWebcamSize(cam1, "50%");
    setWebcamSize(cam2, "50%");
    removeHidden(cam1);
    removeHidden(cam2); 
}

// 수신 값에 따른 화면 전환 코드
function changeCam(focusCam, outCam, receivedData, reportBtn){
    focusCamValue = receivedData;
    setWebcamSize(focusCam, "100%");
    addHidden(outCam);
    openModal(receivedData);
    removeHidden(reportBtn)
}

// WebSocket 8765번 연결: 영상 전용 소켓
const ws8765 = new WebSocket(`ws://${ipAddress}:8765`);

// 연결 성공
ws8765.onopen = function () {
    console.log("WebSocket is connected 8765.");
};
// 메시지를 수신할 때마다 실행
ws8765.onmessage = function (event) {
    const frameData = event.data.split(";"); // 1.cam + ";" + 2.cam의 데이터를 받고 나누기
    if (frameData.length === 2) {
        const img1 = new Image();
        img1.src = "data:image/jpeg;base64," + frameData[0];
        cam1.src = img1.src;

        const img2 = new Image();
        img2.src = "data:image/jpeg;base64," + frameData[1];
        cam2.src = img2.src;
    }
};
// 에러 발생 시 실행
ws8765.onerror = function (error) {
    console.error("WebSocket Error: ", error);
};


// WebSocket 8766번 연결: 데이터 수신 전용 소켓
const ws8766 = new WebSocket(`ws://${ipAddress}:8766`);

ws8766.onopen = function () {
    console.log("WebSocket is connected 8766.");
    resetWebcam();
};

ws8766.onmessage = (event) => {
    const receivedData = event.data
    if(crashValue === false){ // 신호가 들어와있는 상태에서 다른 신호가 들어오면 버튼 생성
        if (focusCamValue !== receivedData && focusCamValue !== "0"){
            removeHidden(crashBtn);
        }
        if (receivedData === "1" && focusCamValue !== "2") { // 1번 신호가 들어오면 1번 화면 확대
            changeCam(cam1,cam2,receivedData,reportBtn1);
            }
        else if (receivedData === "2" && focusCamValue !== "1") { // 2번 신호가 들어오면 2번 화면 확대
            changeCam(cam2,cam1,receivedData,reportBtn2);
        }
        
    }
};

ws8766.onerror = function (error) {
    console.error("WebSocket Error: ", error);
};