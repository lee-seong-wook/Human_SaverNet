# Human_SaverNet

> A safety-oriented assistive system that combines Raspberry Pi, Arduino, TTS alerts, and local streaming interfaces.

![Human SaverNet Cover](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/e2ce4e69-6778-4641-8eeb-65d5237d3fd0)

## Overview
Human_SaverNet은 Raspberry Pi와 Arduino를 연동해 안전 보조 기능을 제공하는 시스템입니다. CCTV 스트리밍 화면 확인, TTS 음성 안내, 웹 인터페이스, 하드웨어 제어를 하나의 프로젝트로 묶어 자동화 아이디어 경진대회 형태로 구현했습니다. 실제 사용 환경을 고려해 보드 간 연동과 음성 안내 흐름을 중심으로 구성한 점이 핵심입니다.

## Project Context
| Item | Details |
| --- | --- |
| Context | 자동화 아이디어 경진대회 / Daelim University project |
| Period | 2023.09 ~ 2023.10 |
| Goal | 안전 보조를 위한 보드 연동형 모니터링 및 안내 시스템 구현 |
| Scope | 하드웨어 제작, Raspberry Pi-Arduino 연동, TTS 적용, 스트리밍 인터페이스 구성 |

## My Role
- 하드웨어와 소프트웨어 구현을 함께 담당하며 전체 시스템을 통합했습니다.
- Raspberry Pi와 Arduino 보드 간 동작 흐름을 설계하고 실행 구조를 정리했습니다.
- TTS 적용과 스트리밍 화면 확인 구조를 실제 시연 가능한 형태로 구성했습니다.

## Tech Stack
`Python`, `Raspberry Pi 4`, `Arduino UNO`, `gTTS`, `playsound`, `OpenCV`, `WebSocket`, `pyserial`, `HTML/CSS/JavaScript`

## Key Contributions
- Raspberry Pi와 Arduino 기반 하드웨어/소프트웨어 통합 구현
- TTS 안내 음성 생성과 재생 흐름 구성
- 같은 네트워크 환경에서 확인 가능한 스트리밍 인터페이스 구성
- 안전 보조 시나리오를 위한 시스템 구성도와 구현 흐름 정리

## Implementation Notes
- `Hyman_SaverNet/py/main.py`: 메인 제어 로직
- `Hyman_SaverNet/py/soundmaker.py`: TTS 음성 파일 생성 스크립트
- `Hyman_SaverNet/index.html`, `Hyman_SaverNet/main.html`: 스트리밍 및 화면 확인용 웹 페이지
- `Hyman_SaverNet/arduPCA/ardu_pca.ino`: 보드 제어 관련 파일

## Core System
![Core System](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/1f8ad318-f22e-481c-a942-42b4d4669b90)

<details>
<summary>Extended Gallery</summary>

### Additional Core View
![Core System 2](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/e1e93a20-878c-4ca0-9daa-7cac698325d7)

### Motivation
![Motivation](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/31b5c024-45e6-4304-9322-a1ecfffe8e98)

### Related Cases
| Case 1 | Case 2 |
| --- | --- |
| ![Related Case 1](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/09933ce7-2e21-454b-8ec4-4b4fbf004f3a) | ![Related Case 2](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/29b68ce3-cb4b-4c47-9da8-b2d480cc7eea) |

### Expected Effect
![Expected Effect](https://github.com/lee-seong-wook/Human_SaverNet/assets/130055880/dbc98b7e-56cd-4286-b5c8-c6814cb977d4)

</details>

<details>
<summary>Team</summary>

| Name | Role |
| --- | --- |
| 이성욱 | 하드웨어 및 소프트웨어 구현 |
| 이용진 | 하드웨어 및 소프트웨어 구현 |
| 장성영 | 웹 개발 |
| 예진희 | PPT 제작 |

</details>

<details>
<summary>Setup Notes</summary>

```bash
pip install gtts
pip install playsound
pip install numpy
pip install opencv-python
pip install websocket
pip install pyserial
```

작품의 Raspberry Pi와 화면을 확인하는 기기는 같은 Wi-Fi 환경에서 실행되어야 하며, 실행 파일은 `Hyman_SaverNet/py/main.py`를 기준으로 사용합니다.

</details>
