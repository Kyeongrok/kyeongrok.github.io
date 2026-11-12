---
title: TouchCursor
tagline: Space キーを押したまま IJKL でカーソルを動かすキーボード ユーティリティ
repository: Kyeongrok/touch-cursor
banner: /assets/images/touch-cursor.jpg
banner_position: center top
banner_light: true
order: 5
category: util
downloads:
  - match: '^TouchCursor-win-Setup\.exe$'
    label: ⬇ インストール
    sub: インストーラー版 · 自動アップデート（推奨）
    primary: true
  - match: '^TouchCursor-win-Portable\.zip$'
    label: ポータブル版をダウンロード
    sub: 解凍してすぐ起動
---

## 概要

**Space キーを修飾キーとして使い**、手をホームポジションに置いたまま矢印キー、Home/End、Page Up/Down を使えるようにする Windows ユーティリティです。
Martin Stone 氏による C++ 版 [TouchCursor](https://github.com/martin-stone/touchcursor) を .NET 8 WPF に移植したものです。

## 基本のキー割り当て

| キーの組み合わせ | 結果 |
| --- | --- |
| Space + I / J / K / L | ↑ / ← / ↓ / → |
| Space + U / O | Home / End |
| Space + H / P | Page Up / Page Down |
| Space + M / , | Backspace / Delete |
| Space + N / . | Ctrl+← / Ctrl+→（単語単位の移動） |

Space だけを押して離すと、通常どおりスペースが入力されます。

## 機能

- **Mod Switch** — Alt+Space で Space を押した状態の固定・解除
- **Rollover** — 速く入力したときに意図せずカーソル モードになるのを防止（感度を調整可能）
- **キー割り当ての変更** — Key Mappings タブで好きなキーに変更
- システム トレイで常駐、Windows 起動時に自動起動
- 有効状態を画面に表示するオーバーレイ（位置を選択可能）
- 韓国語 / 英語の画面

## インストール方法

- **インストーラー版（推奨）** — `TouchCursor-win-Setup.exe` を実行するとインストールされます。以降、新しいバージョンが出ると自動でアップデートされます。
- **ポータブル版** — `TouchCursor-win-Portable.zip` を解凍して実行します。

PC に [.NET 8 デスクトップ ランタイム](https://dotnet.microsoft.com/download/dotnet/8.0) がインストールされている必要があります。

キー入力が変わらない場合は、管理者として実行するか、ほかのキー リマップ ツールが起動していないか確認してください。

## 動作環境

- Windows 10 / 11（64ビット）
- .NET 8 デスクトップ ランタイム
