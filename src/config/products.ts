export type ProductLifecycle =
  | "store_available"
  | "flagship_preparing"
  | "final_tuning"
  | "development"
  | "consultation"
  | "internal"
  | "service_ended"
  | "hidden";

export type ProductCategory =
  | "store_app"
  | "flagship"
  | "business"
  | "medical_welfare"
  | "ops"
  | "technology"
  | "archive";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  lifecycle: ProductLifecycle;
  shortDescription: string;
  description: string;
  href: string;
  ctaLabel: string;
  ctaHref: string;
  showOnHome: boolean;
  showOnProducts: boolean;
  priority: number;
  isNew?: boolean;
  aliases?: string[];
  storeUrl?: string;
  priceLabel?: string;
  caution?: string;
};

export const products: Product[] = [
  {
    slug: "jibunsite",
    name: "じぶんサイト / JibunSite",
    subtitle: "Local Page Builder for Windows",
    category: "store_app",
    lifecycle: "store_available",
    shortDescription:
      "自然文AI補助・見本パーツ・ライブプレビューで、自分のHP/LPをローカルPC上で作成・編集・書き出しできるWindowsアプリ。",
    description:
      "じぶんサイト / JibunSiteは、個人・小規模事業者・クリエイター・店舗・教室などが、自分でHPやLPを作成・更新できるWindowsローカルデスクトップアプリです。AIでたたき台を作り、見本パーツ選択、写真配置、色調整、HTML/ZIP書き出しまでを支援します。",
    href: "/products/jibunsite",
    ctaLabel: "Microsoft Storeで入手",
    ctaHref: "https://apps.microsoft.com/detail/9MX9ZKTXSV7T?hl=ja-jp&gl=JP&ocid=pdpshare",
    showOnHome: true,
    showOnProducts: true,
    priority: 1,
    isNew: true,
    aliases: ["JibunSite", "じぶんサイト", "local-page-builder", "ページビルダー"],
    storeUrl: "https://apps.microsoft.com/detail/9MX9ZKTXSV7T?hl=ja-jp&gl=JP&ocid=pdpshare",
    priceLabel: "無料ダウンロード / アドオン・サブスクリプション対応",
  },
  {
    slug: "denki-scope",
    name: "Denki Scope",
    subtitle: "PC Power Cost Monitor",
    category: "store_app",
    lifecycle: "store_available",
    shortDescription:
      "PCの消費電力と電気代をリアルタイムに見える化し、日次・月次の累計を保存するWindows常駐モニターアプリ。",
    description:
      "Denki Scopeは、PCの消費電力と電気代を可視化するWindows常駐型デスクトップアプリです。GPUは実測、CPU/その他は構成の自動検出からの推定で総消費電力と電気代を算出し、日次・月次の累計を永続化します。",
    href: "/products/denki-scope",
    ctaLabel: "Microsoft Storeで購入",
    ctaHref: "https://apps.microsoft.com/detail/9MXM7BKVT9M6?hl=ja-jp&gl=JP&ocid=pdpshare",
    showOnHome: true,
    showOnProducts: true,
    priority: 2,
    isNew: true,
    aliases: ["DenkiScope", "Denki Scope", "デンスコ", "電気スコープ"],
    storeUrl: "https://apps.microsoft.com/detail/9MXM7BKVT9M6?hl=ja-jp&gl=JP&ocid=pdpshare",
    priceLabel: "¥150",
  },
  {
    slug: "neutrongate",
    name: "NeutronGate",
    subtitle: "Local AI Knowledge Runtime",
    category: "flagship",
    lifecycle: "flagship_preparing",
    shortDescription:
      "知識パックをローカル環境で読み込み、クラウド依存を抑えて使うAI基盤。",
    description:
      "NeutronGateは、事前成形済み知識パックをPC内で扱うローカル志向のAI実行基盤です。",
    href: "/products/neutrongate",
    ctaLabel: "詳細を見る",
    ctaHref: "/products/neutrongate",
    showOnHome: true,
    showOnProducts: true,
    priority: 10,
  },
  {
    slug: "ngnd",
    name: "NGND",
    subtitle: "Next Generation Node Deployment",
    category: "business",
    lifecycle: "final_tuning",
    shortDescription:
      "ローカルサーバーの状態監視、運用管理、防御イベント確認を支援する管理システム。",
    description:
      "NGNDは、小規模事業者や施設向けに、ローカルサーバー運用を可視化・管理するためのシステムです。",
    href: "/products/ngnd",
    ctaLabel: "導入相談",
    ctaHref: "/consultation?product=ngnd",
    showOnHome: true,
    showOnProducts: true,
    priority: 20,
  },
  {
    slug: "carelingual",
    name: "CareLingual",
    subtitle: "Care / Welfare Communication Support",
    category: "medical_welfare",
    lifecycle: "final_tuning",
    shortDescription:
      "医療・介護・福祉施設向けの記録、相談、通知、情報整理を支援するシステム。",
    description:
      "CareLingualは、現場記録や申し送り、利用者情報整理を補助する施設向けプロダクトです。",
    href: "/products/carelingual",
    ctaLabel: "施設導入相談",
    ctaHref: "/consultation?product=carelingual",
    showOnHome: true,
    showOnProducts: true,
    priority: 30,
  },
  {
    slug: "ndsm",
    name: "NDSM",
    subtitle: "NEXSPACE Data Server Management",
    category: "ops",
    lifecycle: "development",
    shortDescription:
      "複数の自社サーバー情報を一元管理するためのローカル運用管理システム。",
    description:
      "NDSMは、NEXSPACE系サーバー群の管理・監視・接続情報整理を目的とした運用支援システムです。",
    href: "/products/ndsm",
    ctaLabel: "概要を見る",
    ctaHref: "/products/ndsm",
    showOnHome: true,
    showOnProducts: true,
    priority: 40,
  },
];

export const lifecycleLabels: Record<ProductLifecycle, string> = {
  store_available: "NEW / Microsoft Storeで購入可能",
  flagship_preparing: "提供準備・商品化設計中",
  final_tuning: "販売用最終チューニング中",
  development: "開発・試作中",
  consultation: "相談受付中",
  internal: "内部基盤",
  service_ended: "サービス終了済み",
  hidden: "非表示",
};
