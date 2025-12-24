// src/app/legal/page.tsx 修正版
export default function LegalPage() {
  const legalItems = [
    { label: "販売業者", value: "NEXSPACE" },
    { label: "運営責任者", value: "松永 成幸" },
    { label: "所在地", value: "〒891-1104 鹿児島県鹿児島市油須木町167-3" },
    { label: "電話番号", value: "050-1408-7681\n※受付時間：平日 10:00〜18:00" },
    { label: "メールアドレス", value: "contact@nexspace.jp" },
    { label: "販売価格", value: "各製品ページまたは購入手続き画面にて表示される価格に準じます。" },
    { label: "商品代金以外の必要料金", value: "消費税、および製品ダウンロード等に伴う通信料。" },
    { label: "お支払い方法", value: "クレジットカード決済、銀行振込、提携プラットフォーム決済。" },
    { label: "商品の引き渡し時期", value: "決済完了後、即時またはメールにてライセンスキーを送付。" },
    { label: "返品・キャンセル", value: "製品の性質上、決済後のキャンセルは承れません。動作不良はサポート窓口にて対応します。" },
  ];

  return (
    <div className="w-full py-12 md:py-20 max-w-4xl mx-auto">
      <section className="mb-12 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold text-slate-900">特定商取引法に基づく表記</h1>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-12">
        <dl className="divide-y divide-slate-100">
          {legalItems.map((item, i) => (
            <div key={i} className="flex flex-col p-6 sm:flex-row sm:gap-10 hover:bg-slate-50 transition-colors">
              <dt className="w-full text-sm font-bold text-slate-900 sm:w-48 shrink-0">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-700 sm:mt-0 whitespace-pre-wrap">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      
      {/* カードのデザインを統一 */}
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "利用規約", href: "/legal/terms", desc: "サービスの利用に関する詳細なルールと権利義務を定めています。" },
          { title: "プライバシーポリシー", href: "/legal/privacy", desc: "個人情報の管理体制とデータセキュリティの方針を記述しています。" }
        ].map((card) => (
          <a key={card.title} href={card.href} className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-sky-500 hover:shadow-md transition-all group">
            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-sky-600">{card.title} →</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}