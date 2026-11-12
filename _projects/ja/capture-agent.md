---
title: CaptureAgent
tagline: 決めた位置のクリックとキャプチャーを繰り返す画面キャプチャー アプリ
repository: Kyeongrok/capture-agent
banner: /assets/images/capture-agent.jpg
banner_position: center top
order: 6
category: util
downloads:
  - match: '-setup\.msi$'
    label: ⬇ インストール
    sub: Windows インストーラー（MSI）
    primary: true
  - match: '-portable\.exe$'
    label: ポータブル版をダウンロード
    sub: インストール不要ですぐ起動
---

## 概要

画面の好きな範囲をキャプチャーする Windows アプリです。
**マクロ** 機能でクリックするマウス位置、待ち時間、繰り返し回数を決めておくと、「クリック → 待機 → キャプチャー」を指定した回数だけ自動で繰り返します。
ページをめくって読む Web 文書を 1 枚ずつキャプチャーして PDF にまとめるときに便利です。

## 機能

- 矩形範囲、全画面、特定のウィンドウのキャプチャー
- 開始・終了座標やサイズを数値で入力して範囲を指定
- **マクロ** — マウスのクリック位置、待ち時間（秒）、繰り返し回数を指定して自動キャプチャー

## インストール方法

- **インストーラー** — `CaptureAgent-バージョン-setup.msi` を実行してインストールします。
- **ポータブル版** — `CaptureAgent-バージョン-portable.exe` をダウンロードして、インストールせずに実行します。

どちらも .NET ランタイムを含んでいるため、別途インストールするものはありません。

## 動作環境

- Windows 10 / 11（64ビット）
