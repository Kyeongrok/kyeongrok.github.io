---
title: 創世記伝3 パート2
tagline: 創世記伝3 パート2 リメイク · ゲームとデータエディター
repository: Kyeongrok/the-war-of-genesis-clicker
banner: /assets/images/war-of-genesis-3-part2.jpg
banner_light: true
order: 3
downloads:
  - match: '^WarOfGenesis-win-Setup\.exe$'
    label: ⬇ インストール
    sub: インストーラー版 · 自動アップデート（推奨）
    primary: true
  - match: '^(WarOfGenesis|DuelDx)\.exe$'
    label: ポータブル版をダウンロード
    sub: インストール不要ですぐ起動
    beside_primary: true
  - match: '^WarOfGenesis\.Editor\.exe$'
    label: エディターをダウンロード
    sub: ゲームデータの閲覧
---

## 概要

韓国のSRPG **創世記伝3 パート2**（The War of Genesis III Part 2）を .NET で作り直すリメイクプロジェクトです。
オリジナルのチャプター進行、フィールド移動、戦闘（配置、モーション、遠距離攻撃、状態異常など）をオリジナルどおりに再現しています。

ゲーム内のテキストは韓国語です。

## ダウンロードについて

- **インストーラー版（推奨）** — `WarOfGenesis-win-Setup.exe` を実行すると、インストール後にそのままゲームが起動します。
  以降、新しいバージョンが出ると自動でアップデートされます。
- **ポータブル版** — `WarOfGenesis.exe` 一つにキャラクターや背景など必要なリソースがすべて含まれているので、インストールせずにすぐ起動できます。
- **エディター** — `WarOfGenesis.Editor.exe` もインストール不要の単体ファイルです。
  このファイルは中に含まれているデータを閲覧するためのもので、ここで編集した内容はゲームに反映されません。
  ゲームに反映させたい場合は、ゲームメニューの **개발 > 편집기 열기**（開発 > エディターを開く） から開いてください。

リソースをすべて含んでいるため、ファイル一つが約600MBあります。

## エディターの機能

ゲームデータを確認・編集できるツールです。

- キャラクター一覧と能力値
- スキル
- 戦闘一覧と戦闘マップ
- チャプター進行
- サウンド
- モーションマッピング — モーションのタイミング調整、キーのプレビュー

アビリティの威力・射程・コストなどを自分で編集してみたい場合は、[アビリティ編集ガイド（韓国語）]({{ '/projects/war-of-genesis-3-part2/ability-editor/' | relative_url }})をご覧ください。

## 動作環境

- Windows 10 / 11（64ビット）
