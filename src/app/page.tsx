// src/app/page.tsx
"use client"; // フックを使うために追加

import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext"; // 追加

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero #1 */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center bg-white text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl leading-tight">
            AIを“エンジン”にして、
            <br />
            現場で動くプロダクトをつくる。
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-800 md:text-lg leading-relaxed">
            NEXSPACEは、AIを単体の「生成モデル」としてではなく、
            システムを動かすコアエンジンとして再定義します。
            現実の業務と生活を、より静かに、より確実に自動化する未来を実装します。
          </p>
        </div>

        <div className="mt-16 animate-bounce text-slate-400">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="text-2xl">↓</div>
        </div>
      </section>

      {/* 中間セクション群 */}
      <section className="mx-auto flex max-w-6xl flex-col gap-20 bg-slate-50 pb-24 pt-16 px-4">
        {/* プロダクトカード */}
        <RevealOnScroll>
          <div className="space-y-8">
            <div className="border-l-4 border-sky-500 pl-4">
              <h2 className="text-2xl font-bold text-slate-900">Products</h2>
              <p className="text-slate-700">次世代の自律型システム・ソリューション</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "AIEC Office",
                  desc: "Excel・PowerPoint・Word等のOffice業務をAIが直接駆動する、次世代の自動化ツール。",
                  href: "/products/aiec"
                },
                {
                  title: "Primus",
                  desc: "ユーザーと共に成長し、デバイス内で完結する完全自律型のAIアシスタント。",
                  href: "/products/primus"
                },
                {
                  title: "AxisOS",
                  desc: "複数のAIモデルとクラウドサービスを統合管理する、AI時代のオペレーティングシステム。",
                  href: "/products/axis"
                }
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-sky-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-xs font-semibold text-sky-600">VIEW DETAILS →</div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 理念セクション */}
      <section className="py-20">
        <RevealOnScroll>
          <div className="flex flex-col gap-12">
            {/* タイトルブロック：Products（image_ae5d65.png）と完全に一致させる */}
            <div className="border-l-4 border-sky-500 pl-4">
              <h2 className="text-3xl font-bold text-slate-900">Philosophy</h2>
              <p className="mt-1 text-sm font-medium text-sky-500">理念</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* 理念テキストカード */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-sky-500 hover:shadow-md md:p-12">
                <p className="text-lg leading-relaxed text-slate-700">
                  私たちは、AIを魔法の杖ではなく<span className="font-bold text-slate-900">「動力」</span>として捉えています。
                  インターフェースの裏側で複雑なロジックを制御し、ユーザーが意識することなく恩恵を受けられるシステムの構築を目指しています。
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  {/* 「会社概要」を「お問い合わせ」と同じ控えめなスタイルに変更 */}
                  <a href="/company" className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-600 transition-all hover:border-sky-500 hover:text-sky-600">
                    会社概要
                  </a>
                  <a href="/contact" className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-600 transition-all hover:border-sky-500 hover:text-sky-600">
                    お問い合わせ
                  </a>
                </div>
              </div>

              {/* ステートメント・クォートカード */}
              <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 p-8 shadow-lg md:p-12">
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-sky-200 mb-4">
                  Core Mission
                </p>
                {/* 文字サイズを少し小さめ（text-xl〜2xl）に調整して品良く */}
                <h3 className="text-xl font-black italic leading-tight text-white md:text-2xl">
                  "単なるモデルではなく、エンジンとしての AI。"
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-sky-50/80">
                  モデルを動かすことが目的ではなく、ビジネスを、生活を、そして未来を動かすためのエンジンとしてAIを実装する。それがNEXSPACEの存在意義です。
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Axisビジョン（現状維持しつつ文字調整） */}
      <section className="bg-slate-950 py-24 text-white">
        <RevealOnScroll>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
            <div className="flex-1">
              <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl md:h-96 md:w-96">
                <Image
                  src="/img/axis-hero.png"
                  alt="AxisOS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
                Next-Gen AI OS
              </p>
              <h2 className="text-3xl font-bold md:text-5xl leading-tight">
                単一AIの時代から、
                <br />
                AI OS が統括する時代へ。
              </h2>
              <p className="text-slate-300 leading-relaxed">
                AxisOSは、あらゆるAIモデルをリソースとして管理し、
                自律的なタスク遂行を可能にする統合プラットフォームです。
                人間の指示を待つAIから、共に並走するシステムへ。
              </p>
              <a
                href="/products/axis"
                className="inline-block rounded-full bg-sky-500 px-8 py-3 text-sm font-bold text-white transition-hover hover:bg-sky-400"
              >
                AxisOS PROJECT DETAILS
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}