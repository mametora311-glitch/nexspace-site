export default function LegacyProductsPage() {
  const legacyProducts = [
    {
      title: "AIEC Office",
      subtitle: "Office Automation Engine",
      overview:
        "Excel・PowerPoint・Wordの定型業務をAIが直接駆動する自動化プロダクト。マクロ依存を減らし、業務実行そのものをAIで完結させる設計を目指しました。",
      href: "/products/aiec",
    },
    {
      title: "Primus",
      subtitle: "Autonomous AI Assistant",
      overview:
        "ユーザーごとの思考パターンに適応し、ローカル処理を重視した自律型アシスタント。プライバシーを保ちながら並走支援する個人最適化モデルです。",
      href: "/products/primus",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Past Products
        </h1>
        <p className="mt-2 max-w-3xl text-slate-700">
          こちらは過去に公開していたプロダクトのアーカイブです。現在の販売ページからは外れていますが、
          コンセプトと概要を継続して参照できるようにしています。
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {legacyProducts.map((product) => (
          <article
            key={product.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              Legacy
            </div>
            <h2 className="mb-1 text-2xl font-bold text-slate-900">{product.title}</h2>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
              {product.subtitle}
            </p>
            <p className="text-sm leading-relaxed text-slate-700">{product.overview}</p>
            <a
              href={product.href}
              className="mt-6 inline-block text-sm font-bold text-sky-600 hover:text-sky-500"
            >
              アーカイブ詳細を見る →
            </a>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-lg font-bold text-slate-900">現在の公開中プロダクト</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          現在は AxisOS を中心に展開しています。最新情報はプロダクト一覧ページをご確認ください。
        </p>
        <a
          href="/products"
          className="mt-5 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
        >
          プロダクト一覧に戻る
        </a>
      </section>
    </div>
  );
}
