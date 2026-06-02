import Link from "next/link";
import { archiveProducts } from "@/config/archiveProducts";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { technologies } from "@/config/technology";

const homeProducts = products
  .filter((product) => product.showOnHome)
  .sort((a, b) => a.priority - b.priority);

const featuredProduct = homeProducts[0];
const businessProducts = homeProducts.filter((product) => product.slug !== featuredProduct.slug);

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wider text-sky-600">{siteConfig.brandName}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            クラウドAIを借りるだけでなく、ローカル環境・業務現場・施設運用へ組み込むプロダクトを開発しています。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800"
            >
              プロダクトを見る
            </Link>
            <Link
              href="/consultation"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
            >
              導入相談
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Featured Product</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">{featuredProduct.name}</h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">{featuredProduct.subtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              {featuredProduct.shortDescription}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              {["知識パック", "GPU不要思想", "外部送信を抑える設計思想"].map((item) => (
                <div key={item} className="rounded-lg border border-sky-100 bg-white px-4 py-3 font-semibold">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href={featuredProduct.href}
              className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700"
            >
              詳細を見る
            </Link>
          </article>

          <section>
            <div className="border-l-4 border-sky-500 pl-4">
              <h2 className="text-2xl font-bold text-slate-950">Business Products</h2>
              <p className="mt-1 text-sm text-slate-600">業務運用・施設支援向けプロダクト</p>
            </div>
            <div className="mt-6 space-y-4">
              {businessProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={product.href}
                  className="block rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-sky-400"
                >
                  <h3 className="font-bold text-slate-950">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="border-l-4 border-sky-500 pl-4">
          <h2 className="text-2xl font-bold text-slate-950">Technology</h2>
          <p className="mt-1 text-sm text-slate-600">製品を支える技術・研究枠</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {technologies.map((technology) => (
            <Link
              key={technology.slug}
              href={technology.href}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400"
            >
              <p className="text-xs font-bold text-sky-700">{technology.status}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{technology.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{technology.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-y border-slate-200 bg-white py-12 md:grid-cols-[0.85fr_1.15fr] md:py-16">
        <div className="border-l-4 border-sky-500 pl-4">
          <h2 className="text-2xl font-bold text-slate-950">Philosophy</h2>
          <p className="mt-1 text-sm text-slate-600">AI as Engine</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "AI as Engine", body: "AIを単なる生成モデルではなく、現場で動くシステムのエンジンとして実装する。" },
            { title: "ローカル所有", body: "必要な知識や運用を手元の環境で扱い、クラウド依存を抑える。" },
            { title: "現場実装", body: "業務・生活・施設運用の中で使える形へ落とし込む。" },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">Archive</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            過去の終了済みプロダクトは、現行プロダクトと分けてアーカイブに掲載しています。
          </p>
          <Link
            href="/archive"
            className="mt-5 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
          >
            終了済みプロダクトを見る
          </Link>
          <p className="mt-4 text-xs text-slate-500">掲載数: {archiveProducts.length}</p>
        </div>
      </section>
    </div>
  );
}
