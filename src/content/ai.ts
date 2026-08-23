// /ai ページの文言・URL・価格の定数。差し替えはこのファイルだけで完結させる。

// Googleカレンダーの予約スケジュール「無料30分診断」
export const CONTACT_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0youoDUYHFe4Ys9egJNRJeErEbeR-dIXvKXVkoKqEjaIEbwqL-Y_yXBxCGfxphOPwcTNJsz27H";

export const NAV = [
  { label: "サービス", href: "#service" },
  { label: "進め方", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "事例", href: "#cases" },
  { label: "経歴", href: "#career" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

export const HERO = {
  title: ["面倒な作業を、AIで減らします。", "小さな会社や個人事業主が対象です。"],
  sub: "まず30分の無料診断で現状を見せてもらい、減らせそうな作業があれば小さく作って引き渡します。業種は問いません。従業員30人くらいまでの会社や個人事業主が中心です。",
  cta: "無料30分診断を予約",
} as const;

export const SERVICES = [
  {
    icon: "writing",
    title: "記事やSNS、商品説明の更新が追いつかない",
    body: "AIに下書きを作らせて、確認して出すだけにします。",
  },
  {
    icon: "entry",
    title: "請求や仕訳、受注の入力を手作業でやっている",
    body: "会計ソフトやECシステムとつないで、入力の手間をなくします。",
  },
  {
    icon: "reuse",
    title: "AIを試してみたが、結局使わなくなった",
    body: "今の業務の流れに合わせて作り、そのまま使える形で渡します。",
  },
] as const;

export const FLOW = [
  { title: "無料診断（30分）", note: "画面共有で現状を一緒に見ます" },
  { title: "構築", note: "下のメニューを目安に、診断のあとで決めます" },
  { title: "引き渡し・保守", note: "保守は月1〜2万円。なくても大丈夫です" },
] as const;

export const PRICING = [
  {
    title: "小さな相談・設定",
    example: "ChatGPTの使い方整備、プロンプト作成、既存ツールの設定",
    price: "3万円〜",
  },
  {
    title: "下書き・文章の自動化",
    example: "記事、SNS、商品説明、メール返信の雛形",
    price: "10万円〜",
  },
  {
    title: "入力・転記の自動化",
    example: "会計ソフト、ECシステム、スプレッドシート間の連携",
    price: "15万円〜",
  },
  {
    title: "業務に合わせた小さなツール",
    example: "診断ツール、社内向けチャット、顧客対応の補助",
    price: "20万円〜",
  },
] as const;

export const PRICING_NOTE =
  "金額はどれも目安です。無料診断のあとに見積もりを出します。";

// コメントは仮の文。後で本人の言葉に差し替える。
export const CASES = [
  {
    label: "ペット用品EC（MakeShop）",
    title: "お客様の犬に合うクッションを選ぶ診断ツールを構築",
    comment: "問い合わせの内容が整理されて、対応にかかる手間が減りました。",
    href: "https://helensmatch.vercel.app/",
  },
  {
    label: "税理士事務所",
    title: "専門記事の下書き作成を自動化",
    comment: "記事を書く時間が短くなり、ほかの業務に時間を使えるようになりました。",
    href: null,
  },
] as const;

export type CareerPart = string | { label: string; href: string };

export const CAREER = {
  years: "11年",
  textParts: [
    { label: "ANA", href: "https://www.ana.co.jp/" },
    "・",
    { label: "JAL", href: "https://www.jal.co.jp/" },
    "・",
    { label: "JCB", href: "https://www.jcb.co.jp/" },
    "・",
    { label: "プロフェリエ", href: "https://profelier.jp/" },
    "の業務システムや、",
    {
      label: "AI商品棚",
      href: "https://secureinc.co.jp/news/detail.html?id=1641",
    },
    "などを開発・設計してきました",
  ] satisfies readonly CareerPart[],
  fields: "ほかに大手生命保険会社 / 大手学習塾のシステムなど",
} as const;

export const CONTACT = {
  title: "無料30分診断を予約",
  text: "画面共有で現状を見せてもらい、AIで減らせそうな作業があるかをお伝えします。合わなければ提案はしません。",
  button: "予約する",
} as const;
