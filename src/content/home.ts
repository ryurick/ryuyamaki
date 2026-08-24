// トップページ（/）の文言定数。WORKSはこの配列に足すだけで項目が増える。

export const HERO = {
  name: "RYU YAMAKI",
  aiLink: { label: "AI活用支援 →", href: "/ai" },
} as const;

export const NAV = [
  { label: "WORKS", href: "#works" },
  { label: "CAREER", href: "#career" },
  { label: "MUSIC", href: "#music" },
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

export type WorkLink = {
  label: string;
  href: string;
  external: boolean;
};

export type Work = {
  title: string;
  tag: string;
  link: WorkLink | null;
};

export const WORKS: readonly Work[] = [
  {
    title: "Helen's Match",
    tag: "Web App / EC",
    link: {
      label: "サイトを見る",
      href: "https://helensmatch.vercel.app/",
      external: true,
    },
  },
  {
    title: "AI商品棚",
    tag: "AI / Retail",
    link: {
      label: "ニュース記事",
      href: "https://secureinc.co.jp/news/detail.html?id=1641",
      external: true,
    },
  },
  {
    title: "税理士事務所の記事作成支援",
    tag: "AI / Writing",
    link: null,
  },
  {
    title: "AI活用支援",
    tag: "AI / Consulting",
    link: { label: "詳しく", href: "/ai", external: false },
  },
];

export const CAREER_TEXT =
  "エンジニアとして11年。ANA・JAL・JCB・プロフェリエなどの業務システムを開発・設計してきました。";

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
