import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "ndsm");

const features = [
  "JST時計表示",
  "ログイン",
  "管理者権限",
  "SSH接続先登録",
  "CPU/RAM/Disk/Network確認",
  "ノード一覧",
  "ログ確認",
];

export default function NdsmPage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">NDSM</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">複数サーバーを、ひとつの画面で見る。</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          NDSMは、NEXSPACE Data Server Management の略称で、複数の自社サーバー情報を一元管理するためのローカル運用管理システムです。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">Features</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Status</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          開発・試作中。NEXSPACE内部運用から調整しています。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/products/ndsm" className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800">
            概要を見る
          </Link>
          <Link href="/consultation?product=ndsm" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            相談する
          </Link>
        </div>
      </section>
    </div>
  );
}
