import { NextResponse } from "next/server";
import { archiveProducts } from "@/config/archiveProducts";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const currentProductText = products
  .map((product) => `- ${product.name}: ${product.subtitle}。${product.shortDescription}`)
  .join("\n");

const archiveProductText = archiveProducts
  .map((product) => `- ${product.name}: ${product.endedStatusLabel}。${product.endedDescription}`)
  .join("\n");

const mainLinks = [
  "- NeutronGate: /products/neutrongate",
  "- NGND: /products/ngnd",
  "- CareLingual: /products/carelingual",
  "- NDSM: /products/ndsm",
  "- 導入相談: /consultation",
  "- お問い合わせ: /contact",
  "- アーカイブ: /archive",
].join("\n");

function buildSystemPrompt() {
  return `あなたはNEXSPACE公式サイトの案内AIです。
回答は、現在のサイト設定に基づいて簡潔に行ってください。

【NEXSPACEの理念】
${siteConfig.brandName}は、AIを単なる生成モデルではなく、現場で動くシステムのエンジンとして実装する開発ブランドです。

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
- 回答の最後に関連ページリンクを1つだけ提示する。

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

        const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
            },
            body: JSON.stringify({
                model: "meta/llama-3.2-11b-vision-instruct",
                messages: [
                    {
                        role: "system",
                        content: buildSystemPrompt(),
                    },
                    ...messages,
                ],
                max_tokens: 512,
                temperature: 0.5,
            }),
        });

        const data = await response.json();
        return NextResponse.json(data.choices[0].message);
    } catch {
        return NextResponse.json({ content: "システムエラーです。お問い合わせからご連絡ください。" }, { status: 500 });
    }
}
