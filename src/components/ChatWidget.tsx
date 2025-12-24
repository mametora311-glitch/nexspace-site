// src/components/ChatWidget.tsx
"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function formatContent(content: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = content.split(linkRegex);
  if (parts.length === 1) return content;

  const result = [];
  for (let i = 0; i < parts.length; i += 3) {
    result.push(parts[i]);
    if (parts[i + 1]) {
      result.push(
        <a
          key={i}
          href={parts[i + 2]}
          className="mx-1 font-bold text-sky-400 underline decoration-sky-400/30 hover:text-white"
        >
          {parts[i + 1]}
        </a>
      );
    }
  }
  return result;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "NEXSPACE インテリジェント・アシスタントへようこそ。どのようなお手伝いが必要ですか？",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 【自動スクロール】メッセージ追加時に最下部へ
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "申し訳ありません。現在接続が不安定です。時間をおいて再度お試しください。" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* フローティングボタン：最新AIを象徴する「スパークル」デザイン */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl transition-all hover:scale-110 hover:bg-sky-600 active:scale-95 group"
        aria-label="アシスタントと対話する"
      >
        {/* 背後のパルス（脈動） */}
        <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-pulse group-hover:bg-sky-400/30"></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // ↓ animate-spin を「低速」で適用。hoverでさらに「ガッチガチ」に回る演出
          className={`h-6 w-6 transition-all duration-700 ${open
              ? "rotate-90 text-white"
              : "text-sky-400 animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]"
            }`}
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-[90vw] sm:w-[440px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/98 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-sky-500"></div>
              <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                NEXPACE Intelligent Assistant
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-400 transition-colors hover:text-white"
            >
              ✕
            </button>
          </div>

          <div
            ref={scrollRef}
            className="max-h-[500px] min-h-[350px] space-y-6 overflow-y-auto px-6 py-6 text-[14px] leading-relaxed"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-3 ${m.role === "user"
                    ? "bg-sky-600 text-white rounded-tr-none"
                    : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50"
                  }`}>
                  <div className="whitespace-pre-wrap">{formatContent(m.content)}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 bg-slate-800/50 px-4 py-3 rounded-2xl rounded-tl-none">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.3s]"></div>
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.15s]"></div>
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500"></div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-700 bg-slate-900 p-4">
            <div className="flex items-center gap-2 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 px-2 py-1 focus-within:ring-1 focus-within:ring-sky-500/50 transition-all">
              <input
                className="flex-1 bg-transparent px-3 py-2 text-[13px] text-slate-100 outline-none placeholder:text-slate-600"
                placeholder="AxisOSについて質問する..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white transition-all hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}