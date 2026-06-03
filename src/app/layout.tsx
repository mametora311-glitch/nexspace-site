import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { footerSections, headerLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
  description: siteConfig.mission,
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
              <Link href="/" className="flex items-center gap-2" aria-label="NEXSPACE トップ">
                <div className="relative h-12 w-52 md:h-16 md:w-72">
                  <Image src="/img/nexspace-logo.png" alt={siteConfig.brandName} fill className="object-contain" priority />
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
                  {headerLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="font-medium transition-colors hover:text-sky-600">
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
                {headerLinks.map((item) => (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
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

          <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-600">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                <div className="font-bold text-slate-900">{siteConfig.brandName}</div>
                <p className="text-xs leading-relaxed text-slate-500">{siteConfig.tagline}</p>
                <p className="text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
              </div>
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">{section.title}</h2>
                  <ul className="mt-3 space-y-2">
                    {section.links.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-xs transition-colors hover:text-sky-600">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </footer>
          <ChatWidget />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
