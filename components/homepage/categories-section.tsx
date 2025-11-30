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
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">
            {t("homepage.categories.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("homepage.categories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">
                    {language === "fa" ? category.name : category.nameEn}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.productCount}+ {t("common.products")}
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

