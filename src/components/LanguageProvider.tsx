"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { Lang } from "@/lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    const initial: Lang =
      saved ?? (navigator.language.startsWith("en") ? "en" : "es");
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((l) => (l === "es" ? "en" : "es")),
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
