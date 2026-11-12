---
title: CaptureAgent
tagline: 정해진 위치를 클릭하고 캡처하기를 반복해 주는 화면 캡처 앱
repository: Kyeongrok/capture-agent
banner: /assets/images/capture-agent.jpg
banner_position: center top
order: 6
category: util
downloads:
  - match: '-setup\.msi$'
    label: ⬇ 설치하기
    sub: Windows 설치 파일 (MSI)
    primary: true
  - match: '-portable\.exe$'
    label: 포터블 받기
    sub: 설치 없이 바로 실행
---

## 소개

화면의 원하는 영역을 캡처하는 Windows 앱입니다.
**매크로** 기능으로 클릭할 마우스 위치, 딜레이, 반복 횟수를 정해 두면 "클릭 → 기다리기 → 캡처"를 지정한 횟수만큼 자동으로 반복합니다.
페이지를 넘겨 가며 보는 웹 문서를 한 장씩 캡처해 PDF로 묶을 때 유용합니다.

## 기능

- 사각형 영역, 전체 화면, 특정 창 캡처
- 시작·끝 좌표나 크기를 숫자로 입력해 영역 지정
- **매크로** — 마우스 클릭 위치 지정, 딜레이(초), 반복 횟수를 정해 자동 캡처

## 설치 방법

- **설치하기** — `CaptureAgent-버전-setup.msi`를 실행해 설치합니다.
- **포터블** — `CaptureAgent-버전-portable.exe` 하나만 받아서 설치 없이 실행합니다.

둘 다 .NET 런타임이 들어 있어 따로 설치할 것은 없습니다.

## 필요 환경

- Windows 10 / 11 (64비트)
