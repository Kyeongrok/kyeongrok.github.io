---
title: TouchCursor
tagline: Space 키를 누른 채 IJKL로 커서를 움직이는 키보드 유틸
repository: Kyeongrok/touch-cursor
banner: /assets/images/touch-cursor.jpg
banner_position: center top
banner_light: true
order: 5
category: util
downloads:
  - match: '^TouchCursor-win-Setup\.exe$'
    label: ⬇ 설치하기
    sub: 설치판 · 자동 업데이트 (권장)
    primary: true
  - match: '^TouchCursor-win-Portable\.zip$'
    label: 포터블 받기
    sub: 압축을 풀어 바로 실행
---

## 소개

**Space 키를 활용 키로 써서** 손을 홈 포지션에 둔 채 화살표, Home/End, Page Up/Down을 쓸 수 있게 해 주는 Windows 유틸입니다.
Martin Stone의 C++ 원작 [TouchCursor](https://github.com/martin-stone/touchcursor)를 .NET 8 WPF로 옮긴 버전입니다.

## 기본 키 매핑

| 키 조합 | 결과 |
| --- | --- |
| Space + I / J / K / L | ↑ / ← / ↓ / → |
| Space + U / O | Home / End |
| Space + H / P | Page Up / Page Down |
| Space + M / , | Backspace / Delete |
| Space + N / . | Ctrl+← / Ctrl+→ (단어 단위 이동) |

Space만 눌렀다 떼면 평소처럼 띄어쓰기가 됩니다.

## 기능

- **Mod Switch** — Alt+Space로 Space를 누르고 있는 상태를 고정하거나 풀기
- **Rollover** — 빠르게 타이핑할 때 의도치 않게 커서 모드가 켜지지 않도록 방지 (민감도 조절 가능)
- **키 매핑 변경** — Key Mappings 탭에서 원하는 키로 변경
- 시스템 트레이에서 실행, Windows 시작 시 자동 실행
- 활성화 상태를 화면에 표시하는 오버레이 (위치 선택 가능)
- 한국어 / 영어 화면

## 설치 방법

- **설치판 (권장)** — `TouchCursor-win-Setup.exe`를 실행하면 설치됩니다. 이후 새 버전이 나오면 자동으로 업데이트됩니다.
- **포터블** — `TouchCursor-win-Portable.zip`의 압축을 풀고 실행합니다.

PC에 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.

키 입력이 바뀌지 않으면 관리자 권한으로 실행해 보거나, 다른 키 리매핑 도구가 함께 실행 중인지 확인하세요.

## 필요 환경

- Windows 10 / 11 (64비트)
- .NET 8 데스크톱 런타임
