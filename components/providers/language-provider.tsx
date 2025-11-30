"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/store/language-store";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, direction } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize language from localStorage or default to Farsi
    const savedLanguage = localStorage.getItem("language") as "fa" | "en" | null;
    if (savedLanguage && (savedLanguage === "fa" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    } else {
      setLanguage("fa");
    }
  }, [setLanguage]);

  useEffect(() => {
    // Update document attributes when language changes
    if (typeof document !== "undefined" && mounted) {
      const html = document.documentElement;
      html.lang = language;
      html.dir = direction;
      html.setAttribute("dir", direction);
      localStorage.setItem("language", language);
    }
  }, [language, direction, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

