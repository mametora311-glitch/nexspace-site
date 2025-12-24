// src/app/faq/page.tsx
export default function FaqPage() {
  const faqs = [
    {
      category: "AxisOS",
      q: "クラウドファンディングの開始時期はいつですか？",
      a: "AxisOSプロジェクトのクラウドファンディングは、2025年12月24日（水）よりCAMPFIREにて開始いたします。詳細はプロダクトページ、または公式SNSをご確認ください。",
    },
    {
      category: "Primus",
      q: "Primusは完全にオフラインで動作しますか？",
      a: "はい。Primusはプライバシーの保護とレスポンス速度を最優先しており、推論処理の大部分をデバイス内のローカル環境で完結させる設計となっています。",
    },
    {
      category: "AIEC Office",
      q: "どのようなOfficeソフトに対応していますか？",
      a: "Microsoft Excel、PowerPoint、Wordに対応しています。マクロやVBAの知識なしに、自然言語での指示だけでこれらのアプリケーションを横断的に操作可能です。",
    },
    {
      category: "導入・サポート",
      q: "導入に関する相談やカスタマイズの依頼は可能ですか？",
      a: "もちろんです。各企業のワークフローに合わせた最適な導入プランをご提案いたします。画面上部の「お問い合わせ」フォーム、または右下のAIチャットよりお気軽にご相談ください。",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ページタイトル */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">Q&A</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          NEXSPACEのプロダクトや技術、導入に関するよくあるご質問をまとめています。
        </p>
      </section>

      {/* FAQリスト */}
      <div className="mx-auto max-w-4xl space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500 hover:shadow-md">
            <div className="mb-2 inline-block rounded bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-600">
              {faq.category}
            </div>
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              <span className="mr-2 text-sky-500 font-mono">Q.</span>
              {faq.q}
            </h2>
            <div className="mt-4 flex gap-3 border-t border-slate-100 pt-4">
              <span className="text-lg font-bold text-slate-400 font-mono">A.</span>
              <p className="text-slate-700 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 解決しない場合 */}
      <section className="mt-20 rounded-3xl bg-slate-900 p-8 text-center text-white md:p-12">
        <h3 className="mb-4 text-2xl font-bold">解決しない場合は？</h3>
        <p className="mb-8 text-slate-300">
          右下のAIチャットボットがお答えするか、担当者が直接対応させていただきます。
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors">
            お問い合わせフォームへ
          </a>
        </div>
      </section>
    </div>
  );
}