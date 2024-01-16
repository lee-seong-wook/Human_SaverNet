#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

#define PCA9685_ADDRESS 0x40  // PCA9685 모듈의 I2C 주소
#define PRESSURE_THRESHOLD 1020   // 압력 센서의 임계값 (조절 필요)

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver(PCA9685_ADDRESS);
char cmd;

void setup(){
  Serial.begin(9600);
  pwm.begin();
  pwm.setPWMFreq(50);  // PWM 주파수 설정 (50Hz를 사용하는 경우)

  setMotorAngle(0, 170);  // 모터 0을 160도로 이동
  setMotorAngle(1, 10);   // 모터 1을 20도로 이동
  setMotorAngle(2, 170);   // 모터 0을 90도로 이동
  setMotorAngle(3, 10);   // 모터 1을 90도로 이동

}

void loop() {
  // 압력 센서 값을 읽어옴
  int pressureValue1 = analogRead(A0);
  int pressureValue2 = analogRead(A1);
  if (Serial.available()){
    cmd = Serial.read();
  }
    // 압력 센서 값이 임계값 미만이면 모터 0과 1을 동작
  if (pressureValue1 > PRESSURE_THRESHOLD) {
    Serial.println("danger_1");
    setMotorAngle(0, 90);  // 모터 0을 160도로 이동
    setMotorAngle(1, 90);   // 모터 1을 20도로 이동
    delay(3000);
  }
  else if (pressureValue2 > PRESSURE_THRESHOLD) {
    Serial.println("danger_2");
    setMotorAngle(2, 90);  // 모터 0을 160도로 이동
    setMotorAngle(3, 90);   // 모터 1을 20도로 이동
    delay(3000);
  }
  else{
    Serial.println("none");
    delay(1000);
  }
    //a라는 값이 들어오면 내림
  if (cmd == 'a'){
    setMotorAngle(0, 170);  // 모터 0을 160도로 이동
    setMotorAngle(1, 10);   // 모터 1을 20도로 이동
    setMotorAngle(2, 170);  // 모터 0을 90도로 이동
    setMotorAngle(3, 10);   // 모터 1을 90도로 이동
    delay(1000);
  }
}

// 모터를 지정된 각도로 이동하는 함수
void setMotorAngle(uint8_t channel, int angle) {
  int pulse = map(angle, 0, 180, 150, 550);  // 각도를 PWM 펄스로 변환
  pwm.setPWM(channel, 0, pulse);  // 모터를 지정된 펄스로 제어
}