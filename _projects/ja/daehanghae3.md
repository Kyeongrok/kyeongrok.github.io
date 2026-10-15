---
title: 大航海時代III
tagline: 大航海時代III Costa del Sol リメイク
repository: Kyeongrok/cds-remake
banner: /assets/images/daehanghae3.jpg
banner_position: center 67%
order: 1
downloads:
  - match: '^CdsHelper-win-Setup\.exe$'
    label: ⬇ インストール
    sub: インストーラー版 · 自動アップデート（推奨）
    primary: true
  - match: '^CostaDelSol\.exe$'
    label: CostaDelSol.exe をダウンロード
    sub: インストール不要ですぐ起動
---

## 概要

1996年に光栄から発売された **大航海時代III Costa del Sol** を .NET で作り直すリメイクプロジェクトです。
オリジナルの実行ファイルの動作を一つずつ解析し、酒場・交易・海戦・セーブなどのゲーム要素をオリジナルどおりに再現しています。

## インストール方法

- **インストーラー版（推奨）** — `CdsHelper-win-Setup.exe` を実行すると、インストール後にそのままゲームが起動します。
  以降はゲーム起動時に新しいバージョンを自動でダウンロードします。
- **単体実行ファイル** — `CostaDelSol.exe` だけをダウンロードして、インストールせずに実行します。

## 同梱の開発ツール

オリジナルのセーブファイル（`SAVEDATA.CDS`）を読み込んでキャラクター情報を表示するツールも含まれています。

- キャラクター情報の表示 — 名前、能力値、特技、名声、所在、年齢、顔、星座
- 未登場キャラクターの除外（18歳未満または60歳超）
- 名前検索
- 特技別のレベル絞り込み（26種類の特技、レベル1〜9）

## 動作環境

- Windows 10 / 11（64ビット）
