"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type Language = "az" | "ru" | "en";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("az");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang: Language) => {
    localStorage.setItem("app-lang", newLang);
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
