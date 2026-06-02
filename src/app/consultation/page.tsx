import Link from "next/link";
import { products } from "@/config/products";

const consultationCards = [
  { title: "NeutronGate 先行相談", href: "/consultation?product=neutrongate" },
  { title: "NGND 法人導入相談", href: "/consultation?product=ngnd" },
  { title: "CareLingual 施設導入相談", href: "/consultation?product=carelingual" },
  { title: "NDSM 技術相談", href: "/consultation?product=ndsm" },
  { title: "Custom 開発相談", href: "/contact" },
];

const flow = ["フォーム送信", "内容確認", "対応可否・導入方法・見積方針を案内"];

export default function ConsultationPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:mb-16 md:pl-6">
        <p className="text-sm font-bold text-sky-700">Consultation</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">導入相談・資料請求</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          NEXSPACEプロダクトの導入、検証、カスタム相談はこちら。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {consultationCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400"
          >
            <h2 className="text-xl font-bold text-slate-950">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              導入条件や提供時期を確認し、必要に応じて資料請求や個別相談へ進みます。
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">Flow</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-3">
          {flow.map((item, index) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold text-sky-700">Step {index + 1}</p>
              <p className="mt-2 font-bold text-slate-950">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Notice</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          <li>製品により提供時期・条件が異なります。</li>
          <li>未確定価格は表示しません。</li>
          <li>AIEC / Axis / Primus はサービス終了済みのため、購入・予約は受け付けていません。</li>
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-sky-700">
            フォームへ進む
          </Link>
          <Link href="/products" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            Productsを見る
          </Link>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          対象プロダクト: {products.map((product) => product.name).join(" / ")}
        </p>
      </section>
    </div>
  );
}
