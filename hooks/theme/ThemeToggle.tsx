"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { logoDark, logoLight } from "@/constants/data";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = !isDark;
    if (newTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newTheme);

    window.dispatchEvent(new Event("themeChanged"));
  };

  return {
    isDark,
    toggleTheme,
    logo: isDark ? logoLight : logoDark,
  };
};

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button isIconOnly variant="light" onClick={toggleTheme}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
