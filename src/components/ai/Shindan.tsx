"use client";

import { useState } from "react";
import { CASUAL_CONTACT, CONTACT_URL, SHINDAN } from "@/content/ai";

const TEAL = "text-[#0F6E66]";
const GRAY = "text-[#6B7280]";

const pillBase =
  "rounded-full border px-5 py-2.5 text-sm transition-colors cursor-pointer";
const pillOff = `${pillBase} border-neutral-300 text-[#111] hover:border-[#0F6E66] hover:text-[#0F6E66]`;
const pillOn = `${pillBase} border-[#0F6E66] bg-[#0F6E66] text-white`;

export function Shindan() {
  const [step, setStep] = useState(0);
  const [biz, setBiz] = useState<string | null>(null);
  const [works, setWorks] = useState<string[]>([]);
  const [ai, setAi] = useState<string | null>(null);

  const toggleWork = (key: string) => {
    setWorks((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const reset = () => {
    setStep(0);
    setBiz(null);
    setWorks([]);
    setAi(null);
  };

  const menus = Array.from(
    new Set(works.map((k) => SHINDAN.changes[k]?.menu).filter(Boolean)),
  );

  return (
    <div className="mx-auto mt-10 max-w-[720px] rounded-2xl border border-neutral-200 p-6 sm:p-10">
      {step < 3 && (
        <p className={`text-[13px] font-medium ${TEAL}`}>{step + 1} / 3</p>
      )}

      {step === 0 && (
        <div>
          <p className="mt-3 font-bold">{SHINDAN.q1.question}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SHINDAN.q1.options.map((o) => (
              <button
                key={o.key}
                type="button"
                className={biz === o.key ? pillOn : pillOff}
                onClick={() => {
                  setBiz(o.key);
                  setStep(1);
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="mt-3 font-bold">{SHINDAN.q2.question}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SHINDAN.q2.options.map((o) => (
              <button
                key={o.key}
                type="button"
                className={works.includes(o.key) ? pillOn : pillOff}
                onClick={() => toggleWork(o.key)}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="mt-7 flex items-center gap-5">
            <button
              type="button"
              disabled={works.length === 0}
              onClick={() => setStep(2)}
              className="rounded-md bg-[#0F6E66] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0c5a54] disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              {SHINDAN.next}
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className={`text-sm ${GRAY} underline decoration-neutral-300 underline-offset-4 hover:text-[#111]`}
            >
              {SHINDAN.back}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="mt-3 font-bold">{SHINDAN.q3.question}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SHINDAN.q3.options.map((o) => (
              <button
                key={o.key}
                type="button"
                className={ai === o.key ? pillOn : pillOff}
                onClick={() => {
                  setAi(o.key);
                  setStep(3);
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="mt-7">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`text-sm ${GRAY} underline decoration-neutral-300 underline-offset-4 hover:text-[#111]`}
            >
              {SHINDAN.back}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="font-bold">{SHINDAN.resultTitle}</p>
          {ai && SHINDAN.intro[ai] && (
            <p className={`mt-3 text-sm leading-[1.9] ${GRAY}`}>
              {SHINDAN.intro[ai]}
            </p>
          )}
          <ul className="mt-5 space-y-2.5">
            {works.map((k) =>
              SHINDAN.changes[k] ? (
                <li key={k} className="flex gap-2.5 text-sm leading-[1.8]">
                  <span aria-hidden className={`mt-[2px] shrink-0 ${TEAL}`}>
                    ✓
                  </span>
                  {SHINDAN.changes[k].change}
                </li>
              ) : null,
            )}
          </ul>
          {biz && SHINDAN.bizExtra[biz] && (
            <p className={`mt-4 text-sm leading-[1.9] ${GRAY}`}>
              {SHINDAN.bizExtra[biz]}
            </p>
          )}
          <p className="mt-6 text-sm font-bold">{SHINDAN.menuTitle}</p>
          <ul className={`mt-2 space-y-1.5 text-sm ${GRAY}`}>
            {menus.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#0F6E66] px-7 py-3 font-medium text-white transition-colors hover:bg-[#0c5a54]"
            >
              無料30分診断を予約
            </a>
            <a
              href={CASUAL_CONTACT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-6 py-3 font-medium transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]"
            >
              質問フォーム
              <span aria-hidden className="text-[0.9em]">
                ↗
              </span>
            </a>
            <button
              type="button"
              onClick={reset}
              className={`text-sm ${GRAY} underline decoration-neutral-300 underline-offset-4 hover:text-[#111]`}
            >
              {SHINDAN.retry}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
