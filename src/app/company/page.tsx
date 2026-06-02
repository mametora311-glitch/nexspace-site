import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function CompanyPage() {
  const companyInfo = [
    { label: "屋号", value: siteConfig.legalName },
    { label: "代表者", value: siteConfig.representative },
    { label: "所在地", value: siteConfig.address },
    { label: "設立", value: siteConfig.established },
    { label: "事業内容", value: "AIシステム開発・運用 / ローカルAI・業務運用支援プロダクト開発" },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Company Profile</h1>
        <p className="mt-2 text-slate-600">会社概要</p>
      </section>

      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <dl className="divide-y divide-slate-200">
          {companyInfo.map((item) => (
            <div key={item.label} className="grid grid-cols-1 px-6 py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-slate-950">{item.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12 rounded-lg bg-slate-950 p-6 text-white md:p-8">
        <h2 className="text-xl font-bold">Our Vision</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {siteConfig.mission}
        </p>
      </section>

      <div className="mt-8">
        <Link href="/contact" className="inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">
          お問い合わせはこちらから
        </Link>
      </div>
    </div>
  );
}
