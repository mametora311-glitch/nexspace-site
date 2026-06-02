import Link from "next/link";
import { archiveProducts } from "@/config/archiveProducts";

const product = archiveProducts.find((item) => item.slug === "axis");

export default function ArchiveDetailPage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:pl-6">
        <p className="text-sm font-bold text-slate-500">{product.endedStatusLabel}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Axis / AxisOS</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
        <p className="text-base leading-relaxed text-slate-700">
          Axis / AxisOSは、複数AIモデル統合やAI OS構想を扱った過去プロダクトです。
          現在は提供・販売・クラウドファンディング案内を終了しています。
          現行のNEXSPACEプロダクトについてはProductsをご確認ください。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/archive" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            Archiveに戻る
          </Link>
          <Link href="/products" className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800">
            Productsを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
