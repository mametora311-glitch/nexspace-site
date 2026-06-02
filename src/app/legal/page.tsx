import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function LegalPage() {
  const legalItems = [
    { label: "販売業者", value: siteConfig.legalName },
    { label: "運営責任者", value: siteConfig.representative },
    { label: "所在地", value: siteConfig.postalAddress },
    { label: "電話番号", value: `${siteConfig.phone}\n※受付時間：平日 10:00〜18:00` },
    { label: "メールアドレス", value: siteConfig.email },
    { label: "販売価格", value: "各プロダクトページ、導入相談、または個別契約時に提示する金額に準じます。" },
    { label: "商品代金以外の必要料金", value: "消費税、通信料、導入内容に応じて発生する個別費用。" },
    { label: "お支払い方法", value: "個別契約または案内時に定める方法に準じます。" },
    { label: "商品の引き渡し時期", value: "契約内容または導入条件に応じて個別に案内します。" },
    { label: "返品・キャンセル", value: "製品・サービスの性質上、契約後のキャンセル条件は個別契約に定めます。動作不良はサポート窓口にて対応します。" },
  ];

  const legalCards = [
    { title: "利用規約", href: "/legal/terms", desc: "サービスの利用に関するルールと権利義務を定めています。" },
    { title: "プライバシーポリシー", href: "/legal/privacy", desc: "個人情報の管理体制とデータ取扱いの方針を記述しています。" },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:pl-6">
        <h1 className="text-3xl font-bold text-slate-950 md:text-5xl">特定商取引法に基づく表記</h1>
      </section>

      <section className="mb-12 overflow-hidden rounded-lg border border-slate-200 bg-white">
        <dl className="divide-y divide-slate-100">
          {legalItems.map((item) => (
            <div key={item.label} className="flex flex-col p-6 transition-colors hover:bg-slate-50 sm:flex-row sm:gap-10">
              <dt className="w-full shrink-0 text-sm font-bold text-slate-950 sm:w-48">{item.label}</dt>
              <dd className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 sm:mt-0">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {legalCards.map((card) => (
          <Link key={card.href} href={card.href} className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400">
            <h2 className="font-bold text-slate-950">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
