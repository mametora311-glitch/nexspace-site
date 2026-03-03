export default function NgndPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <div className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">
          In Development
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          NGND
          <br />
          <span className="text-2xl text-slate-500 md:text-3xl">
            Next Generation Node Deployment
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          公開論文「Integrated Immune System Architecture」の制御・防御システムを応用し、
          ノードデプロイを次世代化するための基盤として開発を進めています。
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">NGNDが実現する「次世代」の機能</h2>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <li>
            完全自動・ステルスデプロイ: WindowsからSSH経由でDebian等へログインし、ディスクを汚染せずに
            メモリ上へWorkerを直接流し込んで実行する。
          </li>
          <li>
            物理法則による防御（IISA）: 不正アクセスを検知した瞬間、VDF Tarpitで攻撃者のCPUを
            10<sup>59</sup> 秒の「時間の沼」に沈める。
          </li>
          <li>
            自律型証拠隠滅: 脅威が閾値を超えると、自律判断で自分自身のメモリフットプリントと実行ファイルを
            0.1ms で抹消（自爆）し、絶対的な沈黙を返す。
          </li>
        </ul>
      </section>

      <div className="mt-16 flex flex-wrap gap-4">
        <a
          href="/contact"
          className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
        >
          導入のご相談はお問い合わせからどうぞ
        </a>
        <a
          href="/products"
          className="rounded-full border border-slate-300 px-8 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-slate-900"
        >
          プロダクト一覧に戻る
        </a>
      </div>
    </div>
  );
}
