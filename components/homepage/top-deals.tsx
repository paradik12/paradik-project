"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { useRef } from "react";

const mockTopDeals: Product[] = [
  {
    id: "td1",
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
    id: "td2",
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
    id: "td3",
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
    id: "td4",
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
    id: "td5",
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
    id: "td6",
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

export function TopDeals() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50" aria-label="Top Deals">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-gray-300 rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-gray-300 rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div>
            <h2 className="font-title mb-2" style={{ fontSize: '28px', lineHeight: '38px', fontWeight: 800, color: '#1A1A1A' }}>
              {language === "fa" ? "پیشنهادهای ویژه امروز" : "Today's Special Offers"}
            </h2>
            <p className="font-body" style={{ fontSize: '16px', lineHeight: '26px', color: '#444' }}>
              {language === "fa" ? "پیشنهادهای محدود روی محصولات پرفروش" : "Limited offers on best-selling products"}
            </p>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockTopDeals.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex-none w-[260px] md:w-[280px] snap-start group bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-xl hover:scale-105 transition-all duration-250"
            >
              {/* Image Container - Lovable Design */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden rounded-lg mb-3">
                <Image
                  src={product.image}
                  alt={`${language === "fa" ? product.title : product.titleEn} - Flash Deal - Paradik B2B Marketplace`}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-250"
                  sizes="(max-width: 640px) 260px, 280px"
                  quality={90}
                  loading="lazy"
                  title={language === "fa" ? product.title : product.titleEn}
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded text-[12px] font-medium">
                  {language === "fa" ? "فوری" : "Flash Deal"}
                </span>
                {product.price > 20 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-[12px] font-medium">
                    {Math.round((1 - product.price / (product.price * 1.2)) * 100)}%
                  </span>
                )}
              </div>

              {/* Content - Lovable Design */}
              <div className="space-y-2">
                {/* Product Title - H3: 20px, weight 600 */}
                <h3 className="font-card-title mt-3 line-clamp-2" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
                  {language === "fa" ? product.title : product.titleEn}
                </h3>

                {/* Short Description - Small: 14px, weight 500 */}
                <p className="font-small mb-1.5 line-clamp-1" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                  {language === "fa" ? "پیشنهاد ویژه" : "Special offer"}
                </p>

                {/* Price Section - Numbers: 18px, weight 500 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-number" style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 500, color: '#111' }}>
                      ${product.price}
                    </span>
                    {product.price > 20 && (
                      <span className="font-small line-through" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                        ${(product.price * 1.2).toFixed(0)}
                      </span>
                    )}
                    <span className="font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                      / {language === "fa" ? "واحد" : "unit"}
                    </span>
                  </div>
                </div>

                {/* Minimum Order - Small: 14px, weight 500 */}
                <div className="bg-gray-100 rounded-lg py-2 px-3">
                  <p className="font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                    {t("common.minimumOrder")}: {product.moq} {language === "fa" ? "واحد" : "unit"}
                  </p>
                </div>

                {/* Vendor/Brand - Small: 14px, weight 500 */}
                <div className="flex items-center gap-1">
                  <p className="font-small truncate" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
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

        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
            {language === "fa" ? "مشاهده همه پیشنهادها" : "View All Deals"}
          </button>
        </div>
      </div>
    </section>
  );
}


