"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import { cn } from "@/lib/utils";

export type SortOption = "relevance" | "newest" | "lowest-price" | "highest-price" | "popular";

interface SortBarProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalResults: number;
  className?: string;
}

export function SortBar({ sortBy, onSortChange, totalResults, className }: SortBarProps) {
  const { language, direction } = useLanguageStore();
  const { t } = useTranslation();
  const isRTL = direction === "rtl";

  const sortOptions: { value: SortOption; label: string; labelEn: string }[] = [
    { value: "relevance", label: "مرتبط‌ترین", labelEn: "Relevance" },
    { value: "newest", label: "جدیدترین", labelEn: "Newest" },
    { value: "lowest-price", label: "پایین‌ترین قیمت", labelEn: "Lowest Price" },
    { value: "highest-price", label: "بالاترین قیمت", labelEn: "Highest Price" },
    { value: "popular", label: "محبوب‌ترین", labelEn: "Popular" },
  ];

  return (
    <div className={cn("flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-200", className)}>
      {/* Results Count - Left in RTL */}
      <div className="text-sm text-gray-600 order-2 sm:order-1">
        {language === "fa" 
          ? `نمایش ${totalResults.toLocaleString('fa-IR')} محصول از تأمین‌کنندگان جهانی`
          : `Showing ${totalResults.toLocaleString()} products from global suppliers`
        }
      </div>

      {/* Sort Options - Right in RTL */}
      <div className="flex items-center gap-2 flex-wrap order-1 sm:order-2">
        <span className="text-sm text-gray-600">
          {language === "fa" ? "مرتب‌سازی بر اساس:" : "Sort by:"}
        </span>
        <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                sortBy === option.value
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {language === "fa" ? option.label : option.labelEn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
