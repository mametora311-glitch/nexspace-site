export const siteConfig = {
  brandName: "NEXSPACE",
  legalName: "NEXSPACE",
  representative: "松永 成幸",
  address: "鹿児島県鹿児島市油須木町167-3",
  postalAddress: "〒891-1104 鹿児島県鹿児島市油須木町167-3",
  email: "contact@nexspace.jp",
  phone: "099-801-7681",
  established: "2025年9月6日",
  tagline: "AIを所有し、現場で動かす。",
  mission:
    "AIを単なる生成モデルではなく、業務・生活・ローカル環境を動かすエンジンとして実装する。",
} as const;

export type CompanyMilestone = {
  period: string;
  title: string;
  description: string;
};

export const companyHistory: CompanyMilestone[] = [
  {
    period: "2025年9月",
    title: "NEXSPACE 設立",
    description:
      "鹿児島県鹿児島市にて創業。クラウド認証・配布基盤の構築および擬似重力共鳴装置『CICAS』の基礎構造モデリングを開始。",
  },
  {
    period: "2025年12月",
    title: "医療・介護福祉支援『CareLingual』開発開始・ローカル志向への集約",
    description:
      "介護現場の実務知見に基づく記録・申し送り支援システムの開発に着手。初期AI検証プロダクト群（現在はアーカイブ化）の知見を統合し、ローカルファースト設計へ軸足を移行。",
  },
  {
    period: "2026年3月",
    title: "基礎アーキテクチャ論文（IISA / 360-DQHM）公開・主力基盤開発",
    description:
      "Zenodoにて独自防御理論『IISA』および記憶構造『360-DQHM』のプレプリントを公開。ローカルAI基盤『NeutronGate』とサーバー監視・防御システム『NGND』の開発を本格化。",
  },
  {
    period: "2026年5月〜6月",
    title: "『PackBuilder』完成・『NDSM』試作・公式サイト全面刷新",
    description:
      "知識パック生成基盤『PackBuilder』を完成させ、複数サーバー統合管理『NDSM』の試作を開始。公式サイト（nexspace.jp）を現行プロダクト体系へ再編。",
  },
  {
    period: "2026年6月〜7月",
    title: "Microsoft Store アプリ公開・iOSネイティブ展開",
    description:
      "『じぶんサイト / JibunSite』『Denki Scope』をMicrosoft Storeにて公開し、『NEXSPACE AI Relay』を構築。『CareLingual』iOS版の施設内LAN実機同期検証を完了、『CRMタスクチェッカー』を開発。",
  },
  {
    period: "2026年11月",
    title: "ハッカソン完遂・自律防衛『AIMS』公開・技術発信強化",
    description:
      "『Built with Claude: Japan 2026』にて2日間での実装を完遂。Rust製自律防衛システム『AIMS』ショーケースをGitHubで公開し、Zennにて技術論文・記事を発表。",
  },
];
