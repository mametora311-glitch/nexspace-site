// src/app/legal/privacy/page.tsx
export default function PrivacyPage() {
  const policies = [
    { title: "1. 基本方針", content: "NEXSPACE株式会社（以下「当社」）は、個人情報の保護に関する法令を遵守し、ユーザーの信頼に応える情報管理体制を維持します。" },
    { title: "2. 収集する情報", content: "・アカウント情報（氏名、メールアドレス、連絡先）\n・利用実績（アクセスログ、操作履歴、デバイス情報）\n・入力データのメタデータ（AIの学習には使用せず、サービス改善のみに利用）" },
    { title: "3. 利用目的", content: "・本サービスの提供、維持、改善\n・ユーザー認証およびセキュリティ対策\n・重要なお知らせやメンテナンス情報の通知\n・お問い合わせへの対応" },
    { title: "4. データの保存期間", content: "収集した情報は、利用目的の達成に必要な期間、または法令が定める期間保存し、その後速やかに消去いたします。" },
    { title: "5. 委託先の管理", content: "当社は、サービスの運営に必要な範囲で、適切な秘密保持契約を締結した業務委託先に個人情報の取り扱いを委託する場合があります。" },
    { title: "6. 第三者提供の制限", content: "当社は、ユーザーの同意がある場合や法令に基づく場合を除き、個人情報を第三者に提供いたしません。" },
    { title: "7. 安全管理措置", content: "SSL/TLS暗号化、アクセス権限の厳格化、ファイアウォールの設置等、情報漏洩を防止するための物理的・技術的措置を講じています。" },
    { title: "8. ユーザーの権利", content: "ユーザーは、自己の個人情報の開示、訂正、削除を請求することができます。" },
    { title: "9. Cookieおよび解析ツールの利用", content: "本サイトでは利便性向上のためCookieおよび解析ツールを使用しています。これらは個人の特定を目的としたものではありません。" },
    { title: "10. 改定手続", content: "当社は、必要に応じて本ポリシーを改定します。重要な変更がある場合は、本サイト上でお知らせいたします。" },
    { title: "11. お問い合わせ窓口", content: "個人情報の取扱いに関するお問い合わせは、contact@nexspace.jp までご連絡ください。" }
  ];

  return (
    <div className="w-full py-12 md:py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-10 pb-4 border-b border-slate-200">プライバシーポリシー</h1>
      <div className="space-y-12">
        {policies.map((p, i) => (
          <section key={i}>
            <h2 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h2>
            <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">{p.content}</p>
          </section>
        ))}
      </div>
      <p className="mt-20 text-xs text-slate-400">最終更新日：2025年12月23日</p>
    </div>
  );
}