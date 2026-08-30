// /ai ページの文言・URL・価格の定数。差し替えはこのファイルだけで完結させる。

// Googleカレンダーの予約スケジュール「無料30分診断」
export const CONTACT_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0youoDUYHFe4Ys9egJNRJeErEbeR-dIXvKXVkoKqEjaIEbwqL-Y_yXBxCGfxphOPwcTNJsz27H";

export const NAV = [
  { label: "サービス", href: "#service" },
  { label: "診断", href: "#shindan" },
  { label: "進め方", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "事例", href: "#cases" },
  { label: "経歴", href: "#career" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

export const HERO = {
  title: ["面倒な作業をAIで減らします。", "小さな会社や個人事業主が対象です。"],
  sub: "まず30分の無料診断で現状を見せてもらい、減らせそうな作業があれば仕組みを作って引き渡します。業種は問いません。従業員30人くらいまでの会社や個人事業主が中心です。",
  cta: "無料30分診断を予約",
} as const;

export const SERVICES_LEAD = "困りごと一覧";

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
  {
    icon: "ec",
    title: "ネットショップ運営",
    items: [
      "ホームページやネットショップを作りたいが、何から始めればいいか分からない",
      "商品説明を書く時間がなくて、新商品の登録が遅れている",
      "受注のたびに、MakeShopの管理画面とExcelを行き来している",
      "価格を変えたいのに、商品数が多くて手が回らない",
    ],
  },
] as const;

export const AI_CAN = {
  title: "AIを入れると、こう変わります",
  items: [
    {
      scene: "領収書の整理",
      before: "月末に、領収書の束を1枚ずつ会計ソフトに入力",
      after: "スマホで撮ると表になり、会計ソフトに入る",
    },
    {
      scene: "請求書づくり",
      before: "毎月、顧客ごとにExcelで作ってPDFにしてメール",
      after: "一覧を渡すと、全員分のPDFがまとめてできる",
    },
    {
      scene: "見積書づくり",
      before: "条件を整理しながら、毎回1時間",
      after: "打ち合わせのメモを渡すと、初稿ができている",
    },
    {
      scene: "議事録・打ち合わせメモ",
      before: "録音を聞き直して、1時間かけてまとめる",
      after: "音声から、要点と決まったことが出てくる",
    },
    {
      scene: "問い合わせ返信",
      before: "同じ質問に、毎回イチから返事を書く",
      after: "下書きができていて、確認して送るだけ",
    },
    {
      scene: "売上の集計",
      before: "CSVを出して、Excelで1時間",
      after: "「先月の売れ筋は？」と聞くと表とグラフが出る",
    },
    {
      scene: "商品ページの下書き",
      before: "写真と仕様書を見ながら、1商品ずつ説明文を書く",
      after: "写真を渡すと、説明文とスペック表の下書きが出る",
    },
    {
      scene: "ホームページの更新",
      before: "業者に頼んで、数日待つ",
      after: "「営業時間を変えて」と伝えた当日に変わる",
    },
  ],
} as const;

export const SHINDAN = {
  title: "かんたん診断",
  lead: "質問に答えるだけ・所要時間 約1分。減らせそうな作業と、費用の目安が分かります。",
  start: "診断をはじめる",
  heroCta: "とりあえず診断してみる",
  speaker: "八巻",
  q1: {
    bubble: "こんにちは、八巻です。まず、お仕事の形を教えてください",
    options: [
      { key: "tenpo", label: "店舗（飲食・美容・小売など）" },
      { key: "ec", label: "ネットショップ" },
      { key: "jimusho", label: "事務所・士業" },
      { key: "sonota", label: "その他の会社・個人事業" },
    ],
  },
  qSize: {
    bubble: "何人くらいでやっていますか？",
    options: [
      { key: "hitori", label: "1人でやっている" },
      { key: "small", label: "2〜5人" },
      { key: "mid", label: "6〜30人" },
      { key: "big", label: "30人以上" },
    ],
  },
  q2: {
    bubble: "時間を取られている作業はどれですか？いくつでも選んでください",
    options: [
      { key: "keiri", label: "領収書・レシートの整理" },
      { key: "seikyu", label: "請求書・見積書づくり" },
      { key: "reply", label: "問い合わせ・メールの返信" },
      { key: "sns", label: "記事・SNS・商品説明" },
      { key: "shift", label: "シフト表・勤怠" },
      { key: "syukei", label: "売上や数字の集計" },
      { key: "tenki", label: "注文・顧客データの転記" },
      { key: "hp", label: "ホームページを作りたい・直したい" },
    ],
  },
  qMain: {
    bubble: "その中で、一番減らしたいのはどれですか？",
  },
  qIt: {
    bubble: "パソコンやITは得意ですか？正直なところで大丈夫です",
    options: [
      { key: "nigate", label: "苦手" },
      { key: "futsu", label: "ふつう" },
      { key: "tokui", label: "得意" },
    ],
  },
  q3: {
    bubble: "ChatGPTやClaudeを使ったことはありますか？",
    options: [
      { key: "nai", label: "ほとんどない" },
      { key: "sukoshi", label: "少し使ったことがある" },
      { key: "shigoto", label: "仕事で使っている" },
    ],
  },
  resultBubble: "ありがとうございます。あなたの場合をまとめました",
  mainLabel: "一番効きそうなところ",
  othersLabel: "そのほかの候補",
  intro: {
    nai: "まずは使い方講座つきの小さな相談（1〜5万円）から始めるのが合いそうです。",
    sukoshi: "よく発生する作業を1つ選んで、自動化するところから始めるのが合いそうです。",
    shigoto: "業務の流れへの組み込みを、一緒に設計していけそうです。",
  } as Record<string, string>,
  itNote: {
    nigate: "仕組みは私が作り、渡すときには難しい操作が残らない形にします。",
    futsu: "",
    tokui: "",
  } as Record<string, string>,
  sizeNote: {
    hitori: "",
    small: "",
    mid: "複数人で使う前提で、共有しやすい形にします。",
    big: "複数人で使う前提で、共有しやすい形にします。",
  } as Record<string, string>,
  selfDemo:
    "この診断ページ自体も「業務に合わせた小さなツール」の実例です。",
  changes: {
    keiri: {
      change: "レシートをスマホで撮ると表になり、会計ソフトに入ります",
      menu: "入力・転記の自動化（10〜15万円）",
    },
    seikyu: {
      change: "一覧やメモから、請求書・見積書の下書きがまとめてできます",
      menu: "入力・転記の自動化（10〜15万円）",
    },
    reply: {
      change: "返信の下書きができていて、確認して送るだけになります",
      menu: "記事・文章作成の自動化（10万円〜）",
    },
    sns: {
      change: "記事やSNS、商品説明の下書きが出てくるので、直して出すだけになります",
      menu: "記事・文章作成の自動化（10万円〜）",
    },
    shift: {
      change: "希望を集めると、シフト表の下案が出ます",
      menu: "業務に合わせた小さなツール（15〜20万円）",
    },
    syukei: {
      change: "「先月の売れ筋は？」と聞くと、表とグラフが出ます",
      menu: "小さな相談・設定（1〜5万円）",
    },
    tenki: {
      change: "注文や顧客データが、自動で台帳につながります",
      menu: "入力・転記の自動化（10〜15万円）",
    },
    hp: {
      change: "紹介サイトやネットショップを、更新しやすい形で作れます",
      menu: "ホームページ・ネットショップ制作（10万円前後）",
    },
  } as Record<string, { change: string; menu: string }>,
  bizExtra: {
    tenpo: "店舗なら、Googleマップの口コミ返信や予約フォームも相性が良いです。",
    ec: "ネットショップなら、商品登録や価格の一括変更も相性が良いです。",
    jimusho: "事務所なら、書類のチェックや専門記事の下書きも相性が良いです。",
    sonota: "",
  } as Record<string, string>,
  resultTitle: "あなたの場合、こう変わりそうです",
  menuTitle: "費用の目安",
  retry: "やり直す",
  next: "次へ",
  back: "戻る",
} as const;

export const AI_CAN_MORE =
  "ほかにも、受注の転記、POP・チラシの文面、Googleマップの口コミ返信、SNS投稿づくり、マニュアルづくり、契約書のチェック、外国語での案内文など。";

export const SERVICES_NOTE =
  "こうした作業をAIやITの力で減らせます。（無料相談で一緒に決めていきましょう）";

export const FLOW = [
  { title: "無料診断（30分）", note: "画面共有で現状を一緒に見ます" },
  { title: "構築", note: "下のメニューを目安に、診断のあとで決めます" },
  { title: "引き渡し・保守", note: "保守は月1万ほど（保守がない場合もございます）" },
] as const;

export const PRICING = [
  {
    title: "小さな相談・設定",
    example: "AI導入支援、ClaudeやChatGPTの使い方講座、既存ツールの設定",
    price: "1〜5万円",
  },
  {
    title: "ホームページ・ネットショップ制作",
    example: "会社やお店の紹介サイト、ネットショップの立ち上げ、既存サイトの作り直し",
    price: "10万円〜",
  },
  {
    title: "記事・文章作成の自動化",
    example: "記事、SNS、商品説明、問い合わせ返信や見積書の雛形",
    price: "10万円〜",
  },
  {
    title: "入力・転記の自動化",
    example: "請求書の発行、入金の消し込み、レシート読み取り、勤怠集計",
    price: "10〜15万円",
  },
  {
    title: "業務に合わせた小さなツール",
    example: "予約・注文フォーム、顧客リストの一元化、シフト表づくり、診断ツール",
    price: "15〜20万円",
  },
  {
    title: "業務まるごと自動化の設計・構築",
    example: "複数の業務をつないで、設計から構築までまとめて",
    price: "30万円〜",
  },
] as const;

export const PRICING_NOTE =
  "※金額はどれも目安です。無料診断のあとに見積もりを出します。";

export const MONITOR = {
  label: "モニター募集（先着2社）",
  text: "業種を事例として掲載してよい方・感想を一言いただける方は、構築費を半額にします。枠が埋まり次第終了します。",
} as const;

// noteのMakeShop MCP記事が公開されたらURLを入れる
export const NOTE_MAKESHOP_ARTICLE_URL: string | null = null;

export type CaseLink = { label: string; href: string };

export type Case = {
  label: string;
  title: string;
  comment: string;
  links: CaseLink[];
};

export const CASES: readonly Case[] = [
  {
    label: "Helen's PetBed（ペット用品のネットショップ・MakeShop）",
    title: "お客様の犬に合うクッションを選べる診断ページを作りました",
    comment:
      "迷って買えなかった人が、選べるように。Instagramフォロワー2万人のペット用品ブランドの公式ショップで使われています。",
    links: [
      { label: "診断ページ", href: "https://helensmatch.vercel.app/" },
      { label: "Helen's PetBed 公式サイト", href: "https://www.helenspetbed.com/" },
    ],
  },
  {
    label: "同じショップの商品管理",
    title: "商品の価格の見直しを、AIとMakeShopをつないで半自動にしました",
    comment: "管理画面を1商品ずつ開く作業がなくなりました。",
    links: NOTE_MAKESHOP_ARTICLE_URL
      ? [{ label: "noteの記事", href: NOTE_MAKESHOP_ARTICLE_URL }]
      : [],
  },
  {
    label: "税理士事務所",
    title: "専門記事の下書き作成を自動化",
    comment: "記事を書く時間が短くなり、ほかの業務に時間を使えるようになりました。",
    links: [],
  },
  {
    label: "ryuyamaki.com",
    title: "ホームページ制作",
    comment: "",
    links: [{ label: "トップページを見る", href: "https://ryuyamaki.com/" }],
  },
];

export type CareerPart = string | { label: string; href: string };

export const CASES_EXTRA_FOOD = {
  label: "対応できること（店舗）",
  title: "飲食店や美容室などの店舗なら、たとえばこんなことができます",
  comment:
    "シフト表の自動作成、紙のレシートや仕入伝票の読み取りと整理、予約フォームの導入、Googleマップの店舗情報と口コミ返信の整備、インスタ投稿の下書きづくりなど。",
} as const;

export const CASES_EXTRA = {
  label: "対応できること",
  title: "このほかの細かい自動化も、ひと通り作れます",
  comment:
    "請求書の発行、入金の消し込み、レシートの読み取り、問い合わせ返信の下書き、予約・注文フォーム、顧客リストの一元化、シフト表づくりなど。MakeShopなどのECサイトは、商品登録、価格の変更、受注まわりの作業をAIとつないで減らせます。GmailやGoogleスプレッドシートなどのGoogle製品、Microsoft製品まわりの自動化にも対応します。無料診断のあと、必要なものから順に作ってお渡しします。",
} as const;

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
  tech: "開発スタック: Next.js / TypeScript / Go / PHP / Azure / Claude Code など",
} as const;

export const CONTACT = {
  title: "無料30分診断を予約",
  button: "予約する",
} as const;

export const CASUAL_CONTACT = {
  before: "通話はまだ早いなと感じたら、",
  linkLabel: "質問フォーム",
  after: "からどうぞ。",
  href: "https://forms.gle/YEAJwufDoiv9AfyN7",
} as const;

export const CONTRACT_NOTE = {
  before: "開発の業務委託（チームへの参画や受託開発）も受けています。こちらは",
  linkLabel: "メール",
  after: "でご相談ください。",
  email: "ryu8mk@gmail.com",
} as const;
