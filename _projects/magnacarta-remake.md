---
title: 마그나카르타
tagline: 마그나카르타 패치판 · 원본 자료를 그대로 읽어 다시 만든 판
repository: Kyeongrok/magnacarta-remake
banner: /assets/images/magnacarta-remake.jpg
order: 6
published: false
downloads:
  - match: '^MagnaCarta\.exe$'
    label: ⬇ 패치판 받기
    sub: 설치 없이 바로 실행
    primary: true
  - match: '^MagnaCarta-v[\d.]+\.zip$'
    label: zip 으로 받기
    sub: exe + 설명서
    beside_primary: true
---

## 소개

**마그나카르타(2001)** 를 .NET 으로 다시 만드는 패치판입니다.
원작 게임 폴더의 자료(맵 · 캐릭터 · 사건 · 대사 · 전투 연출 · 동영상)를 그대로 읽어서 돌리고,
원작에서 버그였던 곳은 고쳐서 돌립니다.

- 시작 장면부터 필드 이동, 마을 사람 대화, 보물상자, 무작위 조우, 사건 전투까지 이어집니다.
- 전투는 원작의 연출 대본(EffScr)대로 모션 · 효과 · 카메라 · 검광이 나옵니다.
- 원작 동영상(로고 · 오프닝 · 사건 · 기술 동영상)도 원작의 Bink 로 틉니다.

## 받는 법 · 실행

- **원작 게임 파일이 있어야 합니다.** 패치판에는 원작 자료가 들어 있지 않습니다.
- `MagnaCarta.exe` 를 원작 마그나카르타 폴더(`3DOBS` · `MAP` 등이 있는 곳)에 넣고 실행하세요.
  다른 곳에 두려면 환경 변수 `MC_DIR` 에 원작 폴더를 적으면 됩니다.
- 원작 동영상을 틀기 위해 32비트(x86)로 빌드되어 있습니다.

## 필요 환경

- Windows 10 / 11
- 원작 마그나카르타 게임 파일
