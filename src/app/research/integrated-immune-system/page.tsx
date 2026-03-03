const defenseLayers = [
  {
    name: "Layer 1",
    title: "Temporal Event Horizon",
    desc: "制御層へのアクセス経路に SHA-256 ベースの VDF 連鎖を配置し、非正規アクセスは必ず逐次計算を通過させる。",
  },
  {
    name: "Layer 2",
    title: "Predictive Rejection Protocol",
    desc: "不正アクセスを CPU のページフォルトとして捕捉し、Tdetect + Treject < Tdelay の条件で解析完了前に拒否する。",
  },
  {
    name: "Layer 3",
    title: "Ultra-Fast Self-Healing",
    desc: "ハードウェア監視と TPM 保護のゴールデンイメージで、改変検知後に 0.1ms 以内のロールバックを実施する。",
  },
  {
    name: "Layer 4",
    title: "Stochastic Sequestration",
    desc: "確率的ノイズを挿入して隔離イベントの規則性を崩し、サイドチャネル推定を統計的に無効化する。",
  },
  {
    name: "Layer 5",
    title: "Adaptive Defense Feedback",
    desc: "アクセスパターンを片方向ハードウェアチャネルで防御DBに反映し、攻撃側の逆学習を防ぐ。",
  },
];

const keyMetrics = [
  {
    label: "VDF Steps",
    value: "10^60",
    note: "SHA-256 sequential chain",
  },
  {
    label: "解析完了時間 (1.2 ExaFLOPS)",
    value: "1.15 × 10^59 秒",
    note: "Ryzen 7 5700X / 3.4GHz を基準",
  },
  {
    label: "解析完了時間 (10^21 FLOPS)",
    value: "10^38 秒超",
    note: "Zetta-class を仮定",
  },
  {
    label: "正規アクセス遅延",
    value: "μs オーダー",
    note: "TPM 保護バイパスキー経由",
  },
  {
    label: "自己修復時間",
    value: "0.1ms (100μs)",
    note: "改変検知からロールバック完了まで",
  },
  {
    label: "防御マージン",
    value: "60桁オーダー",
    note: "防御処理と解析完了時間のギャップ",
  },
];

const doi = "10.5281/zenodo.18815443";
const doiUrl = "https://doi.org/10.5281/zenodo.18815443";
const zenodoRecordUrl = "https://zenodo.org/records/18815443";

export default function IntegratedImmuneSystemPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
          Featured Research
          <span className="text-sky-300">|</span>
          Published on February 28, 2026
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl leading-tight">
          Integrated Immune System Architecture
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
          A Physically Grounded Dynamic Defense Model for Autonomous AI Control
        </p>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
          自律AIが自らの制御層を解析・改変するリスクに対して、ソフトウェア制約ではなく
          物理的制約で支配する防御モデルを提案した論文です。時間非対称性を利用した VDF と、
          ハードウェア境界での拒否・自己修復を統合し、計算資源の増大に依存しない制御を目指します。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/papers/integrated-immune-system.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
          >
            論文PDFを開く
          </a>
          <a
            href="/papers/integrated-immune-system.pdf"
            download
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-slate-900"
          >
            PDFをダウンロード
          </a>
        </div>
      </section>

      <section className="mb-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Abstract（要旨）</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            本研究は、AI制御の破壊リスクを「論理層の問題」ではなく「物理法則の問題」として再定義します。
            制御層への不正アクセスは VDF 連鎖で天文学的遅延を強制される一方、正規アクセスは TPM 保護
            バイパスで即時通過します。さらに、ページフォルト捕捉と不変領域からの高速自己修復を組み合わせることで、
            攻撃側が制御層に到達する前に拒否・復元を完了する設計です。
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Paper Info</h2>
          <dl className="space-y-3 text-sm text-slate-200">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Author</dt>
              <dd>Shigeyuki Matsunaga</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Organization</dt>
              <dd>NEXSPACE</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Published</dt>
              <dd>February 28, 2026</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Pages</dt>
              <dd>4 pages</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Keywords</dt>
              <dd>AI Safety, VDF, TPM, Autonomous Control</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">DOI</dt>
              <dd>
                <a
                  href={doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline decoration-sky-500/60 underline-offset-2 hover:text-sky-200"
                >
                  {doi}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <dt className="w-28 font-semibold text-slate-400">Source</dt>
              <dd>
                <a
                  href={zenodoRecordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline decoration-sky-500/60 underline-offset-2 hover:text-sky-200"
                >
                  Zenodo Record
                </a>
              </dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="mb-16 rounded-2xl border border-slate-200 bg-sky-50 p-6">
        <h2 className="mb-3 text-lg font-bold text-slate-900">Cite This Work</h2>
        <p className="text-sm leading-relaxed text-slate-700">
          Matsunaga, S. (2026). Integrated Immune System Architecture: A Physically Grounded Dynamic Defense Model
          for Autonomous AI Control. Zenodo. DOI:{" "}
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-600"
          >
            {doi}
          </a>
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-8 border-l-4 border-sky-500 pl-4">
          <h2 className="text-2xl font-bold text-slate-900">5-Layer Architecture</h2>
          <p className="text-sm text-slate-600">
            生体免疫系に対応する5層防御で、Control Core への内部解析を段階的に遮断します。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {defenseLayers.map((layer) => (
            <article
              key={layer.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-sky-600">{layer.name}</p>
              <h3 className="mb-3 text-lg font-bold text-slate-900">{layer.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{layer.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 border-l-4 border-sky-500 pl-4">
          <h2 className="text-2xl font-bold text-slate-900">Key Metrics</h2>
          <p className="text-sm text-slate-600">
            論文内で示された主要な評価値です。防御速度と解析完了時間の桁差に重点があります。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {keyMetrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{metric.label}</p>
              <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">論文PDFビューア</h2>
            <p className="text-sm text-slate-600">
              ページ下部のコントロールから拡大・ページ移動ができます。
            </p>
          </div>
          <a
            href="/papers/integrated-immune-system.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            新しいタブで開く
          </a>
        </div>
        <iframe
          src="/papers/integrated-immune-system.pdf#view=FitH"
          className="h-[720px] w-full rounded-xl border border-slate-200"
          title="Integrated Immune System Architecture PDF"
        />
      </section>

      <section className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
        <h2 className="mb-4 text-2xl font-bold">Control as Physics</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
          「何を制御するか」はソフトウェア設計の問題であり、「制御を壊させないこと」は
          物理的制約の問題である、という設計思想を前提にした研究です。AIガバナンスを
          計算資源依存から分離するための基盤モデルとして位置付けています。
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-400"
          >
            研究・実装に関するお問い合わせ
          </a>
        </div>
      </section>
    </div>
  );
}
