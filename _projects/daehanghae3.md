---
title: 대항해시대3
tagline: 대항해시대3 Costa del Sol 리메이크
repository: Kyeongrok/cds-remake
banner: /assets/images/daehanghae3.jpg
banner_position: center 67%
order: 1
downloads:
  - match: '^CdsHelper-win-Setup\.exe$'
    label: ⬇ 설치하기
    sub: 설치판 · 자동 업데이트 (권장)
    primary: true
  - match: '^CostaDelSol\.exe$'
    label: CostaDelSol.exe 받기
    sub: 설치 없이 바로 실행
---

## 소개

1996년 코에이의 **대항해시대3 Costa del Sol**을 .NET으로 다시 만드는 리메이크 프로젝트입니다.
원작 실행 파일의 동작을 하나씩 분석해서 술집, 교역, 해전, 세이브 같은 게임 요소를 원작과 같게 재현하고 있습니다.

## 설치 방법

- **설치판 (권장)** — `CdsHelper-win-Setup.exe`를 실행하면 설치가 끝난 뒤 바로 게임이 켜집니다.
  이후에는 게임을 켤 때 새 버전을 자동으로 받습니다.
- **단일 실행 파일** — `CostaDelSol.exe` 하나만 받아서 설치 없이 실행합니다.

## 함께 들어 있는 개발 도구

프로젝트에는 원작의 세이브 파일(`SAVEDATA.CDS`)을 읽어 캐릭터 정보를 보여주는 도구도 들어 있습니다.

- 캐릭터 정보 표시 — 이름, 능력치, 특기, 명성, 소재, 연령, 얼굴, 성좌
- 미등장 캐릭터 필터링 (18세 미만 또는 60세 초과)
- 이름 검색
- 특기별 레벨 필터링 (26개 특기, 레벨 1–9)

## 필요 환경

- Windows 10 / 11 (64비트)
