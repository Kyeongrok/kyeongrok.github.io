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

**Space キーを修飾キーとして使い**、手をホームポジションに置いたまま矢印キー、Home/End、Backspace/Delete、単語単位の移動ができるようにする Windows ユーティリティです。
Martin Stone 氏による C++ 版 [TouchCursor](https://github.com/martin-stone/touchcursor) を .NET 8 WPF に移植したものです。

Space を押したままほかのキーを押すとカーソル キーに変わり、Space だけを押して離すと通常どおりスペースが入力されます。
Vim を使うエディター・ターミナル向けの IME 補助機能も入っています。

## 基本のキー割り当て

| キーの組み合わせ | 結果 |
| --- | --- |
| Space + I / J / K / L | ↑ / ← / ↓ / → |
| Space + U / O | Home / End |
| Space + H | ← |
| Space + P | Backspace |
| Space + M | Delete |
| Space + N / . | Ctrl+← / Ctrl+→（単語単位の移動） |

**キー マッピング** タブで変更・追加できます。割り当て先に Ctrl / Alt / Shift / Win を付けて `Ctrl+Backspace`、`Shift+Insert` のような組み合わせも作れます。

## 画面

画面は韓国語表示のものです（設定で English にも切り替えられます）。

### 一般設定

<img class="screenshot" src="{{ '/assets/images/touch-cursor.jpg' | relative_url }}" alt="TouchCursor 一般設定画面">

- **スタートアップ登録** — ボタンひとつで Windows 起動時に自動起動。登録済みなら解除ボタンだけが表示されます
- **通知領域アイコン** — ウィンドウを閉じてもトレイで動き続けます
- **有効化オーバーレイ** — 画面の隅に小さな表示灯を出します（位置は 9 か所から選択）
  - 緑: Space を押して待機中 · 青: カーソル モード オン
  - 四角形: CapsLock オン · 金色の枠と `한` の文字: 韓国語入力中（英字なら `A`）
- **有効化キーのホールド遅延 · ロールオーバー** — Space をこの時間（ms）押し続けるとカーソル モードになります。それより前に押したキーは通常の入力として扱われ、速く打ったときの誤動作が減ります
- **韓国語 / English** の画面切り替え

### キー マッピング

<img class="screenshot" src="{{ '/assets/images/touch-cursor-keymap.jpg' | relative_url }}" alt="TouchCursor キー マッピング画面">

- 割り当てを追加・編集・削除します。キーは実際に押して入力するか、一覧から選びます
- **ロールオーバー無視** — チェックしたキーはホールド遅延を待たずにすぐカーソル キーとして動作します（よく使う方向キーにおすすめ）
- **有効化キー プロファイル** — Space 以外のキーも有効化キーとして追加し、キーごとに別の割り当てを持てます

### プログラム一覧

<img class="screenshot" src="{{ '/assets/images/touch-cursor-programs.jpg' | relative_url }}" alt="TouchCursor プログラム一覧画面">

一覧に入れたプログラムが前面にあるあいだは TouchCursor が止まります。Space をそのまま使うゲームなどを入れておいてください。実行中のプログラムから選んで追加できます。

## Vim ユーザー向けの IME 補助（Zed、WezTerm）

Vim のノーマル モードで韓国語入力がオンのままだと、`j` や `k` などのコマンドが効きません。これを助ける機能が 2 つあります（一般設定でオン、既定はオフ）。

- **Esc で英字入力に切り替え** — Zed や WezTerm（ターミナルで使う Claude Code、Vim など）が前面にあるとき、Esc を押すと入力を英字に切り替えます。Esc キー自体はそのまま送られます
- **入力状態でカーソルの色を変える** — 英字なら緑、韓国語なら赤のカーソルにして、今の状態がひと目でわかります
  - Zed: `settings.json` の `experimental.theme_overrides` にカーソル色を書き込みます。設定ファイルがシンボリック リンクだったりコメントが入っていたりする場合は触りません
  - WezTerm: `%APPDATA%\TouchCursor\wezterm-cursor.txt` に色を書きます。`.wezterm.lua` の最後に次のコードを入れておくとすぐ反映されます

```lua
local ime_cursor_file = (os.getenv("APPDATA") or "") .. "\\TouchCursor\\wezterm-cursor.txt"
wezterm.add_to_config_reload_watch_list(ime_cursor_file)
local f = io.open(ime_cursor_file, "r")
if f then
    local color = f:read("*l")
    f:close()
    if color and color:match("^#%x%x%x%x%x%x$") then
        config.colors = config.colors or {}
        config.colors.cursor_bg = color
        config.colors.cursor_border = color
    end
end
```

色は `%APPDATA%\TouchCursor\config.json` の `ZedCursorColorEnglish` / `ZedCursorColorKorean`、Esc の対象プログラムは `EscToEnglishProcessNames` で変更できます。

## インストール方法

- **インストーラー版（推奨）** — `TouchCursor-win-Setup.exe` を実行するとインストールされます。起動時に新しいバージョンを確認してダウンロードし、再起動してアップデートするか尋ねます。
- **ポータブル版** — `TouchCursor-win-Portable.zip` を解凍して実行します。

PC に [.NET 8 デスクトップ ランタイム](https://dotnet.microsoft.com/download/dotnet/8.0) がインストールされている必要があります。
管理者として起動したアプリでもキーを変換できるよう、管理者権限で実行されます。

キー入力が変わらない場合は、ほかのキー リマップ ツールが起動していないか、そのプログラムが **プログラム一覧** に入っていないか確認してください。

## 動作環境

- Windows 10 / 11（64ビット）
- .NET 8 デスクトップ ランタイム
