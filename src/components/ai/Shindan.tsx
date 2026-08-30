"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASUAL_CONTACT, CONTACT_URL, SHINDAN } from "@/content/ai";

const TEAL = "text-[#0F6E66]";
const GRAY = "text-[#6B7280]";

type StepKey = "biz" | "size" | "works" | "main" | "it" | "ai" | "result";

function Bubble({ text }: { text: string }) {
  return (
    <div className="flex items-start justify-end gap-3">
      <div className="relative max-w-[calc(100%-64px)] rounded-2xl rounded-tr-sm border border-neutral-200 bg-white px-5 py-4 text-[15px] leading-[1.8]">
        {text}
      </div>
      <div className="shrink-0 text-center">
        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-neutral-200">
          <Image
            src="/ryu_avatar_v3.jpg"
            alt={SHINDAN.speaker}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <p className={`mt-1 text-[10px] ${GRAY}`}>{SHINDAN.speaker}</p>
      </div>
    </div>
  );
}

function OptionRow({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border px-5 py-4 text-left text-[15px] transition-colors ${
        selected
          ? "border-[#0F6E66] bg-[#0F6E66]/5"
          : "border-neutral-200 bg-white hover:border-[#0F6E66]/50"
      }`}
    >
      <span
        aria-hidden
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${
          selected
            ? "border-[#0F6E66] bg-[#0F6E66] text-white"
            : "border-neutral-300 text-transparent"
        }`}
      >
        ✓
      </span>
      {label}
    </button>
  );
}

export function Shindan() {
  const [stepIndex, setStepIndex] = useState(0);
  const [biz, setBiz] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [works, setWorks] = useState<string[]>([]);
  const [main, setMain] = useState<string | null>(null);
  const [it, setIt] = useState<string | null>(null);
  const [ai, setAi] = useState<string | null>(null);

  const steps: StepKey[] =
    works.length > 1
      ? ["biz", "size", "works", "main", "it", "ai", "result"]
      : ["biz", "size", "works", "it", "ai", "result"];
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const totalQuestions = steps.length - 1;
  const questionNumber = Math.min(stepIndex + 1, totalQuestions);

  const next = () => setStepIndex((i) => i + 1);
  const back = () => setStepIndex((i) => Math.max(0, i - 1));
  const reset = () => {
    setStepIndex(0);
    setBiz(null);
    setSize(null);
    setWorks([]);
    setMain(null);
    setIt(null);
    setAi(null);
  };

  const toggleWork = (key: string) => {
    setWorks((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
    setMain(null);
  };

  const mainKey = works.length === 1 ? works[0] : main;
  const others = works.filter((k) => k !== mainKey);
  const menus = Array.from(
    new Set(works.map((k) => SHINDAN.changes[k]?.menu).filter(Boolean)),
  );
  const notes = [
    ai ? SHINDAN.intro[ai] : "",
    it ? SHINDAN.itNote[it] : "",
    size ? SHINDAN.sizeNote[size] : "",
    biz ? SHINDAN.bizExtra[biz] : "",
  ].filter(Boolean);

  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-6 pb-16">
      {step !== "result" && (
        <div className="pt-8">
          <p className={`text-[13px] font-medium ${TEAL}`}>
            Q{questionNumber}/{totalQuestions}
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-[#0F6E66] transition-all duration-500"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      )}

      {step === "biz" && (
        <div key="biz" className="step-in mt-8">
          <Bubble text={SHINDAN.q1.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.q1.options.map((o) => (
              <OptionRow
                key={o.key}
                label={o.label}
                selected={biz === o.key}
                onClick={() => {
                  setBiz(o.key);
                  next();
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === "size" && (
        <div key="size" className="step-in mt-8">
          <Bubble text={SHINDAN.qSize.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.qSize.options.map((o) => (
              <OptionRow
                key={o.key}
                label={o.label}
                selected={size === o.key}
                onClick={() => {
                  setSize(o.key);
                  next();
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === "works" && (
        <div key="works" className="step-in mt-8">
          <Bubble text={SHINDAN.q2.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.q2.options.map((o) => (
              <OptionRow
                key={o.key}
                label={o.label}
                selected={works.includes(o.key)}
                onClick={() => toggleWork(o.key)}
              />
            ))}
          </div>
        </div>
      )}

      {step === "main" && (
        <div key="main" className="step-in mt-8">
          <Bubble text={SHINDAN.qMain.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.q2.options
              .filter((o) => works.includes(o.key))
              .map((o) => (
                <OptionRow
                  key={o.key}
                  label={o.label}
                  selected={main === o.key}
                  onClick={() => {
                    setMain(o.key);
                    next();
                  }}
                />
              ))}
          </div>
        </div>
      )}

      {step === "it" && (
        <div key="it" className="step-in mt-8">
          <Bubble text={SHINDAN.qIt.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.qIt.options.map((o) => (
              <OptionRow
                key={o.key}
                label={o.label}
                selected={it === o.key}
                onClick={() => {
                  setIt(o.key);
                  next();
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === "ai" && (
        <div key="ai" className="step-in mt-8">
          <Bubble text={SHINDAN.q3.bubble} />
          <div className="mt-6 space-y-3">
            {SHINDAN.q3.options.map((o) => (
              <OptionRow
                key={o.key}
                label={o.label}
                selected={ai === o.key}
                onClick={() => {
                  setAi(o.key);
                  next();
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === "result" && (
        <div key="result" className="step-in mt-8">
          <Bubble text={SHINDAN.resultBubble} />

          {mainKey && SHINDAN.changes[mainKey] && (
            <div className="mt-6 rounded-2xl border border-[#0F6E66]/40 bg-[#0F6E66]/5 p-6">
              <p className={`text-[13px] font-medium ${TEAL}`}>
                {SHINDAN.mainLabel}
              </p>
              <h2 className="mt-2 text-lg font-bold">
                {SHINDAN.q2.options.find((o) => o.key === mainKey)?.label}
              </h2>
              <p className="mt-3 text-sm leading-[1.9]">
                {SHINDAN.changes[mainKey].change}
              </p>
              <p className={`mt-3 text-sm ${GRAY}`}>
                {SHINDAN.changes[mainKey].menu}
              </p>
            </div>
          )}

          {others.length > 0 && (
            <div className="mt-5 rounded-2xl border border-neutral-200 p-6">
              <p className={`text-[13px] font-medium ${TEAL}`}>
                {SHINDAN.othersLabel}
              </p>
              <ul className="mt-3 space-y-2.5">
                {others.map((k) =>
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
            </div>
          )}

          {notes.length > 0 && (
            <p className={`mt-6 text-sm leading-[1.9] ${GRAY}`}>
              {notes.join("")}
            </p>
          )}

          <div className="mt-6">
            <p className="text-sm font-bold">{SHINDAN.menuTitle}</p>
            <ul className={`mt-2 space-y-1.5 text-sm ${GRAY}`}>
              {menus.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#0F6E66] px-7 py-3.5 font-medium text-white transition-colors hover:bg-[#0c5a54]"
            >
              無料30分診断を予約
            </a>
            <a
              href={CASUAL_CONTACT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-6 py-3.5 font-medium transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]"
            >
              質問フォーム
              <span aria-hidden className="text-[0.9em]">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm">
            <button
              type="button"
              onClick={reset}
              className={`${GRAY} underline decoration-neutral-300 underline-offset-4 hover:text-[#111]`}
            >
              {SHINDAN.retry}
            </button>
            <Link
              href="/ai"
              className={`${GRAY} underline decoration-neutral-300 underline-offset-4 hover:text-[#111]`}
            >
              ページに戻る
            </Link>
          </div>

          <p className={`mt-10 text-[13px] ${GRAY}`}>{SHINDAN.selfDemo}</p>
        </div>
      )}

      {step !== "result" && (
        <div className="mt-auto flex items-center justify-between pt-10">
          {stepIndex > 0 ? (
            <button
              type="button"
              onClick={back}
              className={`rounded-md border border-neutral-300 px-6 py-3 text-sm transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]`}
            >
              ← {SHINDAN.back}
            </button>
          ) : (
            <Link
              href="/ai"
              className="rounded-md border border-neutral-300 px-6 py-3 text-sm transition-colors hover:border-[#0F6E66] hover:text-[#0F6E66]"
            >
              ← ページに戻る
            </Link>
          )}
          {step === "works" && (
            <button
              type="button"
              disabled={works.length === 0}
              onClick={next}
              className="rounded-md bg-[#0F6E66] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0c5a54] disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              {SHINDAN.next} →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
