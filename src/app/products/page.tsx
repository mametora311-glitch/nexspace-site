// src/app/products/page.tsx
export default function ProductsPage() {
  const products = [
    {
      title: "AIEC Office",
      subtitle: "Office Automation Engine",
      desc: "Excel、PowerPoint、WordなどのOfficeスイートをAIが直接駆動。定型業務を「AIに任せる」から「AIが完結させる」フェーズへと引き上げます。",
      href: "/products/aiec",
      tag: "Productivity",
    },
    {
      title: "Primus",
      subtitle: "Autonomous AI Assistant",
      desc: "ユーザーの思考プロセスを学習し、デバイス内で完結する完全自律型のAI。プライバシーを確保しながら、個々に最適化された並走を実現します。",
      href: "/products/primus",
      tag: "Autonomous AI",
    },
    {
      title: "AxisOS",
      subtitle: "Next-Gen AI Operating System",
      desc: "複数のAIモデル、クラウドサービス、ローカルリソースを統合管理。AI時代のインフラストラクチャとして、複雑なタスクの自動制御を可能にします。",
      href: "/products/axis",
      tag: "Infrastructure",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ヘッダーセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Products</h1>
        <p className="mt-2 max-w-2xl text-slate-700">
          NEXSPACEが提供する、AIをエンジンとして実装した次世代のプロダクト群です。
          単なるツールを超えた、ビジネスと生活の「動力」となるシステムを展開しています。
        </p>
      </section>

      {/* プロダクトグリッド */}
      <section className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.href}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl"
          >
            <div>
              <div className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">
                {product.tag}
              </div>
              <h2 className="mb-1 text-2xl font-bold text-slate-900 group-hover:text-sky-600">
                {product.title}
              </h2>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
                {product.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                {product.desc}
              </p>
            </div>
            
            <div className="mt-8 flex items-center text-sm font-bold text-sky-600">
              LEARN MORE
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </section>

      {/* 将来の展望セクション */}
      <section className="mt-20 rounded-3xl bg-slate-50 p-8 text-center md:p-16">
        <h2 className="text-xl font-bold text-slate-900">And more to come.</h2>
        <p className="mt-4 text-slate-600">
          私たちは現在も、新たな「AIエンジン」を開発中です。
          現場の課題を解決するための革新的なプロダクトを、順次リリースしていきます。
        </p>
      </section>
    </div>
  );
}