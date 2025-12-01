"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/language-store";
import type { Category } from "@/types";
import Link from "next/link";
import Image from "next/image";

const mockCategories: Category[] = [
  {
    id: "1",
    name: "الکترونیک",
    nameEn: "Electronics",
    slug: "electronics",
    icon: "📱",
    productCount: 1250,
  },
  {
    id: "2",
    name: "پوشاک",
    nameEn: "Apparel",
    slug: "apparel",
    icon: "👕",
    productCount: 890,
  },
  {
    id: "3",
    name: "مواد غذایی",
    nameEn: "Food & Beverage",
    slug: "food",
    icon: "🍎",
    productCount: 650,
  },
  {
    id: "4",
    name: "ماشین‌آلات",
    nameEn: "Machinery",
    slug: "machinery",
    icon: "⚙️",
    productCount: 420,
  },
  {
    id: "5",
    name: "مواد شیمیایی",
    nameEn: "Chemicals",
    slug: "chemicals",
    icon: "🧪",
    productCount: 380,
  },
  {
    id: "6",
    name: "ساختمان",
    nameEn: "Construction",
    slug: "construction",
    icon: "🏗️",
    productCount: 720,
  },
  {
    id: "7",
    name: "بهداشت و زیبایی",
    nameEn: "Beauty & Health",
    slug: "beauty",
    icon: "💄",
    productCount: 540,
  },
  {
    id: "8",
    name: "ورزشی",
    nameEn: "Sports",
    slug: "sports",
    icon: "⚽",
    productCount: 310,
  },
];

export function CategoriesSection() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30" aria-label="Product Categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold lg:text-4xl mb-3 text-gray-900">
            {t("homepage.categories.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("homepage.categories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group focus-modern"
              aria-label={`Browse ${language === "fa" ? category.name : category.nameEn} products`}
            >
              <Card className="modern-card h-full text-center">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <div className="w-14 h-14 lg:w-20 lg:h-20 mx-auto mb-2 bg-primary/5 backdrop-blur rounded-2xl flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl lg:text-4xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-base leading-tight text-gray-900 group-hover:text-primary transition-colors">
                    {language === "fa" ? category.name : category.nameEn}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    {category.productCount?.toLocaleString() || 0}+ {t("common.products")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

