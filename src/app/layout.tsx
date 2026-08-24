import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryu Yamaki",
  description:
    "I build software, play music, and spend a lot of time thinking about people, cities, and the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f0e8db] text-neutral-900">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
