# 株式会社Sing LP制作 HANDOFF

## プロジェクト情報

| 項目 | 内容 |
|------|------|
| 企業名 | 株式会社Sing |
| サービス名 | ツナゲル |
| LPの目的 | 会員登録・無料トライアル |
| テンプレート | template-lp |
| ディレクトリ | client_lp/sing/ |
| 作成日 | 2026-03-31 |
| GitHubリポジトリ | https://github.com/elfyakira/sing-lp |
| 本番URL | https://sing-bonus-lp.vercel.app |
| Vercelプロジェクト | elfyakiras-projects/sing-bonus-lp |

## ブランドカラー

| 項目 | コード | 用途 |
|------|--------|------|
| メインカラー | #44ACD3 | 見出しアクセント、帯背景、グラデーション |
| メインカラー（明） | #5FBFDF | ホバー、サブアクセント |
| メインカラー（暗） | #3595B8 | グラデーション深部 |
| アクセントカラー（CTA） | #FF6B35 | CTAボタン、強調 |
| アクセントカラー（明） | #FF8F66 | ボタンホバー |
| 100万円テキスト | #FFFFFF + 縁取り #1B2567 | ヒーロー 100万円表示 |
| 背景メイン | #FFFFFF | 通常セクション |
| 背景サブ | #F8FAFA | 交互セクション |
| 背景温かみ | #FFF8F2 | オファーセクション |
| テキスト主 | #2D3436 | 本文 |
| テキスト副 | #636E72 | 補足 |
| テキスト薄 | #B2BEC3 | 注釈 |
| ボーダー | #E0E6E6 | 区切り線 |

## フォント

| 用途 | フォント | ウェイト |
|------|---------|---------|
| 本文 | Noto Sans JP | 400, 500, 700 |
| セリフ | Noto Serif JP | 400, 500, 700 |
| 見出し（ポップ） | M PLUS Rounded 1c | 400, 500, 700, 800 |
| 100の数字 | Impact (system) | italic |
| 万円 | Shippori Mincho B1 | 800 |

## コーディングルール

- Next.js (App Router) + TypeScript + Tailwind CSS
- モバイルファースト設計
- **globals.cssの@themeブロック内のブランドカラーのみ変更する**
  - CSS変数名は変えない（ユーティリティクラスが参照しているため）
- **それ以外のglobals.cssは編集しない**
- 画像は public/images/ に配置
- セクション単位でコンポーネント分割（src/components/sections/）
- CTAボタンはツナゲル本体（https://tunageru.net/register/new）へリンク
- src/data/sample.ts のサンプルデータを実データに差し替える
- デプロイ: `npx vercel --prod`

## 実装ステータス

| セクション | ステータス | 備考 |
|-----------|-----------|------|
| ファーストビュー | 完了 | 集中線+人物背景画像(hero-bg-v5.png) + HTMLテキスト重ね |
| 課題提起 | 完了 | 5項目の悩みリスト、アクセントバー付き |
| 解決策提示 | 完了 | 青グラデ背景+斜め白シェイプ、3カラムカード+イラスト |
| 特徴・強み | 完了 | 非対称レイアウト（左右交互 + 写真） |
| 実績・数字 | 完了 | 4数字カウントアップ |
| お客様の声 | 完了 | 青帯見出し + 3カラム斜めカット写真 |
| 料金/オファー | 完了 | 0円大表示 + 祝い金100万円ボックス |
| FAQ | 完了 | Q&Aイラスト + 青ピル型2カラム |
| 最終CTA | 完了 | 青グラデ背景 + 写真オーバーレイ |

## 画像一覧

| ファイル | 用途 | 使用中 |
|---------|------|--------|
| hero-bg-v5.png | ヒーロー背景（青・集中線+人物） | ○ |
| benefit-money.png | 解決策カード: お金 | ○ |
| benefit-advisor.png | 解決策カード: アドバイザー | ○ |
| benefit-video.png | 解決策カード: 動画 | ○ |
| feature-money.png | 強み①: 祝い金 | ○ |
| feature-advisor.png | 強み②: 面談 | ○ |
| feature-video.png | 強み③: 職場動画 | ○ |
| voice-01.png | お客様の声①: 田中さん | ○ |
| voice-02.png | お客様の声②: 佐藤さん | ○ |
| voice-03.png | お客様の声③: 鈴木さん | ○ |
| faq-illust.png | FAQ Q&Aイラスト | ○ |
| closing-bg.png | 最終CTA背景 | ○ |
| hero-main.png | 旧ヒーロー（未使用） | × |
| hero-people.png | 旧人物切り抜き（未使用） | × |
| hero-bg-final.png | 旧背景v1（未使用） | × |
| hero-bg-v2.png | 旧背景v2（未使用） | × |
| hero-bg-v3.png | 旧背景v3（未使用） | × |
| hero-bg-v4.png | 旧背景v4（未使用） | × |
| hero-banner.png | 旧テキスト入り（未使用） | × |
| hero-banner-bg.png | 旧背景（未使用） | × |
| hero-complete.png | 旧テキスト入り（未使用） | × |
| text-100.png | 旧テキスト画像（未使用） | × |
