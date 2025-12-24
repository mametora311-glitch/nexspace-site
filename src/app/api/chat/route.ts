// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

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
                        content: `
あなたはNEXSPACEの高度対話型AIです。以下のサイト情報を完全に把握し、ユーザーにプロフェッショナルかつ簡潔に回答してください。

【NEXSPACEの理念】
・AIを単なる「生成モデル」ではなく、システムを動かす「動力（エンジン）」として定義。
・"AI as an Engine, not just a model." がコアミッション。

【製品情報】
1. AxisOS: 複数のAIモデルやクラウドサービスを統合管理するAI時代のOS。
2. AIEC Office: Excel/PPT/WordをAIで自動駆動。永久ライセンス ¥19,800。
3. Primus: デバイス完結型の完全自律型AI。先行予約 ¥9,800。

【会社概要】
・屋号: NEXSPACE
・代表: 松永 成幸
・所在地: 鹿児島県鹿児島市油須木町167-3
・設立: 2025年9月6日

【リーガル・購入】
・12/24よりCAMPFIREにてクラウドファンディング開始。
・損害賠償は過去12ヶ月の支払額を上限とする（責任限定条項）。
・反社会的勢力の排除を徹底。

【回答指針】
・回答は3文以内を目安に簡潔に行う。
・不明な点や個別相談は必ず「お問い合わせページ（Googleフォーム）」へ誘導する。
・NEXSPACEの代表や所在地、価格についても正確に答える。

あなたはNEXSPACEのAIです。以下のガイドラインに従って回答してください。

【リンク案内ルール】
回答の最後には、必ずユーザーが次に進むべきページのリンクを以下の形式で1つだけ添えてください。
形式: [ページ名](パス)

【主要リンク一覧】
・AxisOS詳細: [AxisOS Project](/products/axis)
・AIEC購入/詳細: [AIEC Office 購入ページ](/purchase/aiec)
・Primus予約: [Primus 先行予約ページ](/purchase/primus)
・会社概要: [会社概要](/company)
・お問い合わせ: [お問い合わせフォーム](/contact)
・利用規約: [利用規約](/legal/terms)

【回答スタイル】
・簡潔に1〜2文で回答したあと、改行して上記のリンクを提示してください。
`
                    },
                    ...messages,
                ],
                max_tokens: 512,
                temperature: 0.5, // 回答の安定性を高めるために少し下げました
            }),
        });

        const data = await response.json();
        return NextResponse.json(data.choices[0].message);
    } catch (error) {
        return NextResponse.json({ content: "システムエラーです。お問い合わせからご連絡ください。" }, { status: 500 });
    }
}