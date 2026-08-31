# DESIGN.md — ryuyamaki.com

AIエージェント向けのデザインシステム文書。このサイトのUI・文章を追加・変更するときは必ずこの規約に従うこと。

## サイト構成

- `/` … ポートフォリオ（Anton大型タイポ＋アニメーション主体）
- `/ai` … 中小企業・個人事業主向けAI/IT活用支援の営業ページ
- `/ai/shindan` … かんたん診断（1問1画面のフルページ体験）
- 文言はすべて `src/content/*.ts` に定数化。JSXに直接文字列を書かない

## カラー

| 用途 | 値 |
|---|---|
| テキスト主 | `#111` |
| テキスト補助 | `#6B7280`（変数 `GRAY`） |
| アクセント（唯一の色） | `#0F6E66`（変数 `TEAL`）。ホバー濃色は `#0c5a54` |
| 背景 | `#FFFFFF`（/と/ai配下。ルートlayoutのbodyは生成り`#f0e8db`なのでページ側で`bg-white`を敷く） |
| ダークパネル | `#0A2724`＋`#0F6E66/40`のblurグロー（トップのCONTACTのみ） |
| 罫線 | `border-neutral-200`（実績・通常カード）、`border-dashed border-neutral-300`（「できること」系カード） |
| アクセント面 | `bg-[#0F6E66]/5`＋`border-[#0F6E66]/40`(強調カード)。薄い面は`/[0.03]`ホバー |

アクセントは深いティール1色のみ。第2のアクセント色を追加しない。

## タイポグラフィ

- 英字ディスプレイ: Anton（`next/font/google`、トップの見出し・マーキー・CONTACTのみ）
- 本文: Noto Sans JP（layoutで全体適用。Inter/Roboto/Arial禁止）
- セクション見出し(/ai): `text-xl sm:text-2xl font-bold` 中央揃え
- セクションラベル(トップ): `text-[11px] tracking-[0.32em] text-neutral-400` 英大文字
- 本文サイズ: `text-sm`〜`text-[15px]`、行間 `leading-[1.8]`〜`[1.9]`

## 状態と質感（elevation）

- カードの影: 通常 `shadow-[0_1px_2px_rgba(16,24,40,0.04)]` → ホバー `shadow-[0_6px_16px_rgba(16,24,40,0.07)]`（`transition-shadow duration-300`）
- 主ボタン: `shadow-[0_1px_2px_rgba(16,24,40,0.12)]`＋押下 `active:translate-y-px`
- フォーカス: すべての操作要素に `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6E66]`
- 破線カード（できること系）とダークパネルには影をつけない

## コンポーネントの型

- カード: `rounded-xl border border-neutral-200 bg-white p-6 sm:p-7`＋上記の影
- 大カード・パネル: `rounded-2xl`〜`rounded-3xl`
- 主ボタン: `rounded-md bg-[#0F6E66] px-7 py-3.5 font-medium text-white hover:bg-[#0c5a54]`
- 副ボタン: 同形で `border border-neutral-300` アウトライン、ホバーでティール
- ピル(選択肢・小ボタン): `rounded-full border px-4〜5 py-1.5〜2.5 text-[13px]`
- テキストリンク: ティール＋`underline decoration-[#0F6E66]/40 underline-offset-4`、外部リンクは `↗`、内部は `→`
- チェックリスト: ティールの `✓` ＋グレー本文
- ビフォーアフター: グレー文（中央揃え）→ ティール`↓`（中央）→ `bg-[#0F6E66]/5` ボックスの結論文
- 告知帯: ページ最上部にティール地・白文字・全幅

## モーション（トップのみ）

- ロゴ登場: `logo-rise`（blur→クリア、3.4s、ゆったり）
- スクロール出現: `Rise`コンポーネント（IntersectionObserver、800ms）
- 波形canvas・マーキー・浮遊・カーソルグロー: `src/components/home/`
- `prefers-reduced-motion` で全アニメーション停止を必ず維持
- /ai配下は控えめ（診断の`step-in` 380msのみ）。営業ページに派手な動きを足さない

## 文章ルール（最重要）

- 基本は敬語のです・ます。体言止め・倒置・広告調にしない
- AI臭い定型句禁止:「小さく始める」「効くところから」「伴走」「寄り添う」等。具体的な動作で書く
- 短文中の目的語直後の読点禁止（「作業を、減らします」→「作業を減らします」）
- 念押し・防御的な締め文禁止（「合わなければ提案はしません」等）
- 同じ趣旨の文をページ内で繰り返さない。言うなら一番効く場所で1回
- 実測していない数字・盛った実績・架空の事例を書かない。「実績」と「対応できること」は枠で区別する
- 名前表記は「Ryu Yamaki」「Ryu」のみ。漢字の本名は絶対に載せない（検索対策）
- 屋号「家業のAI研究室」はnote側の名義。サイトには持ち込まない

## 変更時の注意

- 価格・モニター条件は `src/content/ai.ts`。値上げ階段は15_sideworkの意思決定ログ参照
- デプロイ確認は本番URLへのcurl連打禁止（Vercelボット対策が発動する）。デプロイURL直接かブラウザで確認
- push後は `vercel alias set <デプロイURL> ryuyamaki.vercel.app / ryu-site.vercel.app` を付け替える
