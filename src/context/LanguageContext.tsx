// context/LanguageContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "lv" | "en" | "ru" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("lv");

  // Initialize language from localStorage or browser settings
  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language | null;

    if (storedLang) {
      setLanguageState(storedLang);
    } else {
      // Get browser language and match to supported languages if possible
      const browserLang = navigator.language.split("-")[0];
      if (["lv", "en", "ru", "de"].includes(browserLang)) {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);

  const setLanguage = (lang: string) => {
    const newLang = lang as Language;
    setLanguageState(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
