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

export const SERVICES_LEAD =
  "たとえば、こんな困りごとです。どれに当てはまるか分からない段階の相談で大丈夫です。";

export const PAIN_CATEGORIES = [
  {
    icon: "keiri",
    title: "経理まわり",
    items: [
      "レシートや領収書が紙で溜まり、月末にまとめて税理士に渡している",
      "請求書をExcelで作ってPDFにしてメールで送る作業を、毎月手でやっている",
      "入金があったか、通帳を目で確認して消し込んでいる",
      "インボイスや電子帳簿保存法で何をすればいいか分からない",
    ],
  },
  {
    icon: "sales",
    title: "顧客対応・営業",
    items: [
      "見積書を作るのに毎回1時間かかる",
      "問い合わせへの返信が遅れて、機会を逃している",
      "予約や注文を電話でしか受けられていない",
      "顧客リストがExcelや年賀状ソフトに分散していて使えない",
    ],
  },
  {
    icon: "shukyaku",
    title: "集客",
    items: [
      "ホームページが古い、または更新の仕方が分からない",
      "Googleマップの店舗情報や口コミへの返信が放置になっている",
      "ブログやインスタの更新が止まっている",
    ],
  },
  {
    icon: "roumu",
    title: "労務",
    items: [
      "シフト表が手書きやExcelで、毎月組むのが大変",
      "勤怠の集計や給与明細の配布が手作業になっている",
    ],
  },
] as const;

export const SERVICES_NOTE =
  "こうした作業を、AIや今あるツールをつないで減らします。全部やる必要はなく、効くところから小さく始めます。";

export const FLOW = [
  { title: "無料診断（30分）", note: "画面共有で現状を一緒に見ます" },
  { title: "構築", note: "下のメニューを目安に、診断のあとで決めます" },
  { title: "引き渡し・保守", note: "保守は月1〜2万円。なくても大丈夫です" },
] as const;

export const PRICING = [
  {
    title: "小さな相談・設定",
    example:
      "ClaudeやChatGPTの使い方整備、インボイス・電子帳簿保存法対応の整理、既存ツールの設定",
    price: "3万円〜",
  },
  {
    title: "下書き・文章の自動化",
    example: "記事、SNS、商品説明、問い合わせ返信や見積書の雛形",
    price: "10万円〜",
  },
  {
    title: "入力・転記の自動化",
    example: "請求書の発行、入金の消し込み、レシート読み取り、勤怠集計",
    price: "15万円〜",
  },
  {
    title: "業務に合わせた小さなツール",
    example: "予約・注文フォーム、顧客リストの一元化、シフト表づくり、診断ツール",
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
  text: "相談する内容が決まっていなくても大丈夫です。画面共有で普段の作業を見せてもらい、AIで減らせそうなところをその場でお伝えします。合わなければ提案はしません。",
  button: "予約する",
} as const;
