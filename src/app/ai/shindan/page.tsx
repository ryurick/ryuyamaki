import type { Metadata } from "next";
import Link from "next/link";
import { Shindan } from "@/components/ai/Shindan";
import { MONITOR } from "@/content/ai";

export const metadata: Metadata = {
  title: "かんたん診断｜中小会社・個人事業主のAI/IT活用支援",
  description:
    "質問に答えるだけ・約1分。AIで減らせそうな作業と、費用の目安が分かります。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShindanPage() {
  return (
    <div className="flex min-h-svh w-full flex-1 flex-col bg-white text-[#111]">
      <a
        href="/ai#pricing"
        className="block bg-[#0F6E66] px-4 py-2.5 text-center text-[13px] font-medium text-white transition-colors hover:bg-[#0c5a54]"
      >
        {MONITOR.banner}
      </a>
      <header className="mx-auto w-full max-w-[640px] px-6 pt-6">
        <Link
          href="/ai"
          className="text-sm font-bold tracking-tight transition-colors hover:text-[#0F6E66]"
        >
          Ryu Yamaki｜AI活用支援
        </Link>
      </header>
      <Shindan />
    </div>
  );
}
