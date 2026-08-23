import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScrollHint } from "@/components/ScrollHint";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-6 pb-32">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center">
        <div className="hero-fade-in hero-mask w-full max-w-[520px]">
          <Image
            src="/image6.png"
            alt="Ryu Yamaki — illustration of an island, piano, and trumpet"
            width={1200}
            height={800}
            sizes="(min-width: 640px) 520px, 90vw"
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </div>
        <ScrollHint />
      </section>

      <Reveal className="mt-[40vh] sm:mt-[48vh]">
        <header className="flex flex-col items-center text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-neutral-300/60 sm:h-32 sm:w-32">
            <Image
              src="/ryu_avatar_v3.jpg"
              alt="Ryu Yamaki"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-3xl font-light tracking-tight sm:text-4xl">
            Ryu Yamaki
          </h1>
          <p className="mt-3 text-[12px] tracking-[0.3em] text-neutral-500">
            Tokyo
          </p>
        </header>
      </Reveal>

      <Reveal delay={150} className="mt-24 sm:mt-28">
        <nav className="flex flex-col items-center gap-6 text-center text-[15px] text-neutral-800 sm:text-base">
          <Link
            href="/ai"
            className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
          >
            AI活用支援
          </Link>
        </nav>
      </Reveal>

      <Reveal delay={250} className="mt-24 sm:mt-28">
        <div aria-hidden className="mx-auto h-px w-24 bg-neutral-300" />
      </Reveal>

      <Reveal delay={300} className="mt-14 sm:mt-16">
        <ul className="flex items-center justify-center gap-8 text-[14px] text-neutral-600">
          <li>
            <a
              href="https://www.instagram.com/makky.ryu__88/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:ryu8mk@gmail.com"
              className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
            >
              Email
            </a>
          </li>
        </ul>
      </Reveal>
    </main>
  );
}
