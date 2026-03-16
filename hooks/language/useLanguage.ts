"use client"
import { useState, useEffect } from "react";

export type Language = "az" | "ru" | "en";

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>("az");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang: Language) => {
    localStorage.setItem("app-lang", newLang);
    setLang(newLang);
    window.location.reload();
  };

  return { lang, changeLanguage };
};
