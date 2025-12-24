// src/app/products/primus/page.tsx
export default function PrimusPage() {
  const features = [
    {
      title: "Local Processing",
      desc: "データ処理を可能な限りデバイス内で完結。プライバシーを保護しつつ、高速なレスポンスを実現します。",
    },
    {
      title: "Adaptive Learning",
      desc: "ユーザーの思考パターンや好みを学習。使えば使うほど、あなたに最適化されたパートナーへと成長します。",
    },
    {
      title: "Proactive Support",
      desc: "指示を待つだけでなく、状況に応じて最適なアクションを提案。あなたの先回りをして業務をサポートします。",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <div className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600 mb-4">
          Autonomous AI Assistant
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">Primus</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          あなたを理解し、共に歩む知能。
          Primusは、クラウドに依存しすぎない「個の自律性」を追求したAIアシスタントです。
          あなたのデバイスの中で、あなただけの専属パートナーとして機能します。
        </p>
      </section>

      {/* 主要機能グリッド */}
      <section className="mb-20">
        <h2 className="mb-8 text-xl font-bold text-slate-900">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-bold text-slate-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Privacy meets Intelligence</h2>
          <p className="mb-8 text-slate-300 text-sm leading-relaxed">
            現代のAIの多くは、利便性と引き換えに膨大なデータをクラウドへ送信しています。
            Primusはこの常識に挑戦し、高度な推論をローカル環境で実現。
            あなたの「思考の種」を外部に漏らすことなく、最大限に育てるための環境を提供します。
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-mono text-sky-400">
              Personalized Model
            </span>
            <span className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-mono text-sky-400">
              Edge Computing
            </span>
            <span className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-mono text-sky-400">
              Always on your side
            </span>
          </div>
        </div>
      </section>

      {/* 導線 */}
      <div className="mt-16 flex justify-center gap-4">
        <a href="/contact" className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors">
          詳しく話を聞く
        </a>
        <a href="/products" className="rounded-full border border-slate-300 px-8 py-3 text-sm font-bold text-slate-900 hover:border-slate-900 transition-colors">
          製品一覧に戻る
        </a>
      </div>
    </div>
  );
}