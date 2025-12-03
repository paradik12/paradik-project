"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: { min: number; max: number };
  moq: number;
  verifiedOnly: boolean;
  goldSupplier: boolean;
}

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
}

const categories = [
  { id: "all", name: "همه دسته‌بندی‌ها", nameEn: "All Categories" },
  { id: "electronics", name: "الکترونیک", nameEn: "Electronics" },
  { id: "apparel", name: "پوشاک", nameEn: "Apparel" },
  { id: "food", name: "مواد غذایی", nameEn: "Food & Beverage" },
  { id: "machinery", name: "ماشین‌آلات", nameEn: "Machinery" },
  { id: "chemicals", name: "مواد شیمیایی", nameEn: "Chemicals" },
  { id: "construction", name: "ساختمان", nameEn: "Construction" },
  { id: "beauty", name: "بهداشت و زیبایی", nameEn: "Beauty & Health" },
];

const brands = [
  { id: "brand1", name: "برند 1", nameEn: "Brand 1" },
  { id: "brand2", name: "برند 2", nameEn: "Brand 2" },
  { id: "brand3", name: "برند 3", nameEn: "Brand 3" },
];

export function Filters({ filters, onFiltersChange, className }: FiltersProps) {
  const { language } = useLanguageStore();
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = localFilters.categories.includes(categoryId)
      ? localFilters.categories.filter((id) => id !== categoryId)
      : [...localFilters.categories, categoryId];
    
    const updatedFilters = { ...localFilters, categories: newCategories };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleBrandToggle = (brandId: string) => {
    const newBrands = localFilters.brands.includes(brandId)
      ? localFilters.brands.filter((id) => id !== brandId)
      : [...localFilters.brands, brandId];
    
    const updatedFilters = { ...localFilters, brands: newBrands };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const numValue = value === "" ? 0 : parseInt(value, 10);
    const updatedFilters = {
      ...localFilters,
      priceRange: {
        ...localFilters.priceRange,
        [field]: numValue,
      },
    };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleMOQChange = (value: string) => {
    const numValue = value === "" ? 0 : parseInt(value, 10);
    const updatedFilters = { ...localFilters, moq: numValue };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleToggle = (field: "verifiedOnly" | "goldSupplier") => {
    const updatedFilters = {
      ...localFilters,
      [field]: !localFilters[field],
    };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      brands: [],
      priceRange: { min: 0, max: 0 },
      moq: 0,
      verifiedOnly: false,
      goldSupplier: false,
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg" style={{ fontSize: '18px', fontWeight: 600 }}>
          {language === "fa" ? "فیلترها" : "Filters"}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          {language === "fa" ? "پاک کردن همه" : "Clear All"}
        </Button>
      </div>

      <Accordion>
        {/* Categories */}
        <AccordionItem
          title={language === "fa" ? "دسته‌بندی‌ها" : "Categories"}
          defaultOpen={true}
        >
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={localFilters.categories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="w-4 h-4 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)]"
                />
                <span className="text-sm">
                  {language === "fa" ? category.name : category.nameEn}
                </span>
              </label>
            ))}
          </div>
        </AccordionItem>

        {/* Brands */}
        <AccordionItem
          title={language === "fa" ? "برند" : "Brand"}
          defaultOpen={false}
        >
          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand.id}
                className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={localFilters.brands.includes(brand.id)}
                  onChange={() => handleBrandToggle(brand.id)}
                  className="w-4 h-4 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)]"
                />
                <span className="text-sm">
                  {language === "fa" ? brand.name : brand.nameEn}
                </span>
              </label>
            ))}
          </div>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem
          title={language === "fa" ? "محدوده قیمت" : "Price Range"}
          defaultOpen={false}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder={language === "fa" ? "حداقل" : "Min"}
                value={localFilters.priceRange.min || ""}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="flex-1"
              />
              <span className="text-gray-500">-</span>
              <Input
                type="number"
                placeholder={language === "fa" ? "حداکثر" : "Max"}
                value={localFilters.priceRange.max || ""}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="flex-1"
              />
            </div>
            <Button
              size="sm"
              className="w-full"
              onClick={() => onFiltersChange(localFilters)}
            >
              {language === "fa" ? "اعمال" : "Apply"}
            </Button>
          </div>
        </AccordionItem>

        {/* Minimum Order Quantity */}
        <AccordionItem
          title={language === "fa" ? "حداقل سفارش (MOQ)" : "Min. Order (MOQ)"}
          defaultOpen={false}
        >
          <div className="space-y-3">
            <Input
              type="number"
              placeholder={language === "fa" ? "حداقل تعداد" : "Min. Quantity"}
              value={localFilters.moq || ""}
              onChange={(e) => handleMOQChange(e.target.value)}
            />
            <Button
              size="sm"
              className="w-full"
              onClick={() => onFiltersChange(localFilters)}
            >
              {language === "fa" ? "اعمال" : "Apply"}
            </Button>
          </div>
        </AccordionItem>

        {/* Verified Suppliers */}
        <AccordionItem
          title={language === "fa" ? "تأمین‌کننده تأیید شده" : "Verified Supplier"}
          defaultOpen={false}
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={localFilters.verifiedOnly}
              onChange={() => handleToggle("verifiedOnly")}
              className="w-4 h-4 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)]"
            />
            <span className="text-sm">
              {language === "fa" ? "فقط تأمین‌کنندگان تأیید شده" : "Verified Suppliers Only"}
            </span>
          </label>
        </AccordionItem>

        {/* Gold Supplier */}
        <AccordionItem
          title={language === "fa" ? "تأمین‌کننده طلایی" : "Gold Supplier"}
          defaultOpen={false}
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={localFilters.goldSupplier}
              onChange={() => handleToggle("goldSupplier")}
              className="w-4 h-4 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)]"
            />
            <span className="text-sm">
              {language === "fa" ? "تأمین‌کنندگان طلایی" : "Gold Suppliers"}
            </span>
          </label>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
