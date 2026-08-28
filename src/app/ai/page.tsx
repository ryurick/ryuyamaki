import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AI_CAN,
  CAREER,
  CASES,
  CASES_EXTRA,
  CASES_EXTRA_FOOD,
  CASUAL_CONTACT,
  CONTACT,
  CONTRACT_NOTE,
  CONTACT_URL,
  FLOW,
  HERO,
  NAV,
  PAIN_CATEGORIES,
  PRICING,
  PRICING_NOTE,
  SERVICES_LEAD,
  SERVICES_NOTE,
} from "@/content/ai";

export const metadata: Metadata = {
  title: "中小会社・個人事業主のAI/IT活用支援",
  description:
    "小さな会社や個人事業主の面倒な作業をAIで減らします。まず30分の無料診断から。",
  robots: {
    index: true,
    follow: true,
  },
};

const TEAL = "text-[#0F6E66]";
const GRAY = "text-[#6B7280]";

function ServiceIcon({
  name,
}: {
  name: (typeof PAIN_CATEGORIES)[number]["icon"];
}) {
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

  if (name === "keiri") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8.5 7h7" />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2} />
        <path d="M8.5 16h.01M12 16h.01M15.5 16h.01" strokeWidth={2} />
      </svg>
    );
  }
  if (name === "sales") {
    return (
      <svg {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 8.5h8" />
        <path d="M8 12h5" />
      </svg>
    );
  }
  if (name === "shukyaku") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
      </svg>
    );
  }
  if (name === "ec") {
    return (
      <svg {...common}>
        <circle cx="9" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
        <path d="M3 4h2l2.4 11h10.2L20 7H6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-block rounded-md bg-[#0F6E66] px-7 py-3.5 font-medium text-white transition-colors hover:bg-[#0c5a54]"
              >
                {HERO.cta}
              </a>
              <a
                href={CASUAL_CONTACT.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-6 py-3.5 font-medium transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]"
              >
                {CASUAL_CONTACT.linkLabel}
                <span aria-hidden className="text-[0.9em]">↗</span>
              </a>
            </div>
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
          <p className={`mx-auto mt-5 max-w-[640px] text-center text-sm leading-[1.9] sm:text-[15px] ${GRAY}`}>
            {SERVICES_LEAD}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PAIN_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-neutral-200 p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <ServiceIcon name={category.icon} />
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-2.5 text-sm leading-[1.8] ${GRAY}`}
                    >
                      <span aria-hidden className={`mt-[2px] shrink-0 ${TEAL}`}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={`mx-auto mt-7 max-w-[640px] text-center text-sm leading-[1.9] sm:text-[15px]`}>
            {SERVICES_NOTE}
          </p>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <SectionTitle>{AI_CAN.title}</SectionTitle>
          <div className="mx-auto mt-10 grid max-w-[880px] gap-5 sm:grid-cols-2">
            {AI_CAN.items.map((item) => (
              <div
                key={item.scene}
                className="rounded-xl border border-neutral-200 p-6 sm:p-7"
              >
                <p className={`text-[13px] font-medium ${TEAL}`}>
                  {item.scene}
                </p>
                <p className={`mt-3 text-sm leading-[1.8] ${GRAY}`}>
                  <span className="mr-2 text-[12px]">いま</span>
                  {item.before}
                </p>
                <p className="mt-2 text-sm font-medium leading-[1.8]">
                  <span className={`mr-2 text-[12px] font-bold ${TEAL}`}>
                    これから
                  </span>
                  {item.after}
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            {CASES.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-neutral-200 p-6 sm:p-7"
              >
                <p className={`text-[13px] font-medium ${TEAL}`}>{c.label}</p>
                <h3 className="mt-3 font-bold leading-[1.7]">{c.title}</h3>
                {c.comment && (
                  <p className={`mt-3 text-sm leading-[1.9] ${GRAY}`}>
                    {c.comment}
                  </p>
                )}
                {c.links.length > 0 && (
                  <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {c.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] ${TEAL} underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]`}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-neutral-300 p-6 sm:p-7">
              <p className={`text-[13px] font-medium ${TEAL}`}>
                {CASES_EXTRA_FOOD.label}
              </p>
              <h3 className="mt-3 font-bold leading-[1.7]">
                {CASES_EXTRA_FOOD.title}
              </h3>
              <p className={`mt-3 text-sm leading-[1.9] ${GRAY}`}>
                {CASES_EXTRA_FOOD.comment}
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-neutral-300 p-6 sm:p-7 md:col-span-2">
              <p className={`text-[13px] font-medium ${TEAL}`}>
                {CASES_EXTRA.label}
              </p>
              <h3 className="mt-3 font-bold leading-[1.7]">
                {CASES_EXTRA.title}
              </h3>
              <p className={`mt-3 max-w-[760px] text-sm leading-[1.9] ${GRAY}`}>
                {CASES_EXTRA.comment}
              </p>
            </div>
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
          <p className={`mt-2 text-sm tracking-[0.02em] ${GRAY}`}>
            {CAREER.tech}
          </p>
        </section>

        <section id="contact" className="py-12 text-center sm:py-16 md:py-20">
          <SectionTitle>{CONTACT.title}</SectionTitle>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-[#0F6E66] px-12 py-3.5 font-medium text-white transition-colors hover:bg-[#0c5a54]"
          >
            {CONTACT.button}
          </a>
          <p className={`mx-auto mt-6 max-w-[640px] text-sm leading-[1.9] ${GRAY}`}>
            {CASUAL_CONTACT.before}
            <a
              href={CASUAL_CONTACT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F6E66] underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]"
            >
              {CASUAL_CONTACT.linkLabel}
            </a>
            {CASUAL_CONTACT.after}
          </p>
          <p className={`mx-auto mt-10 max-w-[640px] text-sm leading-[1.9] ${GRAY}`}>
            {CONTRACT_NOTE.before}
            <a
              href={`mailto:${CONTRACT_NOTE.email}`}
              className="text-[#0F6E66] underline decoration-[#0F6E66]/40 underline-offset-4 transition-colors hover:decoration-[#0F6E66]"
            >
              {CONTRACT_NOTE.linkLabel}
            </a>
            {CONTRACT_NOTE.after}
          </p>
        </section>

        <footer className="flex items-center justify-between border-t border-neutral-200 py-8 text-sm">
          <p className={GRAY}>© 2026 Ryu Yamaki</p>
          <Link
            href="/"
            className={`${GRAY} transition-colors hover:text-[#111]`}
          >
            プロフィール
          </Link>
        </footer>
      </div>
    </div>
  );
}
