---
title: Music Editor
tagline: 波形を見ながら区間をカットして m4a · mp3 · wav で保存するシンプルな音楽編集ソフト
repository: Kyeongrok/music-editor
banner_theme: green
order: 7
category: util
downloads:
  - match: '^WpfMusicEditor-win-Setup\.exe$'
    label: ⬇ インストール
    sub: インストーラー版 · 自動アップデート（推奨）
    primary: true
  - match: '-portable-win-x64\.zip$'
    label: ポータブル版をダウンロード
    sub: 解凍してすぐ起動 · .NET ランタイム同梱
---

## 概要

オーディオ ファイルの波形を見ながら不要な区間をカットし、試聴してから好きな形式で保存できる Windows 用の無料音楽編集ソフトです。

## 機能

- **ファイルを開く** — m4a、mp4、aac、mp3、wav
- **波形表示** — ドラッグで区間を選択、クリックで再生位置を移動
- **区間のカット** — 選択した区間を削除して後ろを前に詰める
- **元に戻す** — `Ctrl+Z` で何回でも元に戻す
- **試聴** — 再生、一時停止、停止。区間内で再生すると区間の終わりで停止
- **書き出し** — m4a（AAC）、mp3、wav で保存

## 使い方

1. **ファイルを開く** でオーディオ ファイルを読み込みます。
2. 波形をドラッグして削除する区間を選び、**✂ 区間カット** を押します。
3. 間違えてカットしたら `Ctrl+Z` で元に戻します。
4. **▶ 再生** で結果を試聴します。
5. 出力形式を選んで **書き出し** で保存します。

## インストール方法

- **インストーラー版（推奨）** — `WpfMusicEditor-win-Setup.exe` を実行するとインストールされます。以降、新しいバージョンが出ると自動でアップデートされます。
  PC に [.NET 8 デスクトップ ランタイム](https://dotnet.microsoft.com/download/dotnet/8.0) がインストールされている必要があります。
- **ポータブル版** — `WpfMusicEditor-バージョン-portable-win-x64.zip` を解凍して `WpfMusicEditor.exe` を実行します。.NET ランタイムを含んでいるため、別途インストールするものはありません。

## 動作環境

- Windows 10 / 11（64ビット）
- Windows N エディションでは [Media Feature Pack](https://support.microsoft.com/help/3145500) が必要な場合があります。
