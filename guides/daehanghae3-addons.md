---
layout: default
title: 대항해시대3 애드온 만드는 법
tagline: Lua 로 지도 위에 내 패널을 띄우는 애드온을 만드는 방법
permalink: /projects/daehanghae3/addons/
---

<a class="back" href="{{ '/projects/daehanghae3/' | relative_url }}">← 대항해시대3</a>

<section class="intro">
    <h1>애드온 만드는 법</h1>
    <p>와우(World of Warcraft) 애드온처럼, Lua 파일 몇 개로 지도 위에 내 패널을 띄우는 방법입니다.</p>
</section>

<div class="content about guide" markdown="1">

처음 만드는 분을 위해 순서대로 따라 할 수 있게 적었습니다. 함수 목록은 맨 뒤 「참고표」에 있습니다.

## 1. 애드온 켜기

1. 게임 제목 줄의 햄버거(☰) → **개발**을 눌러 개발 창을 엽니다.
2. **애드온** 탭에서 **애드온**에 체크합니다.
3. 그 밑의 **애드온 폴더 열기**를 누릅니다.

<img src="{{ '/assets/images/cds-addons/mod-toggle.png' | relative_url }}" alt="개발 창 애드온 탭의 애드온 켜기">

폴더(`%APPDATA%\CdsHelper\AddOns`)가 열리고, 예시 애드온 두 개와 설명서가 들어 있습니다.

```
AddOns\
  SupplyHud\        ← 예시: 날짜 · 금화 · 보급 · 함대 내구를 보여 주는 패널
  HintButton\       ← 예시: 「힌트 정보」 단추
  README.md         ← 함수 설명서
  SavedVariables\   ← 게임이 적는 저장 파일 (손대지 않아도 됩니다)
  addons.log        ← print 와 오류가 적히는 곳
```

예시 두 개를 켜면 지도 위에 이렇게 뜹니다. 왼쪽이 보급 HUD, 오른쪽 위가 힌트 정보 단추입니다.

<img src="{{ '/assets/images/cds-addons/samples.png' | relative_url }}" alt="지도 위에 뜬 보급 HUD와 힌트 정보 단추">

> 애드온은 게임 값을 **읽기만** 할 수 있습니다. 돈 · 짐 · 배를 바꾸는 함수는 없습니다.
> 애드온을 켜 두면 하드코어 랭킹 기록에 모드처럼 적힙니다.

---

## 2. 첫 애드온 — 「안녕하세요」 패널

### 2-1. 폴더 만들기

`AddOns` 폴더 안에 새 폴더를 만듭니다. 이름은 **영어**로 합니다. 여기서는 `Hello` 로 하겠습니다.

```
AddOns\
  Hello\
    Hello.toc
    Hello.lua
```

**폴더 이름과 toc 파일 이름이 같아야** 게임이 알아봅니다.

### 2-2. toc 파일

메모장으로 `Hello.toc` 를 만들고 이렇게 적습니다.

```
## Title: 안녕 패널
## Notes: 처음 만들어 본 애드온
Hello.lua
```

- `## Title` — 애드온 목록에 보이는 이름
- `## Notes` — 목록에서 이름 밑에 붙는 설명
- 그 밑의 줄 — 읽을 Lua 파일. 여러 개면 한 줄에 하나씩, 적은 차례대로 읽습니다.

### 2-3. Lua 파일

`Hello.lua` 를 만들고 이렇게 적습니다.

```lua
local frame = CreateFrame("HelloFrame")
frame:SetPoint("TOP", 0, 10)
frame:AddText("안녕하세요, 제독!")
```

> **저장할 때 인코딩을 UTF-8 로 하세요.** 메모장은 「다른 이름으로 저장」에서 인코딩을 고를 수 있습니다.
> 한글이 깨져 보이면 거의 이것 때문입니다.

### 2-4. 게임에서 보기

개발 창 「애드온」 탭의 **다시 읽기**(또는 도시락 「애드온」 목록의 **다시 읽기**)를 누르면 게임을 끄지 않고 애드온을 다시 읽습니다.
지도 위 가운데 위쪽에 「안녕하세요, 제독!」 상자가 뜨면 성공입니다.

> 패널은 **지도가 보일 때만** 뜹니다. 도시 안에 있거나 다른 창이 떠 있으면 숨습니다.

---

## 3. 패널 꾸미기

### 자리

```lua
frame:SetPoint("TOPRIGHT", 10, 40)
```

첫 칸은 지도의 어느 모서리 · 가장자리에 붙일지, 다음 두 칸은 거기서 안쪽으로 얼마나 띄울지(x, y)입니다.

```
TOPLEFT      TOP      TOPRIGHT
LEFT        CENTER       RIGHT
BOTTOMLEFT  BOTTOM  BOTTOMRIGHT
```

### 끌어 옮기기

```lua
frame:SetMovable(true)
```

마우스로 끌어 옮길 수 있게 됩니다. `CreateFrame` 에 이름을 줬으면 **옮긴 자리를 기억**해서 다음에 켤 때도 그 자리에 뜹니다.

### 글 여러 줄과 색

`AddText` 는 부를 때마다 한 줄씩 아래로 쌓입니다. 돌려받은 것으로 나중에 글을 바꿀 수 있습니다.

```lua
local title = frame:AddText("보급 상황")
title:SetTextColor(1, 0.85, 0.4)    -- 빨강, 초록, 파랑 (0~1)
title:SetFontSize(14)

local line = frame:AddText()
line:SetText("식량 120통")
```

### 바탕색

```lua
frame:SetBackdrop(0, 0, 0.2, 0.8)   -- 짙은 남색, 불투명도 0.8
frame:SetBackdrop(0, 0, 0, 0)       -- 바탕 없이 글만
```

### 단추

```lua
frame:AddButton("눌러 보세요", function(button)
    print("눌렀습니다!")
end)
```

`print` 한 글은 화면 아래 띠에 뜨고 `addons.log` 에도 적힙니다.

> 단추가 없고 끌 수도 없는 패널은 마우스가 그냥 지나가서 **밑의 지도를 누를 수 있습니다.**
> 단추가 있거나 `SetMovable(true)` 인 패널은 그 위를 누르면 패널이 받습니다.

---

## 4. 게임 값 읽기

```lua
local y, m, d = GetDate()
local gold = GetGold()
print(string.format("%d년 %d월 %d일, 금화 %d닢", y, m, d, gold))
```

**제목 화면처럼 게임이 아직 안 섰으면 값이 `nil` 입니다.** 그래서 쓰기 전에 한 번 확인하는 게 좋습니다.

```lua
local y, m, d = GetDate()
if not y then return end
```

표로 돌려주는 것도 있습니다.

```lua
-- 보급품
local s = GetSupply()
print("식량", s.food, "물", s.water)

-- 함대
for i, ship in ipairs(GetShips()) do
    print(ship.name, ship.hull, ship.hp .. "/" .. ship.maxHp)
end

-- 짐
for i, cargo in ipairs(GetCargo()) do
    print(cargo.name, cargo.count .. "개", cargo.months .. "달 남음")
end
```

전체 목록은 맨 뒤 「참고표」에 있습니다.

---

## 5. 이벤트 — 무슨 일이 생기면 고치기

값을 늘 다시 읽는 대신, 무슨 일이 생겼을 때만 고칠 수 있습니다.

```lua
local frame = CreateFrame("GoldFrame")
frame:SetPoint("TOPLEFT", 10, 10)
local text = frame:AddText()

local function Refresh()
    local gold = GetGold()
    if gold then text:SetText("금화 " .. gold .. "닢") end
end

frame:RegisterEvent("PLAYER_ENTERING_WORLD")   -- 게임을 시작하거나 불러왔을 때
frame:RegisterEvent("GOLD_CHANGED")            -- 금화가 바뀌었을 때
frame:SetScript("OnEvent", function(self, event, ...)
    if event == "GOLD_CHANGED" then
        local now, diff = ...
        if diff > 0 then print("+" .. diff .. "닢") end
    end
    Refresh()
end)

Refresh()
```

- `RegisterEvent` 로 받고 싶은 이벤트를 고릅니다.
- `SetScript("OnEvent", 함수)` 의 함수가 `(self, 이벤트 이름, 인자들...)` 로 불립니다.
- 인자는 이벤트마다 다릅니다. `...` 으로 받아서 꺼내 씁니다.

쓸 수 있는 이벤트:

| 이벤트 | 언제 | 인자 |
|---|---|---|
| `PLAYER_ENTERING_WORLD` | 새 게임 · 불러오기 | 없음 |
| `DAY_CHANGED` | 날짜가 바뀔 때 | 해, 달, 날 |
| `GOLD_CHANGED` | 금화가 바뀔 때 | 지금 금화, 바뀐 만큼 |
| `CITY_ENTERED` | 도시에 들어갈 때 | 도시 번호, 도시 이름 |
| `CITY_LEFT` | 도시에서 나올 때 | 도시 번호, 도시 이름 |
| `DISCOVERY_FOUND` | 발견했을 때 | 발견물 번호, 이름 |
| `SEA_BATTLE_ENDED` | 해전이 끝났을 때 | `Won` · `Defeated` · `Escaped` · `Surrendered` |
| `LAND_BATTLE_ENDED` | 육상전이 끝났을 때 | 이겼으면 true |
| `ADDON_LOADED` | 애드온을 읽었을 때 | 애드온 폴더 이름 |

---

## 6. 타이머 — 정해진 시간마다

이벤트가 없는 값(배 내구 같은 것)은 타이머로 가끔 다시 읽습니다.

```lua
-- 1초마다
local ticker = C_Timer.NewTicker(1, Refresh)

-- 멈추려면
ticker:Cancel()

-- 3초 뒤에 한 번만
C_Timer.After(3, function() print("3초 지났습니다") end)
```

0.1초마다 부르는 `OnUpdate` 도 있습니다. 너무 무거운 일은 넣지 마세요.

```lua
frame:SetScript("OnUpdate", function(self, elapsed)
    -- elapsed: 지난번 부른 뒤 흐른 초
end)
```

---

## 7. 저장 — 게임을 꺼도 남는 값

toc 에 `## SavedVariables` 를 적으면, 그 이름의 **전역 변수**가 게임을 끌 때 저장되고 다음에 켤 때 되살아납니다.

```
## Title: 항해 일지
## SavedVariables: LogDB
Log.lua
```

```lua
-- 처음 켤 때는 nil 이라 기본값을 넣어 줍니다
LogDB = LogDB or { visits = 0 }

local frame = CreateFrame("LogFrame")
frame:SetPoint("BOTTOMLEFT", 10, 60)
local text = frame:AddText()

frame:RegisterEvent("CITY_ENTERED")
frame:SetScript("OnEvent", function(self, event, id, name)
    LogDB.visits = LogDB.visits + 1
    LogDB.last = name
    text:SetText(string.format("입항 %d번 · 마지막 %s", LogDB.visits, name))
end)
```

- 저장되는 것은 **숫자 · 글 · 참거짓 · 표**뿐입니다. 함수나 패널은 저장되지 않습니다.
- 저장 변수는 Lua 파일보다 **먼저** 되살아납니다. 그래서 `LogDB = LogDB or {...}` 처럼 씁니다.
- 앞에 `local` 을 붙이면 전역이 아니라 저장되지 않습니다.

---

## 8. 게임 창 열기

단축키로 여는 창을 단추로 열 수 있습니다.

```lua
frame:AddButton("힌트 정보", function() OpenWindow("hints") end)
```

| 이름 | 창 |
|---|---|
| `hints` | 힌트 정보 (H) |
| `items` | 소지품 |
| `person` | 인물정보 |
| `patrons` | 후원자 정보 |
| `cargo` | 매입 정보 (T) |

---

## 9. 켜고 끄기

애드온마다 켜고 끄는 것은 제목 줄 왼쪽 위 **도시락 단추(점 아홉)** → **애드온**에서 합니다.
체크를 풀면 그 자리에서 꺼지고, 다시 체크하면 켜집니다. 새로 넣은 애드온은 켜진 채로 시작합니다.

<img src="{{ '/assets/images/cds-addons/addon-list.png' | relative_url }}" alt="도시락 메뉴의 애드온 목록 창">

---

## 10. 문제가 생기면

| 증상 | 확인할 것 |
|---|---|
| 목록에 안 나온다 | 폴더 이름과 toc 이름이 같은지 (`Hello\Hello.toc`) |
| 한글이 깨진다 | 파일을 UTF-8 로 저장했는지 |
| 패널이 안 뜬다 | 지도 화면인지(도시 안 · 창이 떠 있으면 숨습니다), 애드온 목록에서 켜져 있는지 |
| 「오류」가 뜬다 | `addons.log` 에 몇째 줄인지 적혀 있습니다 — `Hello/Hello.lua:(3,5-10)` 은 3번째 줄 |
| 애드온이 멈췄다 | 오류가 열 번 나면 그 애드온만 멈춥니다. 고친 뒤 **다시 읽기** |
| 게임이 멈췄다 | `while true do end` 같은 끝없는 고리가 있는지. 이것은 막지 못합니다 |

오류가 처음 날 때는 화면 아래 띠에도 뜹니다. 같은 오류가 계속 나도 띠에는 한 번만 뜨고 나머지는 로그에만 적힙니다.

막혀 있는 것: 파일 읽기 · 쓰기, 프로그램 실행, `load` · `require` · `dofile`. 애드온끼리는 전역 변수를 나눠 쓰지 않습니다.

---

## 11. 예제 — 보급 경보

식량 · 물이 열흘도 안 남으면 패널을 붉게 바꾸고 한 번 알립니다.

```
## Title: 보급 경보
## Notes: 식량 · 물이 열흘도 안 남으면 알려 줍니다
SupplyAlarm.lua
```

```lua
local frame = CreateFrame("SupplyAlarmFrame")
frame:SetPoint("BOTTOM", 0, 80)
frame:SetMovable(true)
local text = frame:AddText()
local warned = false

local function Check()
    local days = GetSupplyDays()
    if not days or IsOnLand() or GetCity() then
        frame:Hide()          -- 바다에 있을 때만
        return
    end
    frame:Show()
    text:SetText(string.format("보급 %d일", days))
    if days < 10 then
        frame:SetBackdrop(0.5, 0, 0, 0.85)
        if not warned then
            print("식량 · 물이 " .. days .. "일분밖에 없습니다!")
            warned = true
        end
    else
        frame:SetBackdrop(0.06, 0.06, 0.06, 0.7)
        warned = false
    end
end

frame:RegisterEvent("DAY_CHANGED")
frame:RegisterEvent("PLAYER_ENTERING_WORLD")
frame:SetScript("OnEvent", Check)
C_Timer.NewTicker(2, Check)
Check()
```

---

## 참고표

### 패널

| 함수 | 설명 |
|---|---|
| `CreateFrame([이름])` | 패널을 만듭니다. 이름을 주면 옮긴 자리를 기억합니다 |
| `f:SetPoint(자리, x, y)` | 붙일 자리와 띄울 거리 |
| `f:SetSize(넓이, 높이)` | 0 이면 내용에 맞춥니다 |
| `f:SetBackdrop(r, g, b, [a])` | 바탕색 (0~1). a 가 0 이면 바탕 · 테두리 없음 |
| `f:AddText([글])` | 글 줄 |
| `f:AddButton(글, [함수])` | 단추 |
| `f:Show()` · `f:Hide()` · `f:IsShown()` | 보이기 · 숨기기 |
| `f:SetMovable(참거짓)` | 끌어 옮기기 |
| `f:RegisterEvent(이름)` · `f:UnregisterEvent(이름)` · `f:UnregisterAllEvents()` | 이벤트 받기 |
| `f:SetScript(이름, 함수)` | `OnEvent` · `OnUpdate` · `OnShow` · `OnHide`. 함수 대신 nil 이면 뗍니다 |
| `f:GetName()` | 패널 이름 |

### 글 줄 · 단추

| 함수 | 설명 |
|---|---|
| `t:SetText(글)` · `t:GetText()` | |
| `t:SetTextColor(r, g, b, [a])` | 0~1 |
| `t:SetFontSize(크기)` | 6~48 |
| `t:Show()` · `t:Hide()` | |
| `b:SetText(글)` | |
| `b:SetScript("OnClick", 함수)` | |
| `b:SetEnabled(참거짓)` | |
| `b:Show()` · `b:Hide()` | |

### 값 읽기 (게임이 안 섰으면 nil)

| 함수 | 돌려주는 것 |
|---|---|
| `GetPlayerName()` | 제독 이름 |
| `GetGold()` · `GetFame()` · `GetAge()` | 금화 · 명성 · 나이 |
| `GetCondition()` · `GetFatigue()` · `GetMorale()` | 컨디션 · 피로 · 사기 |
| `GetCrew()` | 선원 수 |
| `GetDate()` | 해, 달, 날 |
| `GetCity()` | 도시 번호, 이름 (도시 밖이면 nil) |
| `GetPosition()` | 위도, 경도 |
| `IsOnLand()` | 육지에 섰으면 true |
| `GetSupply()` | `{ food, water, material, ammo }` 통 수 |
| `GetSupplyDays()` | 식량 · 물이 며칠 갈지 |
| `GetShips()` | 배마다 `{ name, hull, hp, maxHp, speed, maxSpeed, capacity, crewNeeded, guns, lent }` |
| `GetCargo()` | 교역품마다 `{ name, count, months, spoiled }` |
| `GetDiscoveryCount()` | 찾은 발견물 수 |

### 그 밖

| 함수 | 설명 |
|---|---|
| `print(...)` | 화면 아래 띠와 `addons.log` |
| `C_Timer.After(초, 함수)` | 한 번 |
| `C_Timer.NewTicker(초, 함수)` | 계속. `:Cancel()` 로 멈춤 |
| `OpenWindow(이름)` | 게임 창 열기 |
| `ReloadUI()` | 애드온 모두 다시 읽기 |
| `GetTime()` | 게임을 켠 뒤 흐른 초 |
| `GetLocale()` | `ko` · `ja` |
| `GetAddOnName()` | 이 애드온 폴더 이름 |

Lua 문법 자체는 Lua 5.2 와 같습니다(`string` · `table` · `math` · `os.time` · `os.date` 를 쓸 수 있습니다).

</div>
