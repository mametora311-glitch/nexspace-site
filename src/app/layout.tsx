// src/app/layout.tsx
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
                  <a href="/" className="hover:text-sky-600">トップ</a>
                  <a href="/products" className="hover:text-sky-600">プロダクト</a>
                  <a href="/company" className="hover:text-sky-600">会社概要</a>
                  <a href="/legal" className="hover:text-sky-600">リーガル</a>
                  <a href="/purchase" className="hover:text-sky-600">購入</a>
                  <a href="/faq" className="hover:text-sky-600">Q&A</a>
                  <a href="/contact" className="hover:text-sky-600">お問い合わせ</a>
                </nav>
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-6xl flex-1 px-4">
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