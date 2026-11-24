import Link from "next/link";
import { companyHistory, siteConfig } from "@/config/site";

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

      <section className="mt-12" aria-labelledby="company-history-heading">
        <div className="mb-6 border-l-4 border-sky-500 pl-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">History</p>
          <h2 id="company-history-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            沿革・開発略歴
          </h2>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
          <ol className="relative space-y-8 border-l border-slate-200 pl-6 md:space-y-0 md:border-l-0 md:pl-0">
            {companyHistory.map((item, index) => (
              <li
                key={`${item.period}-${item.title}`}
                className="relative md:grid md:grid-cols-[11rem_1fr] md:gap-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-white md:hidden"
                />

                <div className="md:py-4 md:text-right">
                  <span className="inline-block rounded bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700 md:bg-transparent md:px-0 md:py-0 md:text-sm md:font-semibold md:text-slate-600">
                    {item.period}
                  </span>
                </div>

                <div
                  className={`mt-2 md:relative md:mt-0 md:border-l md:border-slate-200 md:pb-8 md:pl-8 md:pt-4 ${
                    index === companyHistory.length - 1 ? "md:pb-4" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="hidden md:absolute md:-left-[5px] md:top-[22px] md:block md:h-2.5 md:w-2.5 md:rounded-full md:bg-sky-500 md:ring-4 md:ring-white"
                  />
                  <h3 className="text-base font-bold leading-snug text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
