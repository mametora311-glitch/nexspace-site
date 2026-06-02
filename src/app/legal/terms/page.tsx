import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
  const sections = [
    { title: "第1条（目的）", content: legalConfig.termsServiceText },
    { title: "第2条（定義）", content: "本規約において使用する用語の定義は、別途定める場合を除き、著作権法、個人情報保護法等の関連法令に従うものとします。" },
    { title: "第3条（本規約への同意）", content: "ユーザーは、本規約に同意した上で本サービスを利用するものとします。利用を開始した時点で、本規約の各条項に同意したものとみなされます。" },
    { title: "第4条（登録・アカウント管理）", content: "1. ユーザーは、自己の責任においてアカウントおよびパスワードを厳重に管理するものとします。\n2. アカウントの貸与、譲渡、売買等は一切禁止します。" },
    { title: "第5条（利用料金・支払方法）", content: "本サービスの利用料金および支払方法は、各プロダクトの案内、個別見積、または契約書に定める通りとします。" },
    { title: "第6条（知的財産権）", content: "1. 本サービスを構成する全てのプログラム、アルゴリズム、ドキュメント等の知的財産権はNEXSPACEに帰属します。\n2. ユーザーが本サービスを通じて生成した出力物の権利は、個別契約または適用法令に従って取り扱います。" },
    { title: "第7条（禁止事項）", content: "・逆コンパイル、リバースエンジニアリング、解析行為\n・AIモデルの複製または模倣を目的としたプロンプトの送信\n・NEXSPACEまたは第三者の知的財産権、プライバシー、名誉を侵害する行為\n・スクレイピング等による過度な負荷をかける行為" },
    { title: "第8条（秘密保持）", content: "ユーザーおよびNEXSPACEは、本サービスに関連して知り得た相手方の技術上、営業上の秘密情報を、事前の書面による承諾なく第三者に開示・漏洩してはなりません。" },
    { title: "第9条（個人情報の取扱い）", content: "NEXSPACEは、ユーザーの個人情報を別途定めるプライバシーポリシーに従い適正に取り扱います。" },
    { title: "第10条（サービスの中止・中断）", content: "保守点検、システムの不具合、不可抗力等により、NEXSPACEはユーザーに事前通知することなく本サービスを中断できるものとします。" },
    { title: "第11条（利用停止・解約）", content: "ユーザーが本規約に違反した場合、NEXSPACEは本サービスの利用停止またはアカウント削除を行うことができるものとします。" },
    { title: "第12条（保証の否認）", content: "NEXSPACEは、本サービスの内容、出力物の正確性、特定の目的への適合性について、いかなる保証も行いません。" },
    { title: "第13条（損害賠償・責任限定）", content: "NEXSPACEがユーザーに対して負う損害賠償責任は、故意または重過失がある場合を除き、直接かつ通常の損害に限られ、その額は当該ユーザーが過去12ヶ月間にNEXSPACEに支払った対価を上限とします。" },
    { title: "第14条（反社会的勢力の排除）", content: "ユーザーおよびNEXSPACEは、自らが暴力団、暴力団員等の反社会的勢力に該当しないこと、および暴力的な要求行為を行わないことを確約します。" },
    { title: "第15条（権利義務の譲渡禁止）", content: "ユーザーは、NEXSPACEの書面による承諾なく、本規約上の地位または権利義務を第三者に譲渡することはできません。" },
    { title: "第16条（分離可能性）", content: "本規約の一部が法令により無効と判断された場合でも、その他の条項は引き続き効力を有するものとします。" },
    { title: "第17条（準拠法・管轄）", content: "本規約は日本法に基づき解釈されます。本サービスに関する紛争は、NEXSPACEの所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。" },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <h1 className="mb-10 border-b border-slate-200 pb-4 text-3xl font-bold text-slate-950">利用規約</h1>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="border-l-4 border-sky-500 pl-4">
            <h2 className="mb-3 text-lg font-bold text-slate-950">{section.title}</h2>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{section.content}</p>
          </section>
        ))}
      </div>
      <p className="mt-16 text-xs text-slate-400">制定日：{legalConfig.establishedTermsDate}</p>
      <p className="mt-2 text-xs text-slate-400">運営主体：{siteConfig.legalName}</p>
    </div>
  );
}
