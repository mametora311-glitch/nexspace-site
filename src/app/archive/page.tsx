import Link from "next/link";
import { archiveProducts } from "@/config/archiveProducts";

export default function ArchivePage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:mb-16 md:pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Archive</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          以下は提供・販売・予約受付を終了したプロダクトです。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {archiveProducts.map((product) => (
          <Link
            key={product.slug}
            href={product.href}
            className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400"
          >
            <p className="text-xs font-bold text-slate-500">{product.endedStatusLabel}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{product.name}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.endedDescription}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-950">Notice</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          現在、新規購入・予約・導入受付は行っていません。現行プロダクトはProductsをご確認ください。
        </p>
        <Link href="/products" className="mt-5 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800">
          Productsを見る
        </Link>
      </section>
    </div>
  );
}
