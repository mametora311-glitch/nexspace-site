import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "carelingual");

const problems = [
  "記録が散らばる",
  "申し送りの抜け漏れが起きる",
  "情報確認に時間がかかる",
  "紙・口頭・チャットが混在する",
];

const features = [
  "タイムライン記録",
  "利用者 / 患者情報の整理",
  "PDF出力",
  "役割別権限",
  "通知",
  "相談支援",
];

export default function CareLingualPage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">CareLingual</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">現場記録と申し送りを、もっと扱いやすく。</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          CareLingualは、医療・介護・福祉施設向けに、記録・申し送り・相談・通知・情報整理を支援するプロダクトです。
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Problem</h2>
          <ul className="mt-5 space-y-3">
            {problems.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Features</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-amber-200 bg-amber-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Caution</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          医療判断の代行ではなく、記録・確認・情報整理の補助を目的とするシステムです。
        </p>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">CTA</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          施設ごとの運用や権限設計に合わせて導入相談を受け付けます。
        </p>
        <Link href={product.ctaHref} className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">
          施設導入相談
        </Link>
      </section>
    </div>
  );
}
