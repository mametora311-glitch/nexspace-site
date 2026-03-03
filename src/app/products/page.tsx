// src/app/products/page.tsx
export default function ProductsPage() {
  const products = [
    {
      title: "AxisOS",
      subtitle: "Next-Gen AI Operating System",
      desc: "複数のAIモデル、クラウドサービス、ローカルリソースを統合管理。AI時代のインフラストラクチャとして、複雑なタスクの自動制御を可能にします。",
      href: "/products/axis",
      tag: "Core Product",
    },
    {
      title: "NeutronGate",
      subtitle: "Next Product (Details Coming Soon)",
      desc: "新規プロダクトとして公開準備中。仕様・提供形態・導入情報は順次公開予定です。",
      href: "/products/neutrongate",
      tag: "Coming Soon",
    },
    {
      title: "NGND",
      subtitle: "Next Generation Node Deployment",
      desc: "自社ローカルサーバーの統合管理・制御・防御を、アプリUIから実行できる次世代運用システム。",
      href: "/products/ngnd",
      tag: "Advanced Architecture",
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      {/* ヘッダーセクション */}
      <section className="mb-16 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Products</h1>
        <p className="mt-2 max-w-2xl text-slate-700">
          NEXSPACEが提供する、AIをエンジンとして実装した次世代のプロダクト群です。
          単なるツールを超えた、ビジネスと生活の「動力」となるシステムを展開しています。
        </p>
      </section>

      {/* 現行プロダクトグリッド */}
      <section className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.href}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl"
          >
            <div>
              <div className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">
                {product.tag}
              </div>
              <h2 className="mb-1 text-2xl font-bold text-slate-900 group-hover:text-sky-600">
                {product.title}
              </h2>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
                {product.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                {product.desc}
              </p>
            </div>
            
            <div className="mt-8 flex items-center text-sm font-bold text-sky-600">
              LEARN MORE
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </section>

      <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">NGND（Next Generation Node Deployment）</h2>
        <p className="mt-2 text-sm font-semibold text-sky-700">NGNDが実現する「次世代」の機能</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          公開論文「Integrated Immune System Architecture」で提示した制御・防御システムを応用し、
          自社ローカルサーバーの統合管理・制御・防御を同時に成立させる設計を採用。アプリUIで簡単に管理できます。
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <li>
            統合管理UI: アプリUI上でノード一覧、稼働状況、制御状態、防御イベントを一元管理し、
            日常運用をシンプルにする。
          </li>
          <li>
            完全自動・ステルスデプロイ: WindowsからSSH経由で自社ローカルサーバー群
            （Debianを含むLinux系ノードなど）へ接続し、ディスクを汚染せずにメモリ上へWorkerを直接流し込んで実行する。
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

      {/* 過去プロダクト導線 */}
      <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
        <h2 className="text-xl font-bold text-slate-900">Past Products Archive</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          過去に公開していた AIEC Office と Primus は、アーカイブページに移動しました。
          各プロダクトの概要と当時のコンセプトをご覧いただけます。
        </p>
        <a
          href="/products/legacy"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
        >
          過去のプロダクトページを見る
        </a>
      </section>
    </div>
  );
}
