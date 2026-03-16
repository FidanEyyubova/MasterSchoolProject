"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
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
  };

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      disableRipple // Klik zamanı yaranan effekti söndürür
      className="focus:outline-none focus:ring-0" // Fokus haşiyəsini ləğv edir
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}