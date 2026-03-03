export default function NeutronGatePage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <div className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">
          Coming Soon
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          NeutronGate
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          NeutronGate の詳細は現在準備中です。正式な概要・仕様・提供時期は後日公開します。
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <h2 className="text-xl font-bold text-slate-900">Status</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          公開前プロダクトとして、情報更新時に本ページへ順次反映します。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/products"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
          >
            プロダクト一覧に戻る
          </a>
          <a
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-slate-900"
          >
            先行相談をする
          </a>
        </div>
      </section>
    </div>
  );
}
