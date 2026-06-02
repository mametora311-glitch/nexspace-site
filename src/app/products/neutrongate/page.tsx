import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "neutrongate");

const problems = [
  "クラウドAIに情報を出したくない",
  "API料金・ネットワーク依存が不安",
  "自分専用の知識を持つAIが欲しい",
];

const solutions = [
  "事前成形済み知識パックを読み込む",
  "ローカル環境で知識を扱う",
  "標準知識パック / LearningKit / Custom構成",
];

const lineups = ["NeutronGate", "NeutronGate LearningKit", "NeutronGate Custom"];

const useCases = [
  "個人事業主",
  "開発補助",
  "業務文書整理",
  "ローカルナレッジ管理",
  "施設・企業向け専用知識パック",
];

export default function NeutronGatePage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">AIを借りるな。所有しろ。</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">ローカルAI知識ランタイム</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/consultation?product=neutrongate" className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800">
            先行相談
          </Link>
          <Link href="/products" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            製品一覧
          </Link>
        </div>
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
          <h2 className="text-2xl font-bold text-slate-950">Solution</h2>
          <ul className="mt-5 space-y-3">
            {solutions.map((item) => (
              <li key={item} className="rounded-lg border border-sky-100 bg-sky-50 p-4 text-sm text-slate-700">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">Lineup</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {lineups.map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">{item}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                知識パック運用の目的に合わせた構成として設計しています。
              </p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          NGKPは、NeutronGateで扱う知識パック形式として設計している内部形式です。
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">Use Cases</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Status</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          提供準備中 / 商品化設計中。個別相談を受け付けています。
        </p>
        <Link href="/consultation?product=neutrongate" className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">
          先行相談する
        </Link>
      </section>
    </div>
  );
}
