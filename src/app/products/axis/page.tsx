// src/app/products/axis/page.tsx
export default function AxisPage() {
  const capabilities = [
    {
      title: "Model Orchestration",
      desc: "LLM、画像生成、音声認識など、最適なAIモデルをタスクごとに自動選定・統合制御します。",
    },
    {
      title: "Resource Management",
      desc: "クラウドとローカルのリソースを動的に配分。コスト効率とレスポンス速度を極限まで最適化します。",
    },
    {
      title: "Autonomous Workflow",
      desc: "単なる一問一答ではなく、複雑な目標に対してAI自らがサブタスクを生成し、自律的に完結させます。",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <div className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600 mb-4">
          Next-Gen Infrastructure
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl leading-tight">
          AxisOS
          <br />
          <span className="text-2xl md:text-3xl text-slate-500">AI Multi Operation System</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          個別のAIを使い分ける時代は終わりました。
          AxisOSは、あらゆるAIリソースを統合し、一つの「知的なOS」として機能させるプラットフォームです。
          複雑な社会課題を、AIの集合知によって解き明かします。
        </p>
      </section>

      {/* 主要機能グリッド */}
      <section className="mb-20">
        <h2 className="mb-8 text-xl font-bold text-slate-900">Key Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-hover hover:border-sky-300">
              <h3 className="mb-3 font-bold text-slate-900">{c.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* アーキテクチャ・ビジョンセクション */}
      <section className="rounded-3xl bg-slate-900 p-8 text-white md:p-12 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="mb-8 text-2xl font-bold italic text-sky-400">"The Brain for Automation"</h2>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
              <p>
                AxisOSの真価は、特定の産業に依存しない「汎用的な自律性」にあります。
              </p>
              <p>
                例えば「農業自動化」の現場では、気象データ、土壌センサー、画像診断、そして重機制御という異なるドメインのAIをAxisOSが束ね、最適な判断をリアルタイムで下します。
              </p>
              <p>
                私たちは、これまで人間が担ってきた「判断と統合」のプロセスをシステム化し、あらゆる産業のDXを一段上のステージへ引き上げます。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
              <h3 className="text-lg font-bold mb-4 text-white">Target Domains</h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "大規模農業の自律型管理システム",
                  "物流・サプライチェーンの全体最適化",
                  "スマートシティにおけるエネルギー制御",
                  "高度な意思決定支援（経営・研究開発）"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 導線（クラファン開始に合わせた調整） */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-sm font-bold text-sky-600 mb-2">CAMPFIRE プロジェクト公開準備中</p>
          <p className="text-slate-600 text-sm">2025年12月24日、クラウドファンディング開始。</p>
        </div>
        <div className="flex gap-4">
          <a href="/contact" className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors">
            先行導入のご相談
          </a>
          <a href="/products" className="rounded-full border border-slate-300 px-8 py-3 text-sm font-bold text-slate-900 hover:border-slate-900 transition-colors">
            製品一覧に戻る
          </a>
        </div>
      </div>
    </div>
  );
}