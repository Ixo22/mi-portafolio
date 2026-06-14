"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/content";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLanguage();
  const langs: Lang[] = ["es", "en"];

  return (
    <div
      className={`inline-flex items-center border border-line text-xs font-mono ${className}`}
      role="group"
      aria-label="Language"
    >
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 uppercase transition-colors ${
            lang === l
              ? "bg-[#e8e4dd] text-[#0c0b0a]"
              : "text-muted hover:text-[#e8e4dd]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
