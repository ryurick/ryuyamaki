import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { ScrollHint } from "@/components/ScrollHint";
import { HeroWaves } from "@/components/home/HeroWaves";
import { Magnetic } from "@/components/home/Magnetic";
import { Parallax } from "@/components/home/Parallax";
import { Marquee } from "@/components/home/Marquee";
import { MouseGlow } from "@/components/home/MouseGlow";
import { Rise } from "@/components/home/Rise";
import {
  CAREER_TEXT,
  CONTACT,
  HERO,
  MARQUEE_WORDS,
  MOVIES,
  MUSIC,
  NAV,
  WORKS,
} from "@/content/home";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const GRAY = "text-[#6B7280]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="relative w-full flex-1 overflow-x-clip bg-white text-[#111]">
      <MouseGlow />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-end px-6 py-3.5">
            <div className="flex items-center gap-8">
              <nav className="hidden items-center gap-7 sm:flex">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[11px] font-medium tracking-[0.22em] text-neutral-500 transition-colors hover:text-[#0F6E66]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Magnetic>
                <Link
                  href={HERO.aiLink.href}
                  className="inline-block rounded-full border border-neutral-300 px-4 py-2 text-[13px] transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]"
                >
                  {HERO.aiLink.label}
                </Link>
              </Magnetic>
            </div>
          </div>
        </header>

        <section className="relative mx-auto flex min-h-[calc(100svh-3.75rem)] w-full max-w-5xl flex-col px-6">
          <HeroWaves />

          <div className="relative flex flex-1 flex-col justify-center">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-8">
              <h1 className="logo-rise relative z-10 w-full max-w-[560px] shrink-0 sm:w-[48%]">
                <Image
                  src="/logo.png"
                  alt={HERO.name}
                  width={1845}
                  height={447}
                  sizes="(min-width: 1024px) 470px, 100vw"
                  loading="eager"
                  fetchPriority="high"
                  className="h-auto w-full"
                />
              </h1>
              <Parallax
                speed={-0.06}
                className="pointer-events-none sm:min-w-0 sm:flex-1"
              >
                <div className="float-slow">
                  <Image
                    src="/hero_art.png"
                    alt="ピアノ・トランペット・島・映画フィルムをひとつなぎに描いた線画"
                    width={1915}
                    height={403}
                    sizes="(min-width: 1024px) 540px, 100vw"
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full"
                  />
                </div>
              </Parallax>
            </div>
          </div>

          <div className="relative flex justify-center pb-8">
            <ScrollHint />
          </div>
        </section>

        <Marquee
          words={MARQUEE_WORDS}
          className={`${anton.className} border-y border-neutral-200 py-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-none sm:py-7`}
        />

        <main className="mx-auto w-full max-w-5xl px-6">
          <section id="works" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>WORKS</SectionLabel>
            </Rise>
            <ol className="mt-8">
              {WORKS.map((work, i) => {
                const inner = (
                  <div className="grid items-baseline gap-2 py-7 sm:grid-cols-[72px_1fr_auto] sm:gap-6 sm:py-9">
                    <span
                      className={`text-sm ${GRAY} transition-colors group-hover:text-[#0F6E66]`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.75rem] font-bold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-2 sm:text-4xl">
                        {work.title}
                      </h3>
                      <p className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm sm:text-[15px]">
                        <span className={GRAY}>{work.tag}</span>
                        {work.link && (
                          <span className="text-[#0F6E66] underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors group-hover:decoration-[#0F6E66]">
                            {work.link.label}
                          </span>
                        )}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="hidden text-2xl text-[#0F6E66] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                    >
                      →
                    </span>
                  </div>
                );
                return (
                  <Rise key={work.title} delay={i * 90}>
                    <li className="group border-b border-neutral-200 transition-colors hover:bg-[#0F6E66]/[0.03] first:border-t">
                      {work.link ? (
                        work.link.external ? (
                          <a
                            href={work.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {inner}
                          </a>
                        ) : (
                          <Link href={work.link.href} className="block">
                            {inner}
                          </Link>
                        )
                      ) : (
                        inner
                      )}
                    </li>
                  </Rise>
                );
              })}
            </ol>
          </section>

          <section id="career" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>CAREER</SectionLabel>
            </Rise>
            <Rise delay={90}>
              <p className="mt-6 max-w-[720px] text-[15px] leading-[1.9] sm:text-base">
                {CAREER_TEXT}
              </p>
            </Rise>
          </section>

          <section id="music" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>MUSIC</SectionLabel>
            </Rise>
            <Rise delay={90}>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px] sm:text-base">
                <span>{MUSIC.instruments}</span>
                <a
                  href={MUSIC.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F6E66] underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]"
                >
                  {MUSIC.link.label}
                </a>
              </p>
            </Rise>
          </section>

          <section id="movies" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>MOVIES</SectionLabel>
            </Rise>
            <Rise delay={90}>
              <p className="mt-6 text-[15px] sm:text-base">
                <a
                  href={MOVIES.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F6E66] underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]"
                >
                  {MOVIES.link.label}
                </a>
              </p>
            </Rise>
          </section>

          <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
            <Rise>
              <div className="relative overflow-hidden rounded-3xl bg-[#0A2724] px-7 py-14 text-white sm:px-14 sm:py-20">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#0F6E66]/40 blur-[120px]"
                />
                <div className="relative">
                  <p
                    className={`${anton.className} text-[clamp(3rem,9vw,7rem)] leading-none`}
                  >
                    CONTACT
                  </p>
                  <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="break-all text-xl font-bold tracking-tight underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white sm:text-3xl"
                      >
                        {CONTACT.email}
                      </a>
                      <ul className="mt-6 flex items-center gap-5">
                        {CONTACT.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/30">
                      <Image
                        src="/ryu_avatar_v3.jpg"
                        alt="Ryu Yamaki"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-14 text-xs text-white/50 sm:mt-16">
                    © 2026 Ryu Yamaki
                  </p>
                </div>
              </div>
            </Rise>
          </section>
        </main>
      </div>
    </div>
  );
}
