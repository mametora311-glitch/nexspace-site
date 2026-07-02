import Link from "next/link";
import { archiveProducts } from "@/config/archiveProducts";
import { lifecycleLabels, products } from "@/config/products";

const currentProducts = products
  .filter((product) => product.showOnProducts)
  .sort((a, b) => a.priority - b.priority);

const storeApps = currentProducts.filter((product) => product.category === "store_app");
const flagship = currentProducts.filter((product) => product.category === "flagship");
const business = currentProducts.filter((product) => product.category === "business" || product.category === "ops");
const medical = currentProducts.filter((product) => product.category === "medical_welfare");

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <Link
      href={product.href}
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400"
    >
      <div className="flex flex-wrap items-center gap-2">
        {product.isNew ? (
          <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white">NEW</span>
        ) : null}
        <p className="text-xs font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
      </div>
      <h3 className="mt-2 text-2xl font-bold text-slate-950">{product.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
      {product.priceLabel ? (
        <p className="mt-4 text-xs font-bold text-slate-500">{product.priceLabel}</p>
      ) : null}
      <span className="mt-6 text-sm font-bold text-sky-700">{product.ctaLabel}</span>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:mb-16 md:pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Products</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          NEXSPACEが開発・提供しているプロダクト。Microsoft Store配信中のWindowsアプリと、提供準備中のAI/業務支援プロダクトを掲載しています。
        </p>
      </section>

      <section className="space-y-12">
        <div>
          <h2 className="text-xl font-bold text-slate-950">NEW / Microsoft Store Apps</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {storeApps.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-950">Flagship</h2>
          <div className="mt-5 grid gap-5">
            {flagship.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-950">Business / Operations</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {business.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-950">Medical / Welfare</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {medical.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-950">Archive Notice</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {archiveProducts.map((product) => product.name).join(" / ")} はサービス終了済みです。
          現行Productsカードには混ぜず、Archiveに分けて掲載しています。
        </p>
        <Link
          href="/archive"
          className="mt-5 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
        >
          Archiveを見る
        </Link>
      </section>
    </div>
  );
}
