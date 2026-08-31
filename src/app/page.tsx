import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { ScrollHint } from "@/components/ScrollHint";
import { HeroWaves } from "@/components/home/HeroWaves";
import { Parallax } from "@/components/home/Parallax";
import { Marquee } from "@/components/home/Marquee";
import { MouseGlow } from "@/components/home/MouseGlow";
import { Rise } from "@/components/home/Rise";
import {
  CAREER,
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
          <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6 py-4 sm:justify-end">
            <nav className="flex items-center gap-4 sm:gap-7">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-medium tracking-[0.14em] text-neutral-500 transition-colors hover:text-[#0F6E66] sm:text-[11px] sm:tracking-[0.22em]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="relative mx-auto flex min-h-[calc(100svh-3.75rem)] w-full max-w-5xl flex-col px-6">
          <HeroWaves />

          <div className="relative flex flex-1 flex-col justify-center">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-8">
              <div className="relative z-10 w-full max-w-[560px] shrink-0 sm:w-[48%]">
                <h1 className="logo-rise">
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
                <p
                  className="logo-rise mt-5 text-sm text-[#374151] sm:text-[15px]"
                  style={{ animationDelay: "1400ms", animationDuration: "2400ms" }}
                >
                  {HERO.taglineJa}
                </p>
                <p
                  className="logo-rise mt-1.5 text-xs text-[#9CA3AF] sm:text-sm"
                  style={{ animationDelay: "1700ms", animationDuration: "2400ms" }}
                >
                  {HERO.tagline}
                </p>
              </div>
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
          <section id="career" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>CAREER</SectionLabel>
            </Rise>
            <Rise delay={90}>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px] sm:text-base">
                <span>{CAREER.main}</span>
                <span className={GRAY}>{CAREER.clients}</span>
              </p>
              <p className={`mt-2 text-sm ${GRAY}`}>{CAREER.tech}</p>
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

          <section id="works" className="scroll-mt-20 pt-20 sm:pt-28">
            <Rise>
              <SectionLabel>WORKS</SectionLabel>
            </Rise>
            <ol className="mt-8">
              {WORKS.map((work, i) => (
                <Rise key={work.title} delay={i * 90}>
                  <li className="group border-b border-neutral-200 transition-colors hover:bg-[#0F6E66]/[0.03] first:border-t">
                    <div className="grid items-baseline gap-2 py-7 sm:grid-cols-[72px_1fr] sm:gap-6 sm:py-9">
                      <span
                        className={`text-sm ${GRAY} transition-colors group-hover:text-[#0F6E66]`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1.75rem] font-bold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-2 sm:text-4xl">
                          {work.title}
                        </h3>
                        <p className={`mt-2 text-sm sm:text-[15px] ${GRAY}`}>
                          {work.description}
                        </p>
                        {work.links.length > 0 && (
                          <p className="mt-4 flex flex-wrap gap-2.5">
                            {work.links.map((link) => {
                              const pill =
                                "inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-1.5 text-[13px] text-[#111] transition-colors hover:border-[#0F6E66] hover:bg-[#0F6E66]/5 hover:text-[#0F6E66] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6E66]";
                              return link.external ? (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={pill}
                                >
                                  {link.label}
                                  <span aria-hidden className="text-[0.9em]">
                                    ↗
                                  </span>
                                </a>
                              ) : (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={pill}
                                >
                                  {link.label}
                                  <span aria-hidden className="text-[0.9em]">
                                    →
                                  </span>
                                </Link>
                              );
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                </Rise>
              ))}
            </ol>
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
