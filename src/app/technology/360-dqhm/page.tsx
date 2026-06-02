import Link from "next/link";
import { technologies } from "@/config/technology";

const technology = technologies.find((item) => item.slug === "360-dqhm");

const points = [
  "NeutronGate基盤思想として掲載",
  "知識を多面的に整理するための研究概念",
  "製品ページではなく技術ページに限定して説明",
];

export default function DqhmPage() {
  if (!technology) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <p className="text-sm font-bold text-sky-700">{technology.status}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{technology.name}</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{technology.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {technology.description}
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {points.map((point) => (
          <article key={point} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm leading-relaxed text-slate-700">{point}</p>
          </article>
        ))}
      </section>

      <div className="mt-12">
        <Link href="/technology" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
          技術一覧に戻る
        </Link>
      </div>
    </div>
  );
}
