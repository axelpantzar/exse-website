import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sv" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx>({ lang: "sv", setLang: () => {} });

const STORAGE_KEY = "exse-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "sv" on both server and initial client render to avoid hydration mismatch.
  const [lang, setLangState] = useState<Lang>("sv");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "sv" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export type Bilingual = { sv: string; en: string };

/**
 * Translation hook. Usage:
 *   const t = useT();
 *   <h1>{t({ sv: "Hej", en: "Hello" })}</h1>
 */
export function useT() {
  const { lang } = useContext(LanguageContext);
  return (b: Bilingual) => b[lang];
}
