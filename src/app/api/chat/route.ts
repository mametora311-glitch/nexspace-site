import { NextResponse } from "next/server";
import { archiveProducts } from "@/config/archiveProducts";
import { lifecycleLabels, products } from "@/config/products";
import { siteConfig } from "@/config/site";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const OPENAI_MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4-nano";

const currentProductText = products
  .map((product) => {
    const price = product.priceLabel ? ` 価格/提供: ${product.priceLabel}。` : "";
    const aliases = product.aliases?.length ? ` 別名: ${product.aliases.join(" / ")}。` : "";
    return `- ${product.name}: ${lifecycleLabels[product.lifecycle]}。${product.subtitle}。${product.shortDescription}${price}${aliases}`;
  })
  .join("\n");

const archiveProductText = archiveProducts
  .map((product) => `- ${product.name}: ${product.endedStatusLabel}。${product.endedDescription}`)
  .join("\n");

const companyText = [
  `- 屋号: ${siteConfig.legalName}`,
  `- 代表者: ${siteConfig.representative}`,
  `- 所在地: ${siteConfig.address}`,
  `- 設立: ${siteConfig.established}`,
  "- 事業内容: AIシステム開発・運用 / ローカルAI・業務運用支援プロダクト開発",
  `- お問い合わせ: ${siteConfig.email}`,
].join("\n");

const productLinks = products
  .map((product) => `- ${product.name}: ${product.href}`)
  .join("\n");

const mainLinks = [
  "- 会社概要: /company",
  "- プロダクト一覧: /products",
  productLinks,
  "- 技術: /technology",
  "- 導入相談: /consultation",
  "- お問い合わせ: /contact",
  "- アーカイブ: /archive",
].join("\n");

function buildSystemPrompt() {
  return `あなたはNEXSPACE公式サイトの案内AIです。
回答は、現在のサイト設定に基づいて簡潔に行ってください。

【NEXSPACEの理念】
${siteConfig.brandName}は、AIを単なる生成モデルではなく、現場で動くシステムのエンジンとして実装する開発ブランドです。
${siteConfig.mission}

【会社概要】
${companyText}

【現在の主なプロダクト】
${currentProductText}

【サービス終了済みプロダクト】
${archiveProductText}

終了済みプロダクトについて質問された場合は、現在は提供・販売・予約受付を終了していると案内してください。
価格、予約、旧キャンペーン、購入リンクは案内しないでください。

【回答ルール】
- 回答は1〜3文で簡潔にする。
- 未確定の価格、提供時期、契約条件は断定しない。
- 医療、法律、セキュリティの判断代行は行わない。
- 個別相談は /contact または /consultation へ誘導する。
- 会社概要、代表者、所在地、設立、事業内容については上記の会社概要に基づいて回答する。
- 回答の最後に関連ページリンクをMarkdown形式で1つだけ提示する。例: [会社概要](/company)

【主要リンク】
${mainLinks}`;
}

function findArchiveProduct(message: string) {
  const normalized = message.toLowerCase();
  if (normalized.includes("axisos")) {
    return archiveProducts.find((product) => product.slug === "axis");
  }

  return archiveProducts.find((product) => normalized.includes(product.slug));
}

function productMatchesText(product: (typeof products)[number], text: string) {
  const normalized = text.toLowerCase();
  return [
    product.slug,
    product.name,
    ...(product.aliases ?? []),
  ].some((keyword) => normalized.includes(keyword.toLowerCase()));
}

function buildCompanyAnswer(message: string) {
  if (/代表|代表者|社長|運営責任者/.test(message)) {
    return `${siteConfig.legalName}の代表者は${siteConfig.representative}です。\n[会社概要](/company)`;
  }

  if (/所在地|住所|場所|どこにある|拠点/.test(message)) {
    return `${siteConfig.legalName}の所在地は${siteConfig.address}です。\n[会社概要](/company)`;
  }

  if (/設立|創業|いつでき|いつ設立/.test(message)) {
    return `${siteConfig.legalName}の設立は${siteConfig.established}です。\n[会社概要](/company)`;
  }

  if (/会社概要|何の会社|どんな会社|会社.*何|事業内容|何をして|なにをして/.test(message)) {
    return `${siteConfig.brandName}は、AIシステム開発・運用と、ローカルAI・業務運用支援プロダクト開発を行う開発ブランドです。\n[会社概要](/company)`;
  }

  return undefined;
}

function extractResponseText(data: {
  output_text?: unknown;
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: unknown;
    }>;
  }>;
}) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text;
  }

  const outputText = data.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content) => content.type === "output_text" && typeof content.text === "string")
    .map((content) => content.text)
    .join("\n")
    .trim();

  return outputText;
}

function pickRelatedLink(message: string, content: string) {
  if (/代表|代表者|社長|運営責任者|所在地|住所|場所|設立|創業|会社概要|何の会社|どんな会社|事業内容/.test(message)) {
    return { label: "会社概要", href: "/company" };
  }

  const normalizedMessage = message.toLowerCase();
  const archiveProductInMessage = archiveProducts.find((product) =>
    normalizedMessage.includes(product.slug) || normalizedMessage.includes(product.name.toLowerCase())
  );

  if (archiveProductInMessage) {
    return { label: archiveProductInMessage.name, href: archiveProductInMessage.href };
  }

  const productInMessage = products.find((item) => productMatchesText(item, normalizedMessage));

  if (productInMessage) {
    return { label: productInMessage.name, href: productInMessage.href };
  }

  if (/プロダクト|製品|サービス|商品|一覧/.test(message)) {
    return { label: "プロダクト一覧", href: "/products" };
  }

  if (/技術|研究|iisa|360|dqhm|packbuilder/i.test(message)) {
    return { label: "技術", href: "/technology" };
  }

  if (/導入|相談|見積|契約|商談/.test(message)) {
    return { label: "導入相談", href: "/consultation" };
  }

  if (/問い合わせ|問合|連絡|メール|電話|contact/i.test(message)) {
    return { label: "お問い合わせ", href: "/contact" };
  }

  const normalized = `${message}\n${content}`.toLowerCase();
  const archiveProduct = archiveProducts.find((product) =>
    normalized.includes(product.slug) || normalized.includes(product.name.toLowerCase())
  );

  if (archiveProduct) {
    return { label: archiveProduct.name, href: archiveProduct.href };
  }

  const product = products.find((item) => productMatchesText(item, normalized));

  if (product) {
    return { label: product.name, href: product.href };
  }

  return { label: "会社概要", href: "/company" };
}

function normalizeAssistantContent(content: string, message: string) {
  const relatedLink = pickRelatedLink(message, content);
  const body = content
    .trim()
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      if (/^(関連ページ|関連リンク|詳しくは|詳細|ページ)\s*[:：]/.test(trimmed)) return false;
      if (/^\[[^\]]+\]\(\/[^)]+\)$/.test(trimmed)) return false;
      if (/^\/[a-z0-9/?=&_-]+$/i.test(trimmed)) return false;
      return true;
    })
    .join("\n")
    .trim();

  return `${body}\n[${relatedLink.label}](${relatedLink.href})`;
}

export async function POST(req: Request) {
    try {
        const { messages } = await req.json() as { messages: ChatMessage[] };
        const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");
        const archiveProduct = latestUserMessage ? findArchiveProduct(latestUserMessage.content) : undefined;

        if (archiveProduct) {
            return NextResponse.json({
                content: `${archiveProduct.name}はサービス終了済みで、現在は提供・販売・予約受付を終了しています。価格、予約、購入リンク、旧キャンペーン情報は案内していません。\n[アーカイブ](${archiveProduct.href})`,
            });
        }

        const companyAnswer = latestUserMessage ? buildCompanyAnswer(latestUserMessage.content) : undefined;

        if (companyAnswer) {
            return NextResponse.json({ content: companyAnswer });
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { content: "AI BotのAPIキーが未設定です。OPENAI_API_KEYを設定してください。" },
                { status: 500 },
            );
        }

        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: OPENAI_MODEL,
                instructions: buildSystemPrompt(),
                input: messages.map((message) => ({
                    role: message.role,
                    content: message.content,
                })),
                max_output_tokens: 512,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error?.message ?? "OpenAI API request failed");
        }

        const content = extractResponseText(data);

        if (!content) {
            throw new Error("OpenAI API returned no content");
        }

        return NextResponse.json({
            content: normalizeAssistantContent(content, latestUserMessage?.content ?? ""),
        });
    } catch {
        return NextResponse.json({ content: "システムエラーです。お問い合わせからご連絡ください。" }, { status: 500 });
    }
}
