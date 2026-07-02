import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "jibunsite");

const features = [
  "自然文AI補助で初期ページ構成を作成",
  "見本パーツから約40種のブロックを追加",
  "PC / タブレット / スマホのライブプレビュー",
  "画像配置、文章、色、余白をローカルで編集",
  "HTML一式またはZIPとして書き出し",
  "プロジェクトJSONとして保存・再編集",
];

const targets = [
  "個人事業主",
  "小規模事業者",
  "クリエイター",
  "店舗・教室",
  "士業・サロン",
  "イベント告知・ポートフォリオ",
];

const safety = [
  "クラウド保存・ログイン・公開ホスティングは行わないローカルアプリ",
  "AIには自由HTMLではなく安全なブロック定義JSONを組み立てさせる設計",
  "APIキーやローカル絶対パスはHTML/ZIP書き出しに含めない",
];

export default function JibunSitePage() {
  if (!product) return null;
  const storeHref = product.storeUrl ?? product.ctaHref;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white">NEW</span>
          <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">AIでたたき台を作り、自分でHP/LPを仕上げる。</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-bold text-slate-500">{product.priceLabel}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={storeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-sky-700"
          >
            Microsoft Storeで入手
          </a>
          <Link href="/products" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            製品一覧
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Features</h2>
          <div className="mt-5 grid gap-3">
            {features.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {targets.map((item) => (
              <div key={item} className="rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">Export</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          作成したページは、ブラウザで開ける静的HTML一式として出力できます。ZIP書き出しにも対応し、問い合わせ導線はメール、電話、外部フォーム、予約サービス、SNSなどのリンクとして設置できます。
        </p>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Safety</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          {safety.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          href={storeHref}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
        >
          Microsoft Storeを開く
        </a>
      </section>
    </div>
  );
}
