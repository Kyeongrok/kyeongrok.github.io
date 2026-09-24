---
title: YouTube MP3
tagline: YouTube 영상을 검색해서 MP3로 추출하는 Windows 앱
repository: Kyeongrok/youtube-mp3
banner: /assets/images/youtube-mp3.jpg
banner_position: center top
order: 4
downloads:
  - match: '-win-x64\.exe$'
    label: ⬇ 다운로드
    sub: 단일 실행 파일 (권장)
    primary: true
  - match: '-win-x64-framework-dependent\.exe$'
    label: 경량판 받기
    sub: .NET 8 데스크톱 런타임 필요
---

## 소개

YouTube 영상을 검색하고 MP3 오디오로 추출하는 Windows 데스크톱 앱입니다.

![YouTube MP3 실행 화면]({{ '/assets/images/youtube-mp3.jpg' | relative_url }})

## 기능

- 검색어로 YouTube 영상 검색
- 검색 결과를 누르면 URL 자동 입력
- URL을 직접 넣어 MP3 추출
- 다운로드 진행률과 상태 표시
- 다운로드가 끝나면 폴더 열기 버튼으로 결과물 바로 확인
- 받은 MP3를 재생하는 플레이어 — 볼륨 조정, 구간 잘라내기, 파일명 변경
- 폰으로 전송

MP3는 `내 음악\YoutubeMp3` 폴더에 저장됩니다.

## 설치 방법

받은 exe를 실행하면 됩니다. 따로 설치할 것은 없습니다.

처음 실행할 때 `yt-dlp`, `FFmpeg`, `Deno`를 자동으로 내려받으니 인터넷에 연결되어 있어야 합니다.

- **다운로드 (권장)** — .NET 런타임까지 들어 있는 단일 실행 파일입니다.
- **경량판** — 크기가 작은 대신 PC에 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.

## 필요 환경

- Windows 10 / 11 (64비트)
- 인터넷 연결
