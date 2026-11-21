---
title: Music Editor
tagline: 파형을 보며 자르고 붙이고, 음성 받아쓰기 · 음색 변환까지 하는 음악 편집기
repository: Kyeongrok/music-editor
banner: /assets/images/music-editor.jpg
banner_position: center top
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

오디오 파일의 파형을 보면서 필요 없는 구간을 잘라내고, 다른 파일의 구간을 끼워 넣고, 미리 들어 본 뒤 원하는 형식으로 저장하는 Windows용 무료 음악 편집기입니다.
여기에 더해 **선택 구간 받아쓰기(Whisper)**, **음색 변환(RVC)**, **내 목소리 모델 만들기**까지 한 화면에서 할 수 있습니다.

<img class="screenshot" src="{{ '/assets/images/music-editor.jpg' | relative_url }}" alt="Music Editor 실행 화면 — 파형에서 7.6~11.6초 구간을 고른 모습">

## 편집

- **파일 열기** — m4a, mp4, aac, mp3, wav
- **파형 보기** — 드래그로 구간 선택, 클릭으로 재생 위치 이동. 시작 · 끝 시각(초)을 직접 입력해도 됩니다
- **확대 · 이동** — 왼쪽의 선택 / 손 도구와 아래 슬라이더로 파형을 확대하고 옮겨 다니며 세밀하게 고릅니다
- **구간 잘라내기** — 선택한 구간을 지우고 뒤쪽을 앞으로 붙입니다
- **구간 삽입** — 다른 오디오 파일을 열어 그 파형에서 구간을 고른 뒤, 지금 위치에 끼워 넣습니다
- **구간 볼륨** — 선택한 구간만 dB 단위로 키우거나 줄입니다
- **실행 취소** — `Ctrl+Z`로 여러 번 되돌리기
- **미리 듣기** — 재생 · 일시정지 · 정지, 재생 위치 표시. 구간 안에서 재생하면 구간 끝에서 멈춥니다
- **내보내기** — 편집한 전체를 m4a(AAC), mp3, wav로 저장

## 받아쓰기 (음성 → 글자)

**🎙 선택 구간 전사**를 누르면 고른 구간의 말을 글자로 받아 적습니다. 줄마다 `[분:초]` 시각이 붙고, ↑ ↓ 버튼으로 줄 순서를 바꿀 수 있습니다.

- [Whisper](https://github.com/ggerganov/whisper.cpp)(large-v3) 모델을 씁니다. 처음 한 번 모델을 내려받아 PC에 저장합니다
- NVIDIA GPU(CUDA)가 있으면 GPU로, 없으면 CPU로 돌아갑니다(CPU는 느립니다)

## 음색 변환 (목소리 바꾸기)

선택한 구간의 **발음 · 내용 · 타이밍은 그대로 두고 목소리 음색만** 다른 사람 목소리로 바꿉니다. RVC(Retrieval-based Voice Conversion) 모델을 씁니다.

1. **📂 모델…**로 음색 모델(`.onnx`)을 고릅니다. RVC `.pth` 모델이 있으면 **📥 .pth 변환**으로 바로 바꿔 쓸 수 있습니다
2. 바꿀 구간을 고르고, 필요하면 **반음**으로 음높이를 올리거나 내립니다
3. **🎤 음색 변환**을 누릅니다. 결과가 마음에 안 들면 `Ctrl+Z`

변환은 앱 안에서만 돌아갑니다(ONNX Runtime). 공통으로 쓰는 특징 모델(ContentVec)은 처음 변환할 때 자동으로 내려받습니다.

### 내 목소리 모델 만들기 (🎓 모델 만들기)

학습 창에서 녹음 파일을 불러와 깨끗한 구간을 모으고(총 5~30분 권장) **🎓 학습 시작**을 누르면, 데이터 준비 → 학습 → ONNX 변환 → 모델 등록까지 자동으로 합니다.

- 준비물: NVIDIA GPU(CUDA)와 RVC 실행 환경(공식 프리빌트 패키지를 받아 `runtime\python.exe` 경로만 지정하면 됩니다)
- epoch(기본 150) · batch 크기를 고를 수 있고, 데이터 양에 따라 수 분~수 시간 걸립니다
- 만든 모델을 저장할 폴더는 ☰ 메뉴 → 설정에서 바꿉니다

자세한 내용은 저장소의 [음색 변환 안내](https://github.com/Kyeongrok/music-editor/blob/main/docs/voice-conversion.md)를 보세요.

## 사용법

1. **파일 열기**로 오디오 파일을 불러옵니다.
2. 파형을 드래그해서 구간을 고릅니다(확대해서 고르면 더 정확합니다).
3. **✂ 구간 잘라내기**, **➜ 구간 삽입**, **🔊 구간 볼륨 적용** 등으로 편집합니다. 잘못했으면 `Ctrl+Z`.
4. **▶ 재생**으로 결과를 들어 봅니다.
5. 출력 형식을 고르고 **내보내기**로 저장합니다.

## 설치 방법

- **설치판 (권장)** — `WpfMusicEditor-win-Setup.exe`를 실행하면 설치됩니다. 새 버전이 나오면 자동으로 업데이트합니다.
  PC에 [.NET 8 데스크톱 런타임](https://dotnet.microsoft.com/download/dotnet/8.0)이 설치되어 있어야 합니다.
- **포터블** — `WpfMusicEditor-버전-portable-win-x64.zip`의 압축을 풀고 `WpfMusicEditor.exe`를 실행합니다. .NET 런타임이 들어 있어 따로 설치할 것은 없습니다.

## 필요 환경

- Windows 10 / 11 (64비트)
- Windows N 에디션은 [미디어 기능 팩](https://support.microsoft.com/help/3145500)이 필요할 수 있습니다
- 받아쓰기 · 음색 변환은 GPU가 있으면 훨씬 빠릅니다. 모델 학습은 NVIDIA GPU가 필요합니다
