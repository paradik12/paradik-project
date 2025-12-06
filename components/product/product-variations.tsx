"use client";

import { useState } from "react";
import { useLanguageStore } from "@/store/language-store";
import type { ProductVariation } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductVariationsProps {
  variations: ProductVariation[];
  onVariationChange?: (variationName: string, optionValue: string) => void;
}

export function ProductVariations({ variations, onVariationChange }: ProductVariationsProps) {
  const { language } = useLanguageStore();
  const isRTL = language === "fa";

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    variations.forEach((variation) => {
      const selected = variation.options.find((opt) => opt.selected);
      if (selected) {
        initial[variation.name] = selected.value;
      } else if (variation.options.length > 0) {
        initial[variation.name] = variation.options[0].value;
      }
    });
    return initial;
  });

  const handleOptionSelect = (variationName: string, optionValue: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [variationName]: optionValue,
    }));
    onVariationChange?.(variationName, optionValue);
  };

  return (
    <div className="space-y-4" dir={isRTL ? "rtl" : "ltr"}>
      {variations.map((variation) => (
        <div key={variation.name} className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            {language === "fa" ? variation.name : variation.nameEn}:
          </label>
          <div className="flex flex-wrap gap-2">
            {variation.options.map((option) => {
              const isSelected = selectedOptions[variation.name] === option.value;
              return (
                <Button
                  key={option.value}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleOptionSelect(variation.name, option.value)}
                  className={cn(
                    "min-w-[100px]",
                    isSelected
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                      : "border-gray-300 hover:border-[var(--color-primary)]"
                  )}
                >
                  {language === "fa" ? option.value : option.valueEn}
                </Button>
              );
            })}
          </div>
        </div>
      ))}
      <button className="text-sm text-[var(--color-primary)] hover:underline">
        {language === "fa" ? "ویرایش انتخاب‌ها" : "Edit selections"}
      </button>
    </div>
  );
}



