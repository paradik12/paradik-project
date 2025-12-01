"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

const mockProducts: Product[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
  {
    id: "4",
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
    id: "5",
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
    id: "6",
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
];

export function FeaturedProducts() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="section-spacing bg-white" aria-label="Featured Products">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl mb-3 text-gray-900">
              {t("homepage.featuredProducts.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t("homepage.featuredProducts.subtitle")}
            </p>
          </div>
          <Link href="/products" className="focus-modern">
            <Button 
              variant="outline" 
              className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all transform hover:scale-105 min-h-[48px]"
            >
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        {/* Product Grid - Lovable Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group w-full max-w-[260px] md:max-w-[280px] bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-xl hover:scale-105 transition-all duration-250"
            >
              {/* Image Container - Lovable Design */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden rounded-lg mb-3">
                <Image
                  src={product.image}
                  alt={`${language === "fa" ? product.title : product.titleEn} - ${t("common.products")} - Paradik B2B Marketplace`}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-250"
                  sizes="(max-width: 640px) 260px, 280px"
                  quality={90}
                  loading="lazy"
                  title={language === "fa" ? product.title : product.titleEn}
                />
                {product.verified && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-0.5 rounded text-[12px] font-medium">
                    {t("common.verified")}
                  </span>
                )}
              </div>

              {/* Content - Lovable Design */}
              <div className="space-y-2">
                {/* Product Title - 18px/20px semibold */}
                <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 leading-snug mt-3 line-clamp-2">
                  {language === "fa" ? product.title : product.titleEn}
                </h3>

                {/* Short Description - 14px medium gray-600 */}
                <p className="text-[14px] font-medium text-gray-600 leading-relaxed mb-1.5 line-clamp-1">
                  {language === "fa" ? "محصول با کیفیت بالا" : "High quality product"}
                </p>

                {/* Price Section - 20px bold gray-900 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[20px] font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-[14px] font-normal text-gray-500">
                      / {language === "fa" ? "واحد" : "unit"}
                    </span>
                  </div>
                </div>

                {/* Minimum Order - bg-gray-100 rounded-lg py-2 px-3 */}
                <div className="bg-gray-100 rounded-lg py-2 px-3">
                  <p className="text-[13px] text-gray-700">
                    {t("common.minimumOrder")}: {product.moq} {language === "fa" ? "واحد" : "unit"}
                  </p>
                </div>

                {/* Vendor/Brand - 13px blue-600 */}
                <div className="flex items-center gap-1">
                  <p className="text-[13px] font-medium text-blue-600 truncate">
                    {product.supplierName}
                  </p>
                  {product.verified && (
                    <span className="text-blue-600 text-[12px]">✓</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

