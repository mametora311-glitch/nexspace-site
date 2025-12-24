// src/app/purchase/primus/page.tsx
export default function PurchasePrimusPage() {
  return (
    <div className="w-full py-12 md:py-20 max-w-4xl mx-auto px-4">
      <nav className="mb-8 text-sm">
        <a href="/purchase" className="text-sky-600 hover:underline">← 購入一覧に戻る</a>
      </nav>

      <section className="rounded-3xl border border-sky-100 bg-sky-50/50 p-8 md:p-12 shadow-sm">
        <div className="mb-6 inline-block rounded bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-widest">
          Pre-order
        </div>
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl mb-6">Primus Early Access</h1>
        
        <div className="text-4xl font-black text-sky-600 mb-8">¥9,800 <span className="text-sm font-normal text-slate-500">/ 先行予約価格</span></div>

        <div className="space-y-6 text-slate-700 mb-12">
          <p className="text-lg font-bold">
            完全自律型AI「Primus」の未来を、誰よりも早く。
          </p>
          <p>
            本ライセンスは、2026年提供予定の「Primus」ベータ版および正式版への優先アクセス権を含む先行予約プランです。
          </p>
          <div className="p-4 bg-white rounded-xl border border-sky-100 text-sm italic">
            ※開発状況に応じ、提供時期が前後する可能性がございます。詳細はQ&Aをご確認ください。
          </div>
        </div>

        <a 
          href="/contact" 
          className="inline-block w-full md:w-auto px-12 py-4 bg-sky-500 text-white rounded-full font-black hover:bg-sky-600 transition-all shadow-lg text-center"
        >
          先行予約について問い合わせる
        </a>
      </section>
    </div>
  );
}