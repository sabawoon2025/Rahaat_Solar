import { createContext, useContext, useEffect, useMemo, useState } from "react";
import ps from "../data/translations/ps";
import fa from "../data/translations/fa";
import en from "../data/translations/en";

const dictionaries = { ps, fa, en };

const STORAGE_KEY = "rahat-solar-language";
const DEFAULT_LANGUAGE = "ps";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && dictionaries[stored] ? stored : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const t = dictionaries[language];

  // Control direction and lang at the document level, once, whenever the
  // language changes — never on a per-element basis.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.documentElement.dir = t.dir;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language, t]);

  const setLanguage = (lang) => {
    if (dictionaries[lang]) setLanguageState(lang);
  };

  const value = useMemo(
    () => ({ language, setLanguage, t, dir: t.dir, availableLanguages: Object.keys(dictionaries) }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
