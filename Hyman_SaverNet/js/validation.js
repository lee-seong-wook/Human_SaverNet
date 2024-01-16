const input = document.querySelector("#WebSocketIP");
const loginForm = document.querySelector("#login-form");

// 유효성 검사 - IP형식으로 입력시 통과
function validateIPAddress(ipAddress) {
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipRegex.test(ipAddress);
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 기본 submit 동작 방지

    const ipAddress = input.value;
    if (!validateIPAddress(ipAddress)) {
        alert("유효한 IP 주소를 입력하세요.");
        return;
    }

    window.location.href = `main.html?ip=${ipAddress}`;
});