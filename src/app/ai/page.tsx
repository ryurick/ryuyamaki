import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CAREER,
  CASES,
  CONTACT,
  CONTACT_URL,
  FLOW,
  HERO,
  NAV,
  PRICING,
  PRICING_NOTE,
  SERVICES,
} from "@/content/ai";

export const metadata: Metadata = {
  title: "中小会社・個人事業主のAI/IT活用支援",
  description:
    "小さな会社や個人事業主の面倒な作業を、AIで減らします。まず30分の無料診断から。",
  robots: {
    index: true,
    follow: true,
  },
};

const TEAL = "text-[#0F6E66]";
const GRAY = "text-[#6B7280]";

function ServiceIcon({ name }: { name: (typeof SERVICES)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `h-7 w-7 ${TEAL}`,
    "aria-hidden": true,
  } as const;

  if (name === "writing") {
    return (
      <svg {...common}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z" />
        <path d="M14 3v6h6" />
        <path d="M8 13h5" />
        <path d="M8 17h5" />
      </svg>
    );
  }
  if (name === "entry") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8.5 7h7" />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2} />
        <path d="M8.5 16h.01M12 16h.01M15.5 16h.01" strokeWidth={2} />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21 12a9 9 0 1 1-2.94-6.66" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
      {children}
    </h2>
  );
}

export default function AiPage() {
  return (
    <div className="w-full flex-1 bg-white text-[#111]">
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="flex items-center justify-between gap-4 py-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Ryu Yamaki
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-6 text-sm md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[#0F6E66]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-md bg-[#0F6E66] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0c5a54]"
            >
              無料30分診断
            </a>
          </div>
        </header>

        <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <h1 className="text-[26px] font-bold leading-[1.5] tracking-tight sm:text-3xl">
              {HERO.title[0]}
              <br />
              {HERO.title[1]}
            </h1>
            <p className={`mt-6 text-[15px] leading-[1.9] sm:text-base ${GRAY}`}>
              {HERO.sub}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-md bg-[#0F6E66] px-7 py-3.5 font-medium text-white transition-colors hover:bg-[#0c5a54]"
            >
              {HERO.cta}
            </a>
          </div>
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl lg:max-w-none">
            <Image
              src="/ryu_avatar_v3.jpg"
              alt="Ryu Yamaki"
              width={640}
              height={640}
              sizes="(min-width: 1024px) 380px, 320px"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section id="service" className="py-12 sm:py-16 md:py-20">
          <SectionTitle>サービス</SectionTitle>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.icon}
                className="rounded-xl border border-neutral-200 p-6 sm:p-7"
              >
                <ServiceIcon name={service.icon} />
                <h3 className="mt-5 font-bold leading-[1.7]">{service.title}</h3>
                <p className={`mt-3 text-sm leading-[1.9] ${GRAY}`}>
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="flow" className="py-12 sm:py-16 md:py-20">
          <SectionTitle>進め方</SectionTitle>
          <ol className="mt-10 grid gap-9 md:grid-cols-3">
            {FLOW.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F6E66] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className={`mt-2 text-sm leading-[1.8] ${GRAY}`}>{step.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="py-12 sm:py-16 md:py-20">
          <SectionTitle>構築メニュー（目安）</SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="font-bold leading-[1.7]">{item.title}</h3>
                <p className={`mt-3 text-[13px] leading-[1.8] ${GRAY}`}>
                  {item.example}
                </p>
                <p className={`mt-auto pt-6 text-2xl font-bold ${TEAL}`}>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <p className={`mt-7 text-center text-sm ${GRAY}`}>{PRICING_NOTE}</p>
        </section>

        <section id="cases" className="py-12 sm:py-16 md:py-20">
          <SectionTitle>事例</SectionTitle>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {CASES.map((c) => {
              const body = (
                <>
                  <p className={`text-[13px] font-medium ${TEAL}`}>{c.label}</p>
                  <h3 className="mt-3 font-bold leading-[1.7]">{c.title}</h3>
                  <p className={`mt-3 text-sm leading-[1.9] ${GRAY}`}>
                    {c.comment}
                  </p>
                  {c.href && (
                    <p
                      className={`mt-4 text-[13px] ${TEAL} underline decoration-[#0F6E66]/40 underline-offset-4`}
                    >
                      {new URL(c.href).hostname}
                    </p>
                  )}
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-neutral-200 p-6 transition-colors hover:border-[#0F6E66]/50 sm:p-7"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="rounded-xl border border-neutral-200 p-6 sm:p-7"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </section>

        <section id="career" className="py-12 text-center sm:py-16 md:py-20">
          <SectionTitle>経歴</SectionTitle>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5">
            <span className={`text-5xl font-bold tracking-tight ${TEAL}`}>
              {CAREER.years}
            </span>
            <p className="text-[15px] sm:text-base">
              {CAREER.textParts.map((part, i) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <a
                    key={i}
                    href={part.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${TEAL} underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]`}
                  >
                    {part.label}
                  </a>
                ),
              )}
            </p>
          </div>
          <p className={`mt-6 text-sm tracking-[0.08em] ${GRAY}`}>
            {CAREER.fields}
          </p>
        </section>

        <section id="contact" className="py-12 text-center sm:py-16 md:py-20">
          <SectionTitle>{CONTACT.title}</SectionTitle>
          <p
            className={`mx-auto mt-5 max-w-[640px] text-[15px] leading-[1.9] sm:text-base ${GRAY}`}
          >
            {CONTACT.text}
          </p>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-[#0F6E66] px-12 py-3.5 font-medium text-white transition-colors hover:bg-[#0c5a54]"
          >
            {CONTACT.button}
          </a>
        </section>

        <footer className="flex items-center justify-between border-t border-neutral-200 py-8 text-sm">
          <p className={GRAY}>© 2026 Ryu Yamaki</p>
          <Link
            href="/"
            className={`${GRAY} transition-colors hover:text-[#111]`}
          >
            About
          </Link>
        </footer>
      </div>
    </div>
  );
}
