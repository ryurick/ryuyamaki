// トップページ（/）の文言定数。WORKSはこの配列に足すだけで項目が増える。

export const HERO = {
  name: "RYU YAMAKI",
  taglineJa: "新しい景色のために。",
  tagline: "Making things to see something new.",
} as const;

export const NAV = [
  { label: "CAREER", href: "#career" },
  { label: "MUSIC", href: "#music" },
  { label: "WORKS", href: "#works" },
  { label: "MOVIES", href: "#movies" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const MARQUEE_WORDS = [
  "RYU YAMAKI",
  "SOFTWARE",
  "AI",
  "MUSIC",
  "ART",
  "MOVIES",
  "TOKYO",
] as const;

// 02（AI商品棚）の説明は仮。セキュア社に社名掲載の確認が取れるまでの間、
// NGだった場合は次の文に差し替える:
// 「小売店舗向けのAIプロダクトを開発」
export const AI_SHELF_DESCRIPTION = "株式会社セキュアのAI商品棚を開発";

export type WorkLink = {
  label: string;
  href: string;
  external: boolean;
};

export type Work = {
  title: string;
  description: string;
  link: WorkLink | null;
};

export const WORKS: readonly Work[] = [
  {
    title: "AI活用支援",
    description: "小さな会社や個人事業主のAI導入を支援",
    link: { label: "詳しく", href: "/ai", external: false },
  },
  {
    title: "AI商品棚",
    description: AI_SHELF_DESCRIPTION,
    link: {
      label: "ニュース記事",
      href: "https://secureinc.co.jp/news/detail.html?id=1641",
      external: true,
    },
  },
  {
    title: "税理士事務所の記事作成支援",
    description: "専門記事の下書きをAIで自動生成",
    link: null,
  },
  {
    title: "Helen's Match",
    description: "犬に合うクッションを選ぶ診断ツール",
    link: {
      label: "サイトを見る",
      href: "https://helensmatch.vercel.app/",
      external: true,
    },
  },
];

export const CAREER = {
  main: "Software Engineer / 11 years",
  clients: "ANA / JAL / JCB / Profelier",
} as const;

export const MUSIC = {
  instruments: "Piano / Trumpet",
  link: {
    label: "Vinculum Philharmonic",
    href: "https://vinculumphil.jp/",
  },
} as const;

export const MOVIES = {
  link: {
    label: "Filmarks",
    href: "https://filmarks.com/users/Ryumilkrick",
  },
} as const;

export const CONTACT = {
  email: "ryu8mk@gmail.com",
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/makky.ryu__88/",
    },
  ],
} as const;
