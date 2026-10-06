---
title: 창세기전3 파트2
tagline: 창세기전3 파트2 리메이크 · 게임과 데이터 에디터
repository: Kyeongrok/the-war-of-genesis-clicker
banner: /assets/images/war-of-genesis-3-part2.jpg
banner_light: true
order: 3
downloads:
  - match: '^WarOfGenesis-win-Setup\.exe$'
    label: ⬇ 설치하기
    sub: 설치판 · 자동 업데이트 (권장)
    primary: true
  - match: '^(WarOfGenesis|DuelDx)\.exe$'
    label: 포터블 받기
    sub: 설치 없이 바로 실행
    beside_primary: true
  - match: '^WarOfGenesis\.Editor\.exe$'
    label: 에디터 받기
    sub: 게임 데이터 살펴보기
---

## 소개

**창세기전3 파트2**를 .NET으로 다시 만드는 리메이크 프로젝트입니다.
원작의 챕터 진행, 필드 이동, 전투(배치, 모션, 원거리 공격, 상태 이상 등)를 원작과 같게 재현하고 있습니다.

## 다운로드 안내

- **설치판 (권장)** — `WarOfGenesis-win-Setup.exe`를 실행하면 설치가 끝난 뒤 바로 게임이 켜집니다.
  이후 새 버전이 나오면 자동으로 업데이트됩니다.
- **포터블** — `WarOfGenesis.exe` 하나에 캐릭터, 배경 등 필요한 리소스가 모두 들어 있어서 설치 없이 바로 실행됩니다.
- **에디터** — `WarOfGenesis.Editor.exe`도 설치 없이 실행되는 단일 파일입니다.
  이 파일은 제 안에 든 자료를 열어 보는 용도라, 여기서 고친 것은 게임에 반영되지 않습니다.
  게임에 반영할 것을 고치려면 게임 메뉴의 **개발 > 편집기 열기**로 여세요.

리소스가 모두 들어 있어서 파일 하나가 600MB 정도입니다.

## 에디터 기능

게임 데이터를 살펴보고 고칠 수 있는 도구입니다.

- 캐릭터 목록과 능력치
- 스킬
- 전투 목록과 전투 맵
- 챕터 진행
- 사운드
- 모션 매핑 — 모션 타이밍 조정, 키 미리보기

어빌리티의 위력 · 사거리 · 비용 등을 직접 고쳐 보고 싶다면 [어빌리티 편집 설명서]({{ '/projects/war-of-genesis-3-part2/ability-editor/' | relative_url }})를 보세요.

## 필요 환경

- Windows 10 / 11 (64비트)
