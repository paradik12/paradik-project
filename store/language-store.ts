import { create } from "zustand";
import type { Language, Direction } from "@/types";

interface LanguageState {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "fa",
  direction: "rtl",
  setLanguage: (lang: Language) => {
    set({
      language: lang,
      direction: lang === "fa" ? "rtl" : "ltr",
    });
    // Update document direction
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  },
}));

