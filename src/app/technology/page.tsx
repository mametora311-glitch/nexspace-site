import Link from "next/link";
import { technologies } from "@/config/technology";

export default function TechnologyPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-12 border-l-4 border-sky-500 pl-4 md:mb-16 md:pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Technology</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          製品そのものではなく、NEXSPACEの技術背景として公開する研究・内部基盤です。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {technologies
          .slice()
          .sort((a, b) => a.priority - b.priority)
          .map((technology) => (
            <Link
              key={technology.slug}
              href={technology.href}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400"
            >
              <p className="text-xs font-bold text-sky-700">{technology.status}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{technology.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{technology.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{technology.shortDescription}</p>
              {technology.relatedProduct ? (
                <p className="mt-5 text-xs font-semibold text-slate-500">Related: {technology.relatedProduct}</p>
              ) : null}
            </Link>
          ))}
      </section>
    </div>
  );
}
