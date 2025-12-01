"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";

const mockTopRanking: Product[] = [
  {
    id: "tr1",
    title: "پسته درجه یک",
    titleEn: "Premium Pistachios",
    price: 25,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=400&h=400&fit=crop",
    moq: 100,
    sold: 1250,
    supplierId: "s1",
    supplierName: "Iranian Nuts Co.",
    verified: true,
    categoryId: "3",
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "tr2",
    title: "زعفران اصل",
    titleEn: "Authentic Saffron",
    price: 45,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=400&h=400&fit=crop",
    moq: 50,
    sold: 890,
    supplierId: "s2",
    supplierName: "Saffron Export",
    verified: true,
    categoryId: "3",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "tr3",
    title: "عسل طبیعی",
    titleEn: "Natural Honey",
    price: 18,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    moq: 24,
    sold: 670,
    supplierId: "s4",
    supplierName: "Honey Farm",
    verified: false,
    categoryId: "3",
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: "tr4",
    title: "چرم طبیعی",
    titleEn: "Natural Leather",
    price: 85,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop",
    moq: 10,
    sold: 320,
    supplierId: "s5",
    supplierName: "Leather Works",
    verified: true,
    categoryId: "2",
    rating: 4.7,
    reviewCount: 67,
  },
  {
    id: "tr5",
    title: "سرم صورت",
    titleEn: "Face Serum",
    price: 32,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    moq: 12,
    sold: 540,
    supplierId: "s6",
    supplierName: "Beauty Products",
    verified: true,
    categoryId: "7",
    rating: 4.5,
    reviewCount: 134,
  },
  {
    id: "tr6",
    title: "فرش دستباف",
    titleEn: "Handmade Carpet",
    price: 350,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop",
    moq: 1,
    sold: 45,
    supplierId: "s3",
    supplierName: "Persian Carpets",
    verified: true,
    categoryId: "6",
    rating: 5.0,
    reviewCount: 12,
  },
];

export function TopRanking() {
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();
  const isRTL = direction === "rtl";

  return (
    <section className="section-spacing bg-white" aria-label="Top Ranking Products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              {language === "fa" ? "رتبه‌بندی برتر" : "Top Ranking"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {language === "fa"
                ? "روندها را با رتبه‌بندی مبتنی بر داده دنبال کنید"
                : "Navigate trends with data-driven rankings"}
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            {t("common.viewMore")}
            <ArrowRight
              className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {mockTopRanking.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
            >
              <Card className="modern-card h-full flex flex-col overflow-hidden bg-white">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={`${language === "fa" ? product.title : product.titleEn} - Top Ranking Product - Paradik B2B Marketplace`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16.67vw"
                    quality={90}
                    loading="lazy"
                    title={language === "fa" ? product.title : product.titleEn}
                  />
                  <Badge className="absolute top-1.5 left-1.5 bg-primary text-white font-semibold px-1.5 py-0.5 text-[10px] leading-tight shadow-sm border-0">
                    TOP
                  </Badge>
                </div>
                <CardContent className="flex-1 flex flex-col p-3 space-y-1.5">
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                    {language === "fa" ? "دسته‌بندی" : "Category"}
                  </p>
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem] text-gray-900 group-hover:text-primary transition-colors">
                    {language === "fa" ? product.title : product.titleEn}
                  </h3>
                  <Badge variant="secondary" className="text-[10px] font-medium px-2 py-0.5 w-fit mt-auto bg-orange-50 text-orange-700 border-0">
                    {language === "fa" ? "فروش داغ" : "Hot selling"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


