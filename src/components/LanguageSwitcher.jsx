import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, switchLang } = useLanguage();

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      <button
        onClick={() => lang !== "de" && switchLang()}
        className={`px-2 py-1 text-xs font-semibold tracking-wide rounded transition-colors ${
          lang === "de"
            ? "text-gold cursor-default"
            : "text-charcoal/50 hover:text-gold"
        }`}
        aria-current={lang === "de"}
      >
        DE
      </button>
      <span className="text-charcoal/20 text-xs">|</span>
      <button
        onClick={() => lang !== "en" && switchLang()}
        className={`px-2 py-1 text-xs font-semibold tracking-wide rounded transition-colors ${
          lang === "en"
            ? "text-gold cursor-default"
            : "text-charcoal/50 hover:text-gold"
        }`}
        aria-current={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}