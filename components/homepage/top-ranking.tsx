"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Image from "next/image";
import { Flame, Star, ShoppingCart } from "lucide-react";

// Helper function to format price
const formatPrice = (price: number, language: string) => {
  if (language === "fa") {
    return `${(price * 50000).toLocaleString('fa-IR')} تومان`;
  }
  return `$${price}`;
};

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
            <h2 className="font-title mb-2" style={{ fontSize: '28px', lineHeight: '38px', fontWeight: 800, color: '#1A1A1A' }}>
              {language === "fa" ? "محصولات پرفروش" : "Best Selling Products"}
            </h2>
            <p className="font-body" style={{ fontSize: '16px', lineHeight: '26px', color: '#444' }}>
              {language === "fa" ? "محبوب‌ترین اقلام این ماه" : "Most popular items this month"}
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
            <Flame className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {productsWithBadges.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white border border-gray-300 rounded-xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col shadow-sm w-full max-w-[234px] md:max-w-[252px] mx-auto"
              style={{ aspectRatio: '6.5/10' }}
            >
              {/* Image Container - 60% of card height with small margin */}
              <div className="relative bg-gray-50 overflow-hidden flex-shrink-0" style={{ height: '60%', padding: '2px 2px 2px 2px' }}>
                <Image
                  src={product.image}
                  alt={`${language === "fa" ? product.title : product.titleEn} - Top Ranking Product - Paradik B2B Marketplace`}
                  fill
                  className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500 rounded-lg"
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
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-card-title mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
                  {language === "fa" ? product.title : product.titleEn}
                </h4>

                {/* Price - Numbers: 18px, weight 500 */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-number" style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 500, color: '#111' }}>
                      {formatPrice(product.price, language)}
                    </span>
                  </div>
                  <p className="font-small mt-1" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                    {t("common.minimumOrder")}: {product.moq}
                  </p>
                </div>

                {/* Rating - Small: 14px, weight 500 */}
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
                  <span className="font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Supplier - Small: 14px, weight 500 */}
                <p className="font-small truncate" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
                  {product.supplierName}
                </p>
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


