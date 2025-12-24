// src/components/LanguageSwitcher.tsx
"use client";

import { useEffect, useRef } from "react";

export function LanguageSwitcher() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'ja',
        includedLanguages: 'ja,en,zh-CN,ko,es,pt',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element_real');
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).google?.translate) {
      (window as any).googleTranslateElementInit();
    }
  }, []);

  return (
    <div className="flex items-center" ref={containerRef}>
      <div dangerouslySetInnerHTML={{ __html: `
        <div class="ns-lang-wrapper">
          <span class="ns-lang-icon">🌐</span>
          <span class="ns-lang-label">Language</span> <div id="google_translate_element_real"></div>
        </div>
        <style>
          .ns-lang-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: #ffffff;
            border: 2px solid #0ea5e9;
            border-radius: 9999px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s;
            position: relative;
          }
          .ns-lang-wrapper:hover {
            background: #f0f9ff;
            border-color: #0284c7;
          }
          .ns-lang-icon { font-size: 18px; }
          .ns-lang-label {
            font-size: 11px;
            font-weight: 900;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          #google_translate_element_real {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.01;
            overflow: hidden;
          }
          .goog-te-gadget-simple {
            width: 100% !important;
            height: 100% !important;
            border: none !important;
            background: transparent !important;
            cursor: pointer !important;
          }
          .goog-te-banner-frame, .skiptranslate > iframe {
            display: none !important;
            visibility: hidden !important;
          }
          body { top: 0 !important; }
          .goog-te-menu-frame {
            z-index: 2147483647 !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2) !important;
          }
        </style>
      `}} />
    </div>
  );
}