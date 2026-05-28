import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asatto Privacy Policy",
  description:
    "Asatto does not collect, store, or transmit any personal data. Everything stays on your device.",
};

const updatedAt = "2026-05-28";

export default function AsattoPrivacyPolicy() {
  return (
    <main className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-6 pt-24 pb-32 sm:pt-32">
      <header className="flex flex-col items-center text-center">
        <p className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
          ASATTO
        </p>
        <h1 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[13px] tracking-[0.2em] text-neutral-500">
          Last updated: {updatedAt}
        </p>
      </header>

      <section className="mt-20 space-y-10 text-[15px] leading-[2] text-neutral-700 sm:text-base">
        <p>
          Asatto does not collect, store, or transmit any personal data.
        </p>

        <p>
          All task entries and settings are stored locally on your device
          and never leave it. There are no servers, analytics, advertising
          SDKs, or third-party trackers integrated into this app.
        </p>

        <p>
          Notifications are scheduled and delivered locally on your device
          through Apple&rsquo;s UserNotifications framework. No notification
          content is sent to external servers at any point.
        </p>

        <p>
          The Lock Screen widget reads task data from a shared container on
          your device only. Nothing is uploaded, synced, or shared with any
          remote service.
        </p>

        <p>
          If this policy changes in the future, the &ldquo;Last updated&rdquo;
          date above will reflect that. Any change will be limited to keeping
          the same commitment: your data stays with you.
        </p>
      </section>

      <section className="mt-20 space-y-6 text-[15px] leading-[2] text-neutral-700 sm:text-base">
        <h2 className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
          日本語
        </h2>
        <p>
          Asatto は、ユーザーの個人情報を一切収集・保存・送信しません。
        </p>
        <p>
          書き込んだタスクや設定は、すべて端末内に保存され、外部に送信されることはありません。
          サーバー、分析ツール、広告SDK、サードパーティのトラッカーはこのアプリに組み込まれていません。
        </p>
        <p>
          通知は、Apple の UserNotifications フレームワークを通じて端末内で予約・配信されます。
          通知の内容が外部に送信されることはありません。
        </p>
        <p>
          ロック画面ウィジェットは、端末内の共有領域からタスクを読み取って表示するだけです。
          外部にアップロード・同期・共有されることはありません。
        </p>
      </section>

      <section className="mt-20 flex flex-col items-center gap-2 text-center text-[13px] leading-[2] text-neutral-500">
        <p>Contact</p>
        <a
          href="mailto:ryu8mk@gmail.com"
          className="font-medium tracking-tight text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
        >
          ryu8mk@gmail.com
        </a>
      </section>

      <div className="mt-24 flex justify-center">
        <Link
          href="/"
          className="text-[13px] tracking-[0.2em] text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
        >
          ryuyamaki.com
        </Link>
      </div>
    </main>
  );
}
