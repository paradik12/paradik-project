"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Image from "next/image";
import { Flame, Star, ShoppingCart } from "lucide-react";

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
  const { language } = useLanguageStore();

  // Add badges to products for Figma style
  const productsWithBadges = mockTopRanking.map((product, index) => ({
    ...product,
    badge: index === 0 ? (language === "fa" ? "رتبه 1" : "Rank 1") : 
           index === 1 ? (language === "fa" ? "رتبه 2" : "Rank 2") :
           index === 2 ? (language === "fa" ? "رتبه 3" : "Rank 3") :
           (language === "fa" ? "داغ" : "Hot"),
    badgeColor: index === 0 ? "bg-gradient-to-r from-yellow-400 to-orange-500" :
                 index === 1 ? "bg-gradient-to-r from-gray-300 to-gray-400" :
                 index === 2 ? "bg-gradient-to-r from-amber-600 to-amber-700" :
                 "bg-red-500"
  }));

  return (
    <section className="py-12 lg:py-16 bg-white" aria-label="Top Ranking Products">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 mb-8 lg:mb-12">
          <div>
            <h2 className="mb-2">
              {language === "fa" ? "محصولات پرفروش" : "Best Selling Products"}
            </h2>
            <p className="text-gray-600">
              {language === "fa" ? "محبوب‌ترین اقلام این ماه" : "Most popular items this month"}
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
            <Flame className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {productsWithBadges.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container - Figma Exact */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${language === "fa" ? product.title : product.titleEn} - Top Ranking Product - Paradik B2B Marketplace`}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={90}
                  loading="lazy"
                  title={language === "fa" ? product.title : product.titleEn}
                />
                {product.badge && (
                  <span className={`absolute top-3 right-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm shadow-lg`}>
                    {product.badge}
                  </span>
                )}
                <button className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              {/* Content - Figma Exact */}
              <div className="p-4">
                <h4 className="mb-2 text-gray-900 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors min-h-[3.5rem]">
                  {language === "fa" ? product.title : product.titleEn}
                </h4>

                {/* Price - Figma Exact */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[var(--color-primary)] text-xl">${product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("common.minimumOrder")}: {product.moq}
                  </p>
                </div>

                {/* Rating - Figma Exact */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating || 0)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Supplier - Figma Exact */}
                <p className="text-sm text-gray-500 truncate">{product.supplierName}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <button className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
            {language === "fa" ? "مشاهده محصولات بیشتر" : "View More Products"}
          </button>
        </div>
      </div>
    </section>
  );
}


