// src/app/purchase/page.tsx
export default function PurchasePage() {
  const products = [
    {
      name: "AxisOS Project",
      status: "Crowdfunding",
      price: "¥3,000 〜",
      desc: "次世代AIOS「AxisOS」の開発支援。CAMPFIREにて限定リターンを提供中。",
      cta: "CAMPFIREで支援する",
      link: "https://camp-fire.jp/projects/906665/view", // クラファンURLに差し替え
      highlight: true
    },
    {
      name: "AIEC Office License",
      status: "Available",
      price: "調整中",
      desc: "Excel / PPT / WordをAIで完全自動化。永久ライセンスを提供します。",
      cta: "お問い合わせはこちら",
      link: "/contact",
      highlight: false
    },
    {
      name: "Primus Early Access",
      status: "Pre-order",
      price: "開発中",
      desc: "完全自律型AI「Primus」の先行体験権。リリース時に優先提供いたします。",
      cta: "お問い合わせはこちら",
      link: "/contact",
      highlight: false
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* ヒーローセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl tracking-tight">Purchase / Support</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl">
          NEXSPACEのプロダクトのご購入、およびプロジェクトへの支援はこちらから。
          明日のクラウドファンディング開始に向けた限定プランも公開中です。
        </p>
      </section>

      {/* プロダクトカード群 */}
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((p, i) => (
          <div key={i} className={`flex flex-col rounded-3xl border p-8 transition-all ${
            p.highlight 
              ? "border-sky-500 bg-sky-50 shadow-lg scale-105 z-10" 
              : "border-slate-200 bg-white hover:border-sky-500 hover:shadow-md"
          }`}>
            <div className="mb-4 flex items-center justify-between">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                p.highlight ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {p.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
            <div className="text-3xl font-black text-sky-600 mb-4">{p.price}</div>
            <p className="text-sm text-slate-600 mb-8 flex-1 leading-relaxed">{p.desc}</p>
            <a 
              href={p.link}
              className={`w-full py-4 rounded-full text-center text-sm font-black transition-all ${
                p.highlight
                  ? "bg-sky-500 text-white hover:bg-sky-600"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>

      {/* 注意事項セクション */}
      <section className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">ご購入に関する注意事項</h2>
        <ul className="text-sm text-slate-600 space-y-3 list-disc pl-5">
          <li>決済完了後、ライセンスキーは登録されたメールアドレス宛に送付されます。</li>
          <li>法人名義での請求書払いをご希望の場合は、お問い合わせフォームよりご連絡ください。</li>
          <li>製品の動作要件は、各プロダクトページおよび<a href="/legal" className="text-sky-600 hover:underline">リーガルページ</a>をご確認ください。</li>
          <li>
            CAMPFIREでの支援については、同プラットフォームの規約が適用されます。
          </li>
        </ul>
      </section>
    </div>
  );
}