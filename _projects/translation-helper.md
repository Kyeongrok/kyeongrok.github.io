---
title: 번역 연습 도우미
tagline: 영어 책 PDF를 보며 직접 번역하고 Claude에게 바로 교정받는 앱
repository: Kyeongrok/translation-exercise-helper
banner: /assets/images/translation-helper.jpg
banner_position: center top
order: 8
category: util
downloads:
  - match: '^TranslationHelper-win-x64\.zip$'
    label: ⬇ 다운로드
    sub: 압축을 풀어 바로 실행
    primary: true
---

## 소개

영어 원서를 읽으면서 **문장을 직접 번역해 보고, 그 자리에서 Claude에게 교정받는** Windows 앱입니다.
정답을 대신 써 주는 번역기가 아니라, 내 번역의 어디가 어색하고 왜 그런지 짚어 주는 튜터에 가깝습니다.

교정은 PC에 설치된 [Claude Code](https://claude.com/claude-code)를 불러서 받습니다. 지금 로그인된 구독으로 돌아가서 API 키나 추가 요금이 들지 않습니다.

<img class="screenshot" src="{{ '/assets/images/translation-helper.jpg' | relative_url }}" alt="번역 연습 도우미 실행 화면 — 왼쪽 위 PDF, 아래 번역 에디터, 오른쪽 교정">

## 화면 구성

| 칸 | 하는 일 |
| --- | --- |
| PDF | 책을 띄우는 뷰어(PDF.js). 드래그한 글이 자동으로 **원문** 칸에 들어갑니다. 책마다 마지막 쪽을 기억합니다 |
| 번역 | 번역을 쓰는 에디터. 마크다운(`.md`) 파일을 그대로 열어 쓰고, Vim 키를 씁니다 |
| 원문 | 마지막으로 드래그한 원문. 직접 고쳐도 됩니다 |
| 교정 | Claude의 교정이 실시간으로 흘러나옵니다. 아래 입력칸에서 같은 대화로 더 물어볼 수 있습니다 |
| 기록 | 지난 교정 목록. 누르면 다시 보고, 오른쪽 클릭으로 지웁니다 |

칸은 탭을 끌어서 옮기거나 합치거나 창 밖으로 빼서 따로 띄울 수 있습니다. 배치는 닫을 때 저장되고 **배치 초기화**로 처음 모양으로 돌아갑니다.

## 쓰는 법

1. **PDF 열기**로 책을, **번역 파일**로 번역을 쓸 `.md` 파일을 엽니다. 다음 실행 때 자동으로 다시 열립니다.
2. PDF에서 문장을 드래그하면 원문 칸에 들어갑니다. 줄 끝에서 끊긴 낱말과 줄바꿈은 알아서 이어 붙입니다.
3. 에디터에 번역을 쓰고, 그 줄에 커서를 둔 채 **Ctrl+Enter**(또는 `:check`)를 누릅니다.
   - 커서 줄을 보냅니다. 빈 줄에 있으면 바로 위 줄을 보냅니다. 비주얼 모드로 고르면 여러 줄도 보낼 수 있습니다.
   - 위쪽의 가장 가까운 `#` 제목과 쪽 번호가 위치 정보로 같이 갑니다.
4. 교정 칸 아래에서 "이 단어를 다른 말로 옮기면?" 같은 추가 질문을 하면 같은 대화로 이어집니다.

## 교정은 이렇게 옵니다

- 첫 줄에 한두 문장 총평, 잘한 점이 있으면 구체적으로 짚습니다
- 고칠 점을 중요한 순서대로: 의미 오류 · 누락 > 어색한 표현 > 시제 · 뉘앙스 > 용어 > 맞춤법 · 띄어쓰기
- 각 항목마다 원문 표현, 내 표현, 고친 안을 보여 줍니다
- 마지막에 내 문장을 최대한 살린 **예시 번역** 하나

튜터 지시문은 설정 폴더의 `tutor-prompt.md`에 들어 있어서, 교정 형식이나 말투를 직접 고쳐 쓸 수 있습니다. 모델은 타이틀바에서 opus / sonnet / haiku 중에 고릅니다.

## Vim 에디터와 한/영 자동 전환

- `:w` · Ctrl+S 저장, `:check` · Ctrl+Enter 교정, `j` / `k`는 줄바꿈된 화면 줄 단위로 움직입니다
- **노멀 모드로 나가면(Esc) 입력기를 영문으로** 바꾸고, 다시 입력 모드로 들어가면 직전에 쓰던 한/영으로 되돌립니다
- 노멀 모드인데 한글로 키가 들어오면 그 자리에서 영문으로 바꿉니다
- **커서 색**으로 지금 상태를 보여 줍니다: 영문은 초록, 한글은 빨강
- 같은 번역 파일을 Zed 같은 다른 편집기에서 고쳐도, 창으로 돌아오면 바뀐 내용을 다시 불러옵니다

## 설치 방법

[Releases](https://github.com/Kyeongrok/translation-exercise-helper/releases/latest)에서 `TranslationHelper-win-x64.zip`을 받아 압축을 풀고 `TranslationHelper.exe`를 실행합니다.

교정을 받으려면 [Claude Code](https://claude.com/claude-code)가 설치되고 로그인돼 있어야 합니다(`claude` 명령이 PATH나 `%USERPROFILE%\.local\bin`에 있으면 됩니다).

## 필요 환경

- Windows 10 / 11 (64비트)
- [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)
- WebView2 런타임 (Windows 10/11에는 기본 설치)
- 로그인된 Claude Code
