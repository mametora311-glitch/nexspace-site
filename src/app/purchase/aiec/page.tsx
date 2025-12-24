// src/app/purchase/aiec/page.tsx
export default function PurchaseAiecPage() {
  return (
    <div className="w-full py-12 md:py-20 max-w-4xl mx-auto px-4">
      <nav className="mb-8 text-sm">
        <a href="/purchase" className="text-sky-600 hover:underline">← 購入一覧に戻る</a>
      </nav>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <div className="mb-6 inline-block rounded bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600 uppercase tracking-widest">
          Available
        </div>
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl mb-6">AIEC Office License</h1>
        
        <div className="text-4xl font-black text-sky-600 mb-8">¥19,800 <span className="text-sm font-normal text-slate-500">/ 永久ライセンス</span></div>

        <div className="space-y-8 text-slate-700 leading-relaxed mb-12">
          <p>
            AIEC Officeは、Microsoft Excel、PowerPoint、WordをAIの力で自動化するプロフェッショナル向けツールです。
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "Excelマクロ・VBAの自動生成と実行",
              "自然言語によるスライド構成の自動作成",
              "ドキュメントの高度な要約と校正",
              "商用利用可能な永久ライセンス"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-sky-500 font-bold">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full md:w-auto px-12 py-4 bg-slate-900 text-white rounded-full font-black hover:bg-slate-800 transition-all shadow-lg">
          今すぐ購入する（外部決済へ）
        </button>
      </section>
    </div>
  );
}