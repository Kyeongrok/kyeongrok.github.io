---
layout: default
section: guide
game: YouTube MP3
order: 30
title: 광고 없이 유튜브를 MP3로 받는 법 (Windows)
tagline: YouTube MP3 데스크톱 앱으로 검색부터 MP3 저장 · 재생까지 — 단계별 스크린샷
permalink: /projects/youtube-mp3/guide/
---

<a class="back" href="{{ '/projects/youtube-mp3/' | relative_url }}">← YouTube MP3</a>

<section class="intro">
    <h1>광고 없이 유튜브를 MP3로 받는 법</h1>
    <p>YouTube MP3 데스크톱 앱으로 영상을 검색하고 MP3로 받아 바로 듣는 방법입니다.</p>
</section>

<div class="content about guide" markdown="1">

변환 사이트처럼 광고 · 팝업 · 가짜 다운로드 단추가 없습니다. 회원 가입도 필요 없고, 받은 파일은 내 PC에만 저장됩니다.

## 1. 앱 내려받기

[YouTube MP3 페이지]({{ '/projects/youtube-mp3/' | relative_url }})에서 **⬇ 다운로드**를 누릅니다.

![YouTube MP3 다운로드 페이지]({{ '/assets/images/guides/youtube-mp3/01-download-page.jpg' | relative_url }})

- **⬇ 다운로드 (권장)** — 실행 파일 하나로 끝납니다. 대부분은 이것을 받으면 됩니다.
- **경량판** — 크기가 작은 대신 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.

## 2. 실행하기

받은 `exe` 파일을 더블클릭합니다. 설치 과정은 없습니다.

- 「Windows의 PC 보호」 창이 뜨면 **추가 정보** → **실행**을 누릅니다.
- 처음 켤 때는 변환에 필요한 도구(yt-dlp · FFmpeg · Deno)를 자동으로 받으니 인터넷에 연결된 상태로 잠시 기다립니다. 다음부터는 바로 켜집니다.

앱이 켜지면 위쪽의 **YoutubeMp3** 탭을 누릅니다. 검색 칸이 있는 화면이 나옵니다.

![앱 첫 화면 — YoutubeMp3 탭]({{ '/assets/images/guides/youtube-mp3/02-app-start.jpg' | relative_url }})

## 3. 검색하기

맨 위 칸에 곡 제목이나 가수 이름을 적고 **검색**을 누릅니다(Enter 키도 됩니다). 검색 결과가 제목 · 길이와 함께 나옵니다.

![검색 결과]({{ '/assets/images/guides/youtube-mp3/03-search.jpg' | relative_url }})

결과가 더 필요하면 아래 **더 보기**를 누릅니다.

## 4. 받을 영상 고르기

받고 싶은 결과를 한 번 누릅니다. 아래 **URL** 칸에 영상 주소가 저절로 들어가고, 오른쪽에 **⬇ 다운로드** 단추가 생깁니다.

![결과를 고르면 URL이 들어간다]({{ '/assets/images/guides/youtube-mp3/04-pick.jpg' | relative_url }})

- 음질은 URL 칸 오른쪽에서 **128K · 192K · 320K** 가운데 고릅니다. 기본은 192K입니다.
- 유튜브에서 주소를 복사해 왔다면 검색 없이 URL 칸에 붙여 넣어도 됩니다. 복사한 주소가 유튜브 주소이면 **📋 붙여넣고 추출** 단추가 나타나 한 번에 받을 수 있습니다.

## 5. 다운로드

**⬇ 다운로드**를 누릅니다. 아래 막대에 진행률과 속도 · 남은 시간이 나옵니다.

![다운로드 진행 중]({{ '/assets/images/guides/youtube-mp3/05-progress.jpg' | relative_url }})

10분짜리 영상도 보통 수십 초면 끝납니다.

## 6. 듣기 · 파일 찾기

다운로드가 끝나면 **플레이어** 탭으로 넘어가 받은 곡이 바로 재생됩니다.

![받은 MP3가 플레이어에서 재생된다]({{ '/assets/images/guides/youtube-mp3/06-player.jpg' | relative_url }})

- MP3 파일은 `내 음악\YoutubeMp3` 폴더에 저장됩니다. **YoutubeMp3** 탭의 **폴더 열기**를 누르면 그 폴더가 열립니다.
- 플레이어에서 곡을 오른쪽 클릭하면 볼륨 조정 · 구간 잘라내기 · 파일명 변경을 할 수 있습니다.

## 잘 안 될 때

| 증상 | 해결 |
|---|---|
| 처음 켤 때 오래 걸린다 | 변환 도구를 받는 중입니다. 인터넷 연결을 확인하고 기다려 주세요 |
| 「봇 인증」 오류가 난다 | 브라우저에서 유튜브 쿠키 파일을 내보내 **쿠키 파일…** 로 지정합니다 |
| 경량판이 켜지지 않는다 | [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)을 설치하거나 권장판을 받습니다 |

본인이 올린 영상이나 자유 이용이 허락된 영상(크리에이티브 커먼즈 등)만 받아 주세요. 이 가이드의 화면은 크리에이티브 커먼즈(CC BY 3.0)로 공개된 Blender 재단의 「Big Buck Bunny」로 찍었습니다.

## 링크

- 앱 소개 · 다운로드: [YouTube MP3]({{ '/projects/youtube-mp3/' | relative_url }})
- 모든 버전: [GitHub Releases](https://github.com/Kyeongrok/youtube-mp3/releases)
- 소스 코드: [github.com/Kyeongrok/youtube-mp3](https://github.com/Kyeongrok/youtube-mp3)
- 안드로이드판: [YouTube MP3 (Android)]({{ '/projects/youtube-mp3-android/' | relative_url }})

</div>
