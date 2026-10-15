---
title: YouTube MP3
tagline: YouTube の動画を検索して MP3 で保存する Windows アプリ
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
---

## 概要

YouTube の動画を検索して、MP3 音声として保存する Windows デスクトップアプリです。

![YouTube MP3 の画面]({{ '/assets/images/youtube-mp3.jpg' | relative_url }})

## 機能

- キーワードで YouTube の動画を検索
- 検索結果をクリックすると URL を自動入力
- URL を直接入力して MP3 を保存
- ダウンロードの進捗と状態を表示
- ダウンロード完了後、「フォルダーを開く」ボタンですぐに確認
- 保存した MP3 を再生するプレーヤー — 音量調整、区間の切り取り、ファイル名の変更
- スマートフォンへの転送

MP3 は `ミュージック\YoutubeMp3` フォルダーに保存されます。

## インストール方法

ダウンロードした exe を実行するだけです。別途インストールは必要ありません。

初回起動時に `yt-dlp`、`FFmpeg`、`Deno` を自動でダウンロードするため、インターネットに接続しておいてください。

- **ダウンロード（推奨）** — .NET ランタイムまで含んだ単体実行ファイルです。
- **軽量版** — サイズが小さい代わりに、PC に [.NET 8 デスクトップ ランタイム](https://dotnet.microsoft.com/download/dotnet/8.0) がインストールされている必要があります。

## 動作環境

- Windows 10 / 11（64ビット）
- インターネット接続
