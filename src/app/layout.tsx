// src/app/layout.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/products", label: "プロダクト" },
  { href: "/research/integrated-immune-system", label: "論文" },
  { href: "/company", label: "会社概要" },
  { href: "/legal", label: "リーガル" },
  { href: "/purchase", label: "購入" },
  { href: "/faq", label: "Q&A" },
  { href: "/contact", label: "お問い合わせ" },
];

export const metadata: Metadata = {
  title: "NEXSPACE | AI Engine-Oriented Systems",
  description:
    "NEXSPACEは、AIを単体の生成モデルではなくシステムのエンジンとして扱い、現場で動くプロダクトを提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="relative h-12 w-52 md:h-16 md:w-72">
                  <Image src="/img/nexspace-logo.png" alt="NEXSPACE" fill className="object-contain" priority />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
                  {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-sky-600">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 px-4 pb-3 md:hidden">
              <nav className="flex gap-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {navLinks.map((item) => (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 pb-24 md:pb-8">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-slate-100 py-4 text-xs text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} NEXSPACE. All rights reserved.</div>
            </div>
          </footer>
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
