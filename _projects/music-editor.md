---
title: Music Editor
tagline: 파형을 보면서 구간을 잘라내고 m4a · mp3 · wav로 저장하는 간단한 음악 편집기
repository: Kyeongrok/music-editor
banner_theme: green
order: 7
category: util
downloads:
  - match: '^WpfMusicEditor-win-Setup\.exe$'
    label: ⬇ 설치하기
    sub: 설치판 · 자동 업데이트 (권장)
    primary: true
  - match: '-portable-win-x64\.zip$'
    label: 포터블 받기
    sub: 압축을 풀어 바로 실행 · .NET 런타임 포함
---

## 소개

오디오 파일의 파형을 보면서 필요 없는 구간을 잘라내고, 미리 들어 본 뒤 원하는 형식으로 저장하는 Windows용 무료 음악 편집기입니다.

## 기능

- **파일 열기** — m4a, mp4, aac, mp3, wav
- **파형 보기** — 드래그로 구간 선택, 클릭으로 재생 위치 이동
- **구간 잘라내기** — 선택한 구간을 지우고 뒤쪽을 앞으로 붙이기
- **실행 취소** — `Ctrl+Z`로 여러 번 되돌리기
- **미리 듣기** — 재생, 일시정지, 정지. 구간 안에서 재생하면 구간 끝에서 멈춤
- **내보내기** — m4a(AAC), mp3, wav로 저장

## 사용법

1. **파일 열기**로 오디오 파일을 불러옵니다.
2. 파형을 드래그해서 지울 구간을 고르고 **✂ 구간 잘라내기**를 누릅니다.
3. 잘못 잘랐으면 `Ctrl+Z`로 되돌립니다.
4. **▶ 재생**으로 결과를 들어 봅니다.
5. 출력 형식을 고르고 **내보내기**로 저장합니다.

## 설치 방법

- **설치판 (권장)** — `WpfMusicEditor-win-Setup.exe`를 실행하면 설치됩니다. 이후 새 버전이 나오면 자동으로 업데이트됩니다.
  PC에 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.
- **포터블** — `WpfMusicEditor-버전-portable-win-x64.zip`의 압축을 풀고 `WpfMusicEditor.exe`를 실행합니다. .NET 런타임이 들어 있어 따로 설치할 것은 없습니다.

## 필요 환경

- Windows 10 / 11 (64비트)
- Windows N 에디션은 [미디어 기능 팩](https://support.microsoft.com/help/3145500)이 필요할 수 있습니다.
