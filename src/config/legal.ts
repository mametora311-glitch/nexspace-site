import { siteConfig } from "./site";

export const legalConfig = {
  legalEntity: siteConfig.legalName,
  serviceNames: ["NeutronGate", "NGND", "CareLingual", "NDSM"],
  termsServiceText:
    "本規約は、NEXSPACEが提供または提供準備中の「NeutronGate」「NGND」「CareLingual」「NDSM」および関連サービス（以下「本サービス」）の利用条件を定めるものです。",
  establishedTermsDate: "2025年12月23日",
  privacyUpdatedDate: "2025年12月23日",
} as const;
