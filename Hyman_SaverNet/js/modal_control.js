const clearBtn = document.querySelector("#clearBtn"); // 해제 버튼
const reportBtn1 = document.querySelector("#reportBtn1"); // 신고 1 버튼
const reportBtn2 = document.querySelector("#reportBtn2"); // 신고 2 버튼
const crashBtn = document.querySelector("#crashBtn"); // 다중 신호 수신 시 버튼
const modal = document.querySelector("#myModal"); // modal(알림창)
const modalContent = document.querySelector("#myModal .modal-content p"); // modal 내부 내용


//addHidden, removeHidden - 요소의 class="hidden"을 지우고 없애는 함수
// 알림창 Open
function openModal(cameraNumber) {
    removeHidden(modal);
    modalContent.innerText = `${cameraNumber}번 카메라 위치에서 신호가 들어왔습니다.`;
}
// 알림창 Close 및 상태 기본 값 초기화
function closeModal() {
    resetWebcam()
    addHidden(modal);
    addHidden(crashBtn);
    addHidden(reportBtn1)
    addHidden(reportBtn2)
    focusCamValue = "0";
    crashValue = false;
}
// 해제 버튼을 눌렀을 때
clearBtn.addEventListener("click", () => {
    const message = "clear";
    ws8767.send(message);
    closeModal();
});
// 신고 버튼을 눌렀을 때
function handleReportClick(location) {
    if (confirm(`정말로 위치 ${location}에 신고하시겠습니까?`)) {
        alert("신고가 완료되었습니다.");
        closeModal();
    }
}
// 위치1 신고버튼
reportBtn1.addEventListener("click", () => {
    handleReportClick(1);
});
// 위치2 신고버튼
reportBtn2.addEventListener("click", () => {
    handleReportClick(2);
});
// 다른 신호가 들어왔을 때 생기는 특정 버튼을 눌렀을 때
crashBtn.addEventListener("click", () => {
    crashValue = true;
    modalContent.innerText = `확인 후 적절한 조치를 부탁드립니다.`;
    addHidden(crashBtn);
    resetWebcam();
    removeHidden(reportBtn1);
    removeHidden(reportBtn2);
});

// WebSocket 8767번 연결: 데이터 송신 전용 소켓
const ws8767 = new WebSocket(`ws://${ipAddress}:8767`);

ws8767.onopen = function () {
    console.log("WebSocket is connected 8767.");
};

ws8767.onerror = function (error) {
    console.error("WebSocket Error: ", error);
};