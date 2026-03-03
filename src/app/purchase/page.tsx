// src/app/purchase/page.tsx
export default function PurchasePage() {
  const products = [
    {
      name: "AxisOS Project",
      status: "開発中",
      desc: "次世代AIOS「AxisOS」は現在開発中です。提供時期・導入プランは公開準備が整い次第ご案内します。",
      cta: "Coming Soon",
      highlight: true
    },
    {
      name: "NGND",
      status: "開発中",
      desc: "NGND（Next Generation Node Deployment）は現在開発中です。機能詳細と提供形態は順次公開します。",
      cta: "Coming Soon",
      highlight: false
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* ヒーローセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl tracking-tight">Purchase</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl">
          現在、購入可能なプランは準備中です。
          本ページではプロダクトの公開状況をお知らせします。
        </p>
      </section>

      {/* プロダクトカード群 */}
      <div className="grid max-w-4xl gap-8 md:grid-cols-2">
        {products.map((p, i) => (
          <div key={i} className={`flex flex-col rounded-3xl border p-8 transition-all ${
            p.highlight 
              ? "border-sky-500 bg-sky-50 shadow-lg"
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
            <a
              href="/contact"
              className="mb-4 text-sm font-bold text-sky-600 hover:underline"
            >
              導入のご相談はお問い合わせからどうぞ
            </a>
            <p className="text-sm text-slate-600 mb-8 flex-1 leading-relaxed">{p.desc}</p>
            <button
              type="button"
              disabled
              className={`w-full py-4 rounded-full text-center text-sm font-black transition-all ${
                p.highlight
                  ? "bg-slate-400 text-white cursor-not-allowed"
                  : "bg-slate-300 text-white cursor-not-allowed"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">NGND（Next Generation Node Deployment）</h2>
        <p className="mt-2 text-sm font-semibold text-sky-700">NGNDが実現する「次世代」の機能</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          公開論文「Integrated Immune System Architecture」の防御システムを応用し、
          展開と保全を同時に成立させるアーキテクチャを採用しています。
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <li>
            完全自動・ステルスデプロイ: WindowsからSSH経由でDebian等へログインし、ディスクを汚染せずに
            メモリ上へWorkerを直接流し込んで実行する。
          </li>
          <li>
            物理法則による防御（IISA）: 不正アクセスを検知した瞬間、VDF Tarpitで攻撃者のCPUを
            10<sup>59</sup> 秒の「時間の沼」に沈める。
          </li>
          <li>
            自律型証拠隠滅: 脅威が閾値を超えると、自律判断で自分自身のメモリフットプリントと実行ファイルを
            0.1ms で抹消（自爆）し、絶対的な沈黙を返す。
          </li>
        </ul>
      </section>

      {/* 注意事項セクション */}
      <section className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">公開状況に関するご案内</h2>
        <ul className="text-sm text-slate-600 space-y-3 list-disc pl-5">
          <li>AxisOS / NGND は現在開発中のため、購入・申込受付は未開始です。</li>
          <li>提供開始時期・プラン詳細は、本サイトで順次公開します。</li>
          <li>先行導入のご相談は、お問い合わせフォームよりご連絡ください。</li>
          <li>公開後の利用条件は、各プロダクトページおよび<a href="/legal" className="text-sky-600 hover:underline">リーガルページ</a>で案内予定です。</li>
        </ul>
      </section>
    </div>
  );
}
