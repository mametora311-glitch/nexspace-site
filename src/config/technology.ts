export type Technology = {
  slug: string;
  name: string;
  subtitle: string;
  status: string;
  shortDescription: string;
  description: string;
  href: string;
  relatedProduct?: string;
  priority: number;
};

export const technologies: Technology[] = [
  {
    slug: "iisa",
    name: "IISA",
    subtitle: "Integrated Immune System Architecture",
    status: "技術・論文",
    shortDescription:
      "自律AI制御とローカル運用の安全設計を支える研究アーキテクチャ。",
    description:
      "IISAは、NGNDなどの背景技術として参照する防御・制御アーキテクチャです。一般向けページでは、運用支援の考え方に絞って説明します。",
    href: "/technology/iisa",
    relatedProduct: "NGND",
    priority: 1,
  },
  {
    slug: "360-dqhm",
    name: "360-DQHM",
    subtitle: "360-Dimensional Quantum-Grade Hybrid Memory",
    status: "研究概念",
    shortDescription:
      "NeutronGateの基盤思想として扱う、多面的な知識保持と参照の研究概念。",
    description:
      "360-DQHMは、ローカル知識を多面的に整理し、用途に応じて参照するための研究概念です。",
    href: "/technology/360-dqhm",
    relatedProduct: "NeutronGate",
    priority: 2,
  },
  {
    slug: "packbuilder",
    name: "PackBuilder",
    subtitle: "Knowledge Pack Generation Base",
    status: "完成済み内部基盤",
    shortDescription:
      "製品ではなく、知識パック生成を支える内部基盤として掲載します。",
    description:
      "PackBuilderは、NeutronGateで扱う知識パックを成形するための内部基盤です。販売対象の単体製品ではありません。",
    href: "/technology/packbuilder",
    relatedProduct: "NeutronGate",
    priority: 3,
  },
];
