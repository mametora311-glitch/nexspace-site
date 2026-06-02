export const headerLinks = [
  { href: "/", label: "トップ" },
  { href: "/products", label: "プロダクト" },
  { href: "/technology", label: "技術" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export const footerSections = [
  {
    title: "Products",
    links: [
      { href: "/products/neutrongate", label: "NeutronGate" },
      { href: "/products/ngnd", label: "NGND" },
      { href: "/products/carelingual", label: "CareLingual" },
      { href: "/products/ndsm", label: "NDSM" },
    ],
  },
  {
    title: "Technology",
    links: [
      { href: "/technology/iisa", label: "IISA" },
      { href: "/technology/360-dqhm", label: "360-DQHM" },
      { href: "/technology/packbuilder", label: "PackBuilder" },
    ],
  },
  {
    title: "Archive",
    links: [
      { href: "/archive/aiec", label: "AIEC" },
      { href: "/archive/axis", label: "Axis" },
      { href: "/archive/primus", label: "Primus" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/consultation", label: "導入相談" },
      { href: "/faq", label: "Q&A" },
      { href: "/legal", label: "Legal" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;
