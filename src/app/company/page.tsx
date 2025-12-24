// src/app/company/page.tsx
export default function CompanyPage() {
  const companyInfo = [
    { label: "屋号", value: "NEXSPACE" },
    { label: "代表者", value: "松永 成幸" },
    { label: "所在地", value: "鹿児島県鹿児島市油須木町167-3" },
    { label: "設立", value: "2025年9月6日" },
    { label: "事業内容", value: "SaaS事業 / AIシステム開発・運用" },
  ];

  return (
    <div className="w-full max-w-4xl py-12 md:py-20">
      {/* ページタイトル */}
      <div className="mb-12 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Company Profile</h1>
        <p className="mt-2 text-slate-600">会社概要</p>
      </div>

      {/* 会社情報テーブル */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <dl className="divide-y divide-slate-200">
          {companyInfo.map((item, index) => (
            <div key={index} className="grid grid-cols-1 px-6 py-6 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-slate-900">{item.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-800 sm:col-span-2 sm:mt-0">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* お問い合わせボタン */}
      <div className="mt-8 flex justify-center">
        <a href="/contact" className="rounded-full border border-slate-200 bg-white px-24 py-3 text-sm font-bold text-slate-600 transition-all hover:border-sky-500 hover:text-sky-600">
          お問い合わせはこちらから
        </a>
      </div>

      {/* ミッション/ビジョン（オプション） */}
      <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-white md:p-12">
        <h2 className="mb-6 text-xl font-bold">Our Vision</h2>
        <p className="text-lg leading-relaxed text-slate-300">
          「AIを“エンジン”にして、現場で動くプロダクトをつくる。」
          <br />
          私たちは、技術を形にするだけでなく、それが実社会の動力となるまで伴走し続けます。
        </p>
      </div>
    </div>
  );
}