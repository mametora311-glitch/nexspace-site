import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "denki-scope");

const features = [
  "CPU型番、GPU、RAM、ストレージを自動検出",
  "GPU電力はnvidia-smiで実測し、複数GPUは合算",
  "CPU/その他は構成から推定し、実測/推定ラベルを表示",
  "日次・月次の電気代をSQLiteへ永続化",
  "閉じてもタスクトレイに常駐して計測を継続",
  "消費電力のライブ推移と直近14日の履歴グラフ",
];

const metrics = [
  "総消費電力",
  "CPU使用率 / CPU電力",
  "GPU電力",
  "その他電力",
  "1時間あたりの電気代",
  "今日 / 今月 / 30日換算予測",
];

const languages = [
  "English",
  "日本語",
  "简体中文",
  "한국어",
  "Deutsch",
  "Français",
  "Español",
  "Português",
];

export default function DenkiScopePage() {
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
        <p className="mt-3 text-lg font-semibold text-slate-600">PCの電力と電気代を、リアルタイムに見える化。</p>
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
            Microsoft Storeで購入
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
          <h2 className="text-2xl font-bold text-slate-950">Metrics</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {metrics.map((item) => (
              <div key={item} className="rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">Global Ready</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          初回に国を選択すると、通貨記号、既定言語、参考単価を設定できます。kWh単価は自由入力でき、トップバーと設定から言語を変更できます。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {languages.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Note</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          表示値には推定が含まれます。ソフト単体ではPC全体の実測総消費Wは取得できないため、実際の電力会社の請求額とは一致しない場合があります。
        </p>
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
