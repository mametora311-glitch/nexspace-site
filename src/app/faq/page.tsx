import Link from "next/link";

const faqs = [
  {
    category: "NeutronGate",
    q: "NeutronGateは何をする製品ですか？",
    a: "ローカル環境で知識パックを扱うAI基盤です。詳細はNeutronGateページをご確認ください。",
  },
  {
    category: "NeutronGate",
    q: "NeutronGateはクラウドAIと何が違いますか？",
    a: "クラウドにすべてを送る前提ではなく、PC内の知識パックやローカル運用を重視する点が違います。",
  },
  {
    category: "NGND",
    q: "NGNDは何をするシステムですか？",
    a: "ローカルサーバーの状態監視、ノード管理、ログ確認、防御イベントの可視化を支援するシステムです。",
  },
  {
    category: "CareLingual",
    q: "CareLingualは医療判断を代行しますか？",
    a: "代行しません。記録、申し送り、情報整理、確認支援を目的とする補助システムです。",
  },
  {
    category: "NDSM",
    q: "NDSMは何ですか？",
    a: "複数サーバーの接続先、状態、ログをまとめて扱うための管理システムです。",
  },
  {
    category: "Archive",
    q: "AIEC / Axis / Primusは購入できますか？",
    a: "いいえ。AIEC、Axis、Primusはサービス終了済みです。現在、新規購入・予約受付は行っていません。",
  },
];

export default function FaqPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:mb-16 md:pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Q&A</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          NEXSPACEの現行プロダクト、導入相談、ローカル動作・データ取扱い、サポート範囲に関するよくあるご質問です。
        </p>
      </section>

      <section className="mx-auto max-w-4xl space-y-5">
        {faqs.map((faq) => (
          <article key={faq.q} className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-sky-700">{faq.category}</p>
            <h2 className="text-lg font-bold text-slate-950">
              <span className="mr-2 font-mono text-sky-600">Q.</span>
              {faq.q}
            </h2>
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-700">
              <span className="mr-2 font-mono font-bold text-slate-400">A.</span>
              {faq.a}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-lg bg-slate-950 p-6 text-white md:p-8">
        <h2 className="text-2xl font-bold">個別相談が必要な場合</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          導入条件、提供時期、カスタム開発の相談はお問い合わせフォームからご連絡ください。
        </p>
        <Link href="/consultation" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100">
          導入相談へ
        </Link>
      </section>
    </div>
  );
}
