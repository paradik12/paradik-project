"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Supplier } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star, Package } from "lucide-react";

const mockSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "شرکت پسته ایرانی",
    nameEn: "Iranian Nuts Company",
    logo: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 15,
    country: "Iran",
    productCount: 1250,
    responseRate: 98,
    rating: 4.8,
    mainCategories: ["Food", "Nuts"],
  },
  {
    id: "s2",
    name: "صادرات زعفران",
    nameEn: "Saffron Export",
    logo: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 12,
    country: "Iran",
    productCount: 890,
    responseRate: 95,
    rating: 4.9,
    mainCategories: ["Food", "Spices"],
  },
  {
    id: "s3",
    name: "فرش‌های دستباف ایرانی",
    nameEn: "Persian Handmade Carpets",
    logo: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 20,
    country: "Iran",
    productCount: 450,
    responseRate: 92,
    rating: 5.0,
    mainCategories: ["Home", "Carpets"],
  },
  {
    id: "s4",
    name: "مزرعه عسل",
    nameEn: "Honey Farm",
    logo: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop",
    verified: false,
    yearsActive: 8,
    country: "Iran",
    productCount: 320,
    responseRate: 88,
    rating: 4.6,
    mainCategories: ["Food", "Honey"],
  },
  {
    id: "s5",
    name: "کارگاه چرم",
    nameEn: "Leather Workshop",
    logo: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 10,
    country: "Iran",
    productCount: 680,
    responseRate: 96,
    rating: 4.7,
    mainCategories: ["Apparel", "Leather"],
  },
  {
    id: "s6",
    name: "محصولات زیبایی",
    nameEn: "Beauty Products",
    logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 6,
    country: "Iran",
    productCount: 540,
    responseRate: 94,
    rating: 4.5,
    mainCategories: ["Beauty", "Health"],
  },
];

export function FeaturedSuppliers() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="section-spacing bg-muted/30" aria-label="Featured Suppliers">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl mb-3 text-gray-900">
              {t("homepage.featuredSuppliers.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("homepage.featuredSuppliers.subtitle")}
            </p>
          </div>
          <Link href="/suppliers">
            <Button variant="outline" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all transform hover:scale-105 min-h-[48px]">
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {mockSuppliers.map((supplier) => (
            <div 
              key={supplier.id} 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h4 className="mb-1 text-gray-900 group-hover:text-[var(--color-primary)] transition-colors truncate">
                    {language === "fa" ? supplier.name : supplier.nameEn}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <span className="truncate">{supplier.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">({supplier.responseRate})</span>
                    <span className="text-sm">{supplier.rating}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-[var(--color-primary)] transition-colors">
                    <Image
                      src={supplier.logo}
                      alt={`${language === "fa" ? supplier.name : supplier.nameEn} - Verified Supplier - Paradik B2B Marketplace`}
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 80px"
                      quality={90}
                      loading="lazy"
                      title={language === "fa" ? supplier.name : supplier.nameEn}
                    />
                  </div>
                  {supplier.verified && (
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-center flex-1">
                  <p className="text-gray-900 flex items-center justify-center gap-1">
                    <Package className="w-4 h-4" />
                    {supplier.productCount}+
                  </p>
                  <p className="text-gray-500 text-sm mb-1">{t("common.products")}</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center flex-1">
                  <p className="text-gray-900">{supplier.yearsActive} {language === "fa" ? "سال" : "Years"}</p>
                  <p className="text-gray-500 text-sm mb-1">{language === "fa" ? "تجربه" : "Experience"}</p>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2.5 bg-gray-50 text-gray-900 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
                {language === "fa" ? "مشاهده تأمین‌کننده" : "View Supplier"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

