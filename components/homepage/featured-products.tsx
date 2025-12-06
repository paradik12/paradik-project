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

// Helper function to format price
const formatPrice = (price: number, language: string) => {
  if (language === "fa") {
    return `${(price * 50000).toLocaleString('fa-IR')} تومان`;
  }
  return `$${price}`;
};

const mockProducts: Product[] = [
  {
    id: "1",
    title: "پسته درجه یک",
    titleEn: "Premium Pistachios",
    price: 25,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1586076421003-69cc3ae32d0d?w=800&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1587047006747-5e68712c7d5a?w=800&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=800&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop&q=80",
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
            <h2 className="font-title mb-3" style={{ fontSize: '28px', lineHeight: '38px', fontWeight: 800, color: '#1A1A1A' }}>
              {t("homepage.featuredProducts.title")}
            </h2>
            <p className="font-body max-w-2xl" style={{ fontSize: '16px', lineHeight: '26px', color: '#444' }}>
              {t("homepage.featuredProducts.subtitle")}
            </p>
          </div>
          <Link href="/products?type=featured" className="focus-modern">
            <Button 
              variant="outline" 
              className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all transform hover:scale-105 min-h-[48px]"
            >
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        {/* Product Grid - Lovable Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-1 md:gap-x-2 gap-y-2 md:gap-y-3">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white border border-gray-300 rounded-xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col shadow-sm w-full"
              style={{ aspectRatio: '6.5/10' }}
            >
              {/* Image Container - 60% of card height with small margin */}
              <div className="relative bg-gray-50 overflow-hidden flex-shrink-0" style={{ height: '60%', padding: '2px 2px 2px 2px' }}>
                <Image
                  src={product.image}
                  alt={`${language === "fa" ? product.title : product.titleEn} - ${t("common.products")} - Paradik B2B Marketplace`}
                  fill
                  className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500 rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  quality={90}
                  loading="lazy"
                  title={language === "fa" ? product.title : product.titleEn}
                />
                {product.verified && (
                  <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                    {t("common.verified")}
                  </span>
                )}
                <button className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              {/* Content - Figma Exact */}
              <div className="p-3 md:p-4 flex-1 flex flex-col space-y-1">
                <h4 className="font-card-title line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontSize: '20px', lineHeight: '24px', fontWeight: 600, color: '#222' }}>
                  {language === "fa" ? product.title : product.titleEn}
                </h4>

                {/* Price - Numbers: 18px, weight 500 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-number" style={{ fontSize: '18px', lineHeight: '22px', fontWeight: 500, color: '#111' }}>
                      {formatPrice(product.price, language)}
                    </span>
                  </div>
                  <p className="font-small" style={{ fontSize: '14px', lineHeight: '18px', fontWeight: 500, color: '#666' }}>
                    {t("common.minimumOrder")}: {product.moq}
                  </p>
                </div>

                {/* Supplier - Small: 14px, weight 500 */}
                <p className="font-small truncate" style={{ fontSize: '14px', lineHeight: '18px', fontWeight: 500, color: '#666' }}>
                  {product.supplierName}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

