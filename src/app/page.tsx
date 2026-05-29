import Image from "next/image";
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
          <p className="mt-8 text-[15px] tracking-[0.3em] text-neutral-500 sm:text-base">
            八巻 竜
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
            Ryu Yamaki
          </h1>
        </header>
      </Reveal>

      <section className="mt-32 space-y-12 text-center text-[15px] leading-[2] text-neutral-700 sm:mt-40 sm:text-base">
        <Reveal>
          <p>ソフトウェアを作り、音楽をしています。</p>
        </Reveal>

        <Reveal delay={150}>
          <p>
            東京に住んでいます。
            <br />
            AIやピアノ、人が集まる場所が
            <br />
            好きです。
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p>
            エンジニアを11年。
            <br />
            最近はAIを使ったものも
            <br />
            いくつか作っています。
          </p>
        </Reveal>
      </section>

      <Reveal delay={350} className="mt-28 sm:mt-36">
        <section className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
            WORKS
          </h2>
          <ul className="flex max-w-[420px] flex-col gap-8 text-[15px] leading-[2] text-neutral-700 sm:text-base">
            <li>
              <p className="font-medium tracking-tight text-neutral-900">
                Engineering
              </p>
              <p className="mt-1 text-neutral-600">
                金融・教育・航空などのプロダクト開発に、業務委託として関わっています。
              </p>
            </li>
            <li>
              <p className="font-medium tracking-tight text-neutral-900">
                Asatto
              </p>
              <p className="mt-1 text-neutral-600">
                明日の朝、三つだけ。寝る前に書くと、朝の通知とロック画面に届く iOS アプリ。
              </p>
            </li>
            <li>
              <a
                href="https://otonnect.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
              >
                Otonnect
              </a>
              <p className="mt-1 text-neutral-600">
                曲を送ると、誰かから曲が届く。匿名で音楽を交換する Web アプリ。
              </p>
            </li>
            <li>
              <a
                href="https://wanawana.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
              >
                wanawana
              </a>
              <p className="mt-1 text-neutral-600">
                やりたいことを書いて、友達と応援しあう。願いの共有アプリ。
              </p>
            </li>
            <li>
              <a
                href="https://helensmatch.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
              >
                Helen&rsquo;s Match
              </a>
              <p className="mt-1 text-neutral-600">
                ペット商品の診断アプリ。家族のブランド向けに、企画から実装まで一人で。
              </p>
            </li>
            <li>
              <a
                href="https://www.instagram.com/helenspetbed/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-700"
              >
                Helen&rsquo;s PetBed
              </a>
              <p className="mt-1 text-neutral-600">
                家族で営むペット用品のブランド。主にITまわりを担っています。
              </p>
            </li>
          </ul>
        </section>
      </Reveal>

      <Reveal delay={400} className="mt-28 sm:mt-36">
        <section className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
            HOBBIES
          </h2>
          <p className="text-[15px] leading-[2] text-neutral-700 sm:text-base">
            ピアノ、トランペット、島巡り、
            <br />
            お酒、映画、プログラミング。
          </p>
        </section>
      </Reveal>

      <Reveal delay={450} className="mt-24 sm:mt-32">
        <section className="flex flex-col items-center gap-5">
          <h2 className="text-[11px] font-medium tracking-[0.32em] text-neutral-400">
            ELSEWHERE
          </h2>
          <ul className="flex flex-col items-center gap-3 text-[15px] text-neutral-800">
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
        </section>
      </Reveal>

      <Reveal delay={200} className="mt-32 sm:mt-40">
        <div
          aria-hidden
          className="mx-auto h-px w-24 bg-neutral-300"
        />
      </Reveal>

      <section className="mt-16 space-y-10 text-center text-[14px] leading-[2] text-neutral-500 sm:mt-20 sm:text-[15px]">
        <Reveal>
          <p>I build software and play music.</p>
        </Reveal>

        <Reveal delay={150}>
          <p>
            Based in Tokyo.
            <br />
            I like AI, piano,
            <br />
            and places where people gather.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p>
            A software engineer for 11 years.
            <br />
            Lately, also building
            <br />
            things with AI.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
