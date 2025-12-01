"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Category } from "@/types";
import Link from "next/link";
import {
  Cpu,
  Hammer,
  Shirt,
  Zap,
  Home,
  Truck,
  Sparkles,
  Package,
} from "lucide-react";

const mockCategories: (Category & { icon: any; color: string })[] = [
  {
    id: "1",
    name: "الکترونیک",
    nameEn: "Electronics",
    slug: "electronics",
    icon: Cpu,
    color: "bg-blue-50 text-blue-600",
    productCount: 125430,
  },
  {
    id: "2",
    name: "ماشین‌آلات",
    nameEn: "Machinery",
    slug: "machinery",
    icon: Hammer,
    color: "bg-orange-50 text-orange-600",
    productCount: 89240,
  },
  {
    id: "3",
    name: "پوشاک و منسوجات",
    nameEn: "Apparel & Textiles",
    slug: "apparel",
    icon: Shirt,
    color: "bg-purple-50 text-purple-600",
    productCount: 234120,
  },
  {
    id: "4",
    name: "تجهیزات الکتریکی",
    nameEn: "Electrical Equipment",
    slug: "electrical",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    productCount: 67890,
  },
  {
    id: "5",
    name: "خانه و باغ",
    nameEn: "Home & Garden",
    slug: "home",
    icon: Home,
    color: "bg-green-50 text-green-600",
    productCount: 156780,
  },
  {
    id: "6",
    name: "حمل و نقل",
    nameEn: "Transportation",
    slug: "transportation",
    icon: Truck,
    color: "bg-red-50 text-red-600",
    productCount: 45230,
  },
  {
    id: "7",
    name: "زیبایی و مراقبت",
    nameEn: "Beauty & Personal Care",
    slug: "beauty",
    icon: Sparkles,
    color: "bg-pink-50 text-pink-600",
    productCount: 98450,
  },
  {
    id: "8",
    name: "بسته‌بندی",
    nameEn: "Packaging & Printing",
    slug: "packaging",
    icon: Package,
    color: "bg-indigo-50 text-indigo-600",
    productCount: 78340,
  },
];

export function CategoriesSection() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white" aria-label="Product Categories">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-neutral-900 mb-2">
              {t("homepage.categories.title")}
            </h2>
            <p className="text-neutral-600">
              {t("homepage.categories.subtitle")}
            </p>
          </div>
          <button className="hidden md:block text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
            {language === "fa" ? "مشاهده همه →" : "View All →"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {mockCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-xl hover:border-[var(--color-primary)] transition-all duration-300 text-center"
                aria-label={`Browse ${language === "fa" ? category.name : category.nameEn} products`}
              >
                <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-neutral-900 mb-1 text-sm md:text-base">
                  {language === "fa" ? category.name : category.nameEn}
                </h4>
                <p className="text-neutral-500 text-xs md:text-sm">
                  {category.productCount?.toLocaleString() || 0} {t("common.products")}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
            {language === "fa" ? "مشاهده همه دسته‌بندی‌ها →" : "View All Categories →"}
          </button>
        </div>
      </div>
    </section>
  );
}

