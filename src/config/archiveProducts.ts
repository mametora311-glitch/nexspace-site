export type ArchiveProduct = {
  slug: string;
  name: string;
  subtitle: string;
  endedStatusLabel: "サービス終了済み";
  endedDescription: string;
  formerDescription: string;
  href: string;
};

export const archiveProducts: ArchiveProduct[] = [
  {
    slug: "aiec",
    name: "AIEC",
    subtitle: "Office Automation Engine",
    endedStatusLabel: "サービス終了済み",
    endedDescription:
      "AIECは現在、提供・販売・新規受付を終了しています。",
    formerDescription:
      "Excel、PowerPoint、Wordなどの定型業務をAIで補助する構想のプロダクトでした。",
    href: "/archive/aiec",
  },
  {
    slug: "axis",
    name: "Axis",
    subtitle: "AI Multi Operation System",
    endedStatusLabel: "サービス終了済み",
    endedDescription:
      "Axis / AxisOSは現在、提供・販売・クラウドファンディング案内を終了しています。",
    formerDescription:
      "複数AIモデルやクラウドサービスを統合管理するAI OS構想のプロダクトでした。",
    href: "/archive/axis",
  },
  {
    slug: "primus",
    name: "Primus",
    subtitle: "Autonomous AI Assistant",
    endedStatusLabel: "サービス終了済み",
    endedDescription:
      "Primusは現在、提供・販売・先行予約受付を終了しています。",
    formerDescription:
      "個人に寄り添うローカル志向AIアシスタント構想のプロダクトでした。",
    href: "/archive/primus",
  },
];
