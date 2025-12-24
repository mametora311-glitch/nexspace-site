// src/app/contact/page.tsx
export default function ContactPage() {
  // ここにGoogleフォームの「送信」→「埋め込み用HTML」のURLを入れてください
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdUFCAB7tJ845ICu26LXqICkPViacX-VJRUsrF8ehaGb7-Kyg/viewform?usp=dialog=true";

  return (
    <div className="w-full py-12 md:py-20 max-w-4xl mx-auto px-4">
      {/* ページタイトル */}
      <section className="mb-12 border-l-4 border-sky-500 pl-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">Contact</h1>
        <p className="mt-4 text-lg text-slate-700">
          製品の導入相談やカスタマイズ依頼など、お気軽にお問い合わせください。
        </p>
      </section>

      {/* Googleフォーム埋め込みエリア */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm min-h-[800px]">
        {/* ローディングスピナー（フォームが読み込まれるまで表示） */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-500 border-t-transparent"></div>
        </div>

        <iframe
          src={googleFormUrl}
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full"
        >
          読み込んでいます…
        </iframe>
      </div>

      {/* 補足事項 */}
      <div className="mt-8 text-center text-sm text-slate-500">
        <p>※通常、3営業日以内に担当者よりご返信いたします。</p>
        <p className="mt-2">
          お急ぎの場合は、右下のAIチャットボットもご活用ください。
        </p>
      </div>
    </div>
  );
}