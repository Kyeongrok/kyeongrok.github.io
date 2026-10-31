---
title: YouTube MP3
tagline: YouTube の動画を検索して MP3 で保存する Windows · Android アプリ
repository: Kyeongrok/youtube-mp3
banner: /assets/images/youtube-mp3.jpg
banner_position: center top
order: 4
downloads:
  - match: '-win-x64\.exe$'
    label: ⬇ ダウンロード
    sub: 単体実行ファイル（推奨）
    primary: true
  - match: '-win-x64-framework-dependent\.exe$'
    label: 軽量版をダウンロード
    sub: .NET 8 デスクトップ ランタイムが必要
  - match: '-android-arm64\.apk$'
    label: Android 版をダウンロード
    sub: ほとんどのスマートフォン · Android 10 以上
  - match: '-android-armv7\.apk$'
    label: Android 版をダウンロード（32ビット）
    sub: 古いスマートフォン用 APK
---

## 概要

YouTube の動画を検索して、MP3 音声として保存するアプリです。Windows デスクトップと Android で使えます。

![YouTube MP3 の画面]({{ '/assets/images/youtube-mp3.jpg' | relative_url }})

## 機能

- キーワードで YouTube の動画を検索
- 検索結果をクリックすると URL を自動入力
- URL を直接入力して MP3 を保存
- ダウンロードの進捗と状態を表示
- ダウンロード完了後、「フォルダーを開く」ボタンですぐに確認
- 保存した MP3 を再生するプレーヤー — 音量調整、区間の切り取り、ファイル名の変更
- スマートフォンへの転送

MP3 は `ミュージック\YoutubeMp3` フォルダーに保存されます。音量調整、区間の切り取り、スマートフォンへの転送は Windows 版の機能です。

## インストール方法

ダウンロードした exe を実行するだけです。別途インストールは必要ありません。

初回起動時に `yt-dlp`、`FFmpeg`、`Deno` を自動でダウンロードするため、インターネットに接続しておいてください。

- **ダウンロード（推奨）** — .NET ランタイムまで含んだ単体実行ファイルです。
- **軽量版** — サイズが小さい代わりに、PC に [.NET 8 デスクトップ ランタイム](https://dotnet.microsoft.com/download/dotnet/8.0) がインストールされている必要があります。

### Android

スマートフォンで APK をダウンロードしてインストールします。初めての場合は、ブラウザーの**不明なアプリのインストール**を許可してください。

- アプリで検索するか URL を入力して保存できます。YouTube アプリの**共有**メニューからも送れます。
- MP3 は `Music/YoutubeMp3` フォルダーに保存され、アプリの **내 음악**（マイミュージック）タブで再生できます。
- ほとんどのスマートフォンは **Android 版をダウンロード**、古い 32 ビット機は **Android 版をダウンロード（32ビット）** を選んでください。

## 動作環境

- Windows 10 / 11（64ビット）または Android 10 以上
- インターネット接続
