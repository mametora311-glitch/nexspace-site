import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  const policies = [
    { title: "1. 基本方針", content: "NEXSPACEは、個人情報の保護に関する法令を遵守し、ユーザーの信頼に応える情報管理体制を維持します。" },
    { title: "2. 収集する情報", content: "・お問い合わせ情報（氏名、メールアドレス、連絡先、お問い合わせ内容）\n・利用実績および技術情報（アクセスログ、操作履歴、デバイス情報、アプリのバージョン、エラー情報、IPアドレス等）\n・AI機能の利用に伴う情報（入力されたプロンプト、ページ内容、生成結果、トークン使用量、処理状態等）\n・購入および契約状態に関する情報（Microsoft Store等が提供する購入状態、商品ID、サブスクリプション状態、権利確認に必要な識別情報等）" },
    { title: "3. 利用目的", content: "・本サービスの提供、維持、改善\n・AI生成、ページ作成、利用量制御、課金状態確認等の機能提供\n・ユーザー認証、権利確認、不正利用防止、セキュリティ対策\n・重要なお知らせやメンテナンス情報の通知\n・障害調査、品質改善、お問い合わせへの対応" },
    { title: "4. データの保存期間", content: "収集した情報は、利用目的の達成に必要な期間、または法令が定める期間保存し、その後速やかに消去いたします。" },
    { title: "5. AI機能における外部送信", content: "じぶんサイト / JibunSite等のAI機能では、入力されたプロンプト、ページ内容、生成結果、関連メタデータが、NEXSPACE AI Relay、Anthropic API、その他NEXSPACEが利用するAI処理基盤へ送信される場合があります。NEXSPACEは、これらの情報を自社によるAIモデルの学習目的で使用しません。ユーザーは、個人情報、機密情報、第三者の権利を侵害する情報を入力しないようご注意ください。" },
    { title: "6. 委託先および外部サービスの管理", content: "NEXSPACEは、サービスの運営に必要な範囲で、クラウド基盤、決済・ストア基盤、AI API、ホスティング、解析、問い合わせ管理等の外部サービスまたは業務委託先に情報の取り扱いを委託する場合があります。委託先に対しては、目的外利用を防ぐために必要な管理を行います。" },
    { title: "7. 第三者提供の制限", content: "NEXSPACEは、ユーザーの同意がある場合、サービス提供に必要な委託・外部送信を行う場合、または法令に基づく場合を除き、個人情報を第三者に提供いたしません。" },
    { title: "8. 安全管理措置", content: "SSL/TLS暗号化、アクセス権限の管理、シークレット管理、ログ管理、ファイアウォールの設置等、情報漏洩を防止するための物理的・技術的措置を講じます。" },
    { title: "9. ユーザーの権利", content: "ユーザーは、自己の個人情報の開示、訂正、利用停止、削除を請求することができます。請求内容の確認に必要な範囲で本人確認をお願いする場合があります。" },
    { title: "10. Cookieおよび解析ツールの利用", content: "本サイトでは利便性向上、利用状況の把握、品質改善のためCookieおよび解析ツールを使用する場合があります。これらは個人の特定を目的としたものではありません。" },
    { title: "11. 改定手続", content: "NEXSPACEは、必要に応じて本ポリシーを改定します。重要な変更がある場合は、本サイト上でお知らせいたします。" },
    { title: "12. お問い合わせ窓口", content: `個人情報の取扱い、開示、訂正、削除等に関するお問い合わせは、${siteConfig.email} までご連絡ください。` },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <h1 className="mb-10 border-b border-slate-200 pb-4 text-3xl font-bold text-slate-950">プライバシーポリシー</h1>
      <div className="space-y-10">
        {policies.map((policy) => (
          <section key={policy.title}>
            <h2 className="mb-3 text-lg font-bold text-slate-950">{policy.title}</h2>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{policy.content}</p>
          </section>
        ))}
      </div>
      <p className="mt-16 text-xs text-slate-400">最終更新日：{legalConfig.privacyUpdatedDate}</p>
      <p className="mt-2 text-xs text-slate-400">運営主体：{siteConfig.legalName}</p>
    </div>
  );
}
