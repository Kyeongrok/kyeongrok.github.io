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

**Space 키를 활용 키로 써서** 손을 홈 포지션에 둔 채 화살표, Home/End, Backspace/Delete, 단어 단위 이동을 할 수 있게 해 주는 Windows 유틸입니다.
Martin Stone의 C++ 원작 [TouchCursor](https://github.com/martin-stone/touchcursor)를 .NET 8 WPF로 옮긴 버전입니다.

Space를 누른 채 다른 키를 누르면 커서 키로 바뀌고, Space만 눌렀다 떼면 평소처럼 띄어쓰기가 됩니다.
한글 입력 중에도 똑같이 동작하고, Vim 을 쓰는 에디터·터미널을 위한 한/영 보조 기능도 들어 있습니다.

## 기본 키 매핑

| 키 조합 | 결과 |
| --- | --- |
| Space + I / J / K / L | ↑ / ← / ↓ / → |
| Space + U / O | Home / End |
| Space + H | ← |
| Space + P | Backspace |
| Space + M | Delete |
| Space + N / . | Ctrl+← / Ctrl+→ (단어 단위 이동) |

**키 매핑** 탭에서 바꾸거나 더할 수 있습니다. 대상 키에 Ctrl / Alt / Shift / Win 을 붙여 `Ctrl+Backspace`, `Shift+Insert` 같은 조합도 만들 수 있습니다.

## 화면

### 일반 설정

<img class="screenshot" src="{{ '/assets/images/touch-cursor.jpg' | relative_url }}" alt="TouchCursor 일반 설정 화면">

- **시작프로그램 등록** — 버튼 한 번으로 Windows 시작 시 자동 실행. 등록돼 있으면 해제 버튼만 보입니다
- **알림 영역 아이콘** — 창을 닫아도 트레이에서 계속 실행됩니다
- **활성화 오버레이** — 화면 구석에 작은 표시등을 띄웁니다(위치는 9칸 중 선택)
  - 초록: Space를 누르고 기다리는 중 · 파랑: 커서 모드 켜짐
  - 사각형: CapsLock 켜짐 · 금색 테두리와 `한` 글자: 한글 입력 중 (영문이면 `A`)
- **활성화 키 홀드 지연 · 롤오버** — Space를 이 시간(ms)만큼 누르고 있어야 커서 모드가 켜집니다. 그 전에 누른 키는 그냥 타이핑으로 처리돼 빠르게 칠 때 오작동이 줄어듭니다
- **한국어 / English** 화면 전환

### 키 매핑

<img class="screenshot" src="{{ '/assets/images/touch-cursor-keymap.jpg' | relative_url }}" alt="TouchCursor 키 매핑 화면">

- 매핑을 추가 · 편집 · 제거합니다. 키는 직접 눌러서 입력하거나 목록에서 고릅니다
- **롤오버 무시** — 체크한 키는 홀드 지연을 기다리지 않고 바로 커서 키로 동작합니다(자주 쓰는 방향키에 추천)
- **활성화 키 프로파일** — Space 말고 다른 키도 활성화 키로 추가하고, 키마다 다른 매핑을 둘 수 있습니다

### 프로그램 목록

<img class="screenshot" src="{{ '/assets/images/touch-cursor-programs.jpg' | relative_url }}" alt="TouchCursor 프로그램 목록 화면">

목록에 넣은 프로그램이 앞에 있을 때는 TouchCursor가 꺼집니다. Space를 그대로 써야 하는 게임 등을 넣어 두세요. 실행 중인 프로그램에서 골라 추가할 수 있습니다.

## Vim 사용자를 위한 한/영 보조 (Zed, WezTerm)

Vim 노멀 모드에서 한글 입력이 켜져 있으면 `j`, `k` 같은 명령이 먹지 않습니다. 이를 돕는 두 가지 기능이 있습니다(일반 설정에서 켜기, 기본은 꺼짐).

- **Esc 누르면 영문으로** — Zed나 WezTerm(터미널에서 쓰는 Claude Code, Vim 등)이 앞에 있을 때 Esc를 누르면 입력을 영문으로 바꿉니다. Esc 키 자체는 그대로 전달됩니다
- **커서 색을 한/영에 따라** — 영문이면 초록, 한글이면 빨강 커서로 바꿔 지금 상태를 바로 알 수 있습니다
  - Zed: `settings.json`의 `experimental.theme_overrides`에 커서 색을 써 넣습니다. 설정 파일이 심볼릭 링크이거나 주석이 있으면 건드리지 않습니다
  - WezTerm: `%APPDATA%\TouchCursor\wezterm-cursor.txt`에 색을 씁니다. `.wezterm.lua` 끝에 아래 코드를 넣어 두면 바로 반영됩니다

```lua
local ime_cursor_file = (os.getenv("APPDATA") or "") .. "\\TouchCursor\\wezterm-cursor.txt"
wezterm.add_to_config_reload_watch_list(ime_cursor_file)
local f = io.open(ime_cursor_file, "r")
if f then
    local color = f:read("*l")
    f:close()
    if color and color:match("^#%x%x%x%x%x%x$") then
        config.colors = config.colors or {}
        config.colors.cursor_bg = color
        config.colors.cursor_border = color
    end
end
```

색은 `%APPDATA%\TouchCursor\config.json`의 `ZedCursorColorEnglish` / `ZedCursorColorKorean`, Esc 대상 프로그램은 `EscToEnglishProcessNames`로 바꿀 수 있습니다.

## 설치 방법

- **설치판 (권장)** — `TouchCursor-win-Setup.exe`를 실행하면 설치됩니다. 실행할 때 새 버전을 확인해 내려받아 두고, 재시작해서 업데이트할지 묻습니다.
- **포터블** — `TouchCursor-win-Portable.zip`의 압축을 풀고 실행합니다.

PC에 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.
다른 프로그램(관리자 권한으로 실행된 앱 포함)에서도 키를 바꿀 수 있도록 관리자 권한으로 실행됩니다.

키 입력이 바뀌지 않으면 다른 키 리매핑 도구가 함께 실행 중인지, 해당 프로그램이 **프로그램 목록**에 들어 있지 않은지 확인하세요.

## 필요 환경

- Windows 10 / 11 (64비트)
- .NET 8 데스크톱 런타임
