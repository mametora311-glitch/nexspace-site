// src/app/products/aiec/page.tsx
export default function AiecPage() {
  const features = [
    {
      title: "Direct Automation",
      desc: "マクロやVBAを介さず、AIがOfficeアプリケーションを直接制御。複雑な操作も自然言語での指示から実行可能です。",
    },
    {
      title: "Multi-App Sync",
      desc: "Excelで解析したデータをPowerPointのスライドへ自動反映。アプリを跨いだシームレスなワークフローを構築します。",
    },
    {
      title: "Smart Reporting",
      desc: "日次・週次の定型レポート作成を完全自動化。データの収集から文書構成、レイアウト調整までAIが完結させます。",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <div className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600 mb-4">
          Productivity Engine
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">AIEC Office</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          「AIに任せる」から「AIが完結させる」へ。
          AIEC Officeは、Microsoft Officeスイートをエンジンのように駆動させ、
          ホワイトカラーの業務を根本から自動化する次世代のソリューションです。
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

      {/* 詳細説明・コンセプト */}
      <section className="grid gap-12 md:grid-cols-2 items-center rounded-3xl bg-slate-900 p-8 text-white md:p-12">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Why AIEC Office?</h2>
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <p>
              従来のRPAやマクロでは、操作手順の変更に弱く、メンテナンスに多大なコストがかかっていました。
            </p>
            <p>
              AIEC Officeは、AIが画面の構造やデータの意味を直接理解し、最適な操作をリアルタイムに判断します。これにより、マニュアル作成や複雑な設定なしに、高度な自動化を実現します。
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <ul className="space-y-4">
            {[
              "Excelデータ解析と可視化の自動化",
              "PowerPoint資料構成の自動生成",
              "Word文書の校正とフォーマット最適化",
              "既存ワークフローとの高い親和性"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-sm text-sky-400">
                <span className="mr-2">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 導線 */}
      <div className="mt-16 flex justify-center gap-4">
        <a href="/contact" className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors">
          導入の相談をする
        </a>
        <a href="/products" className="rounded-full border border-slate-300 px-8 py-3 text-sm font-bold text-slate-900 hover:border-slate-900 transition-colors">
          製品一覧に戻る
        </a>
      </div>
    </div>
  );
}