"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Helper function to format price
const formatPrice = (price: number, currency: string, language: string) => {
  if (language === "fa") {
    return `${(price * 50000).toLocaleString('fa-IR')} تومان`;
  }
  return `${currency} ${price.toLocaleString()}`;
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <Link href={`/products/${product.id}`}>
      <div 
        className={cn(
          "group bg-white border border-gray-300 rounded-xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col shadow-sm w-full cursor-pointer",
          className
        )}
      >
        {/* Image Container */}
        <div className="relative bg-gray-50 overflow-hidden flex-shrink-0" style={{ aspectRatio: '4/3', padding: '8px' }}>
          <Image
            src={product.image}
            alt={`${language === "fa" ? product.title : product.titleEn} - Paradik B2B Marketplace`}
            fill
            className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500 rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={90}
            loading="lazy"
            title={language === "fa" ? product.title : product.titleEn}
          />
          <button 
            className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white z-10"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to cart functionality
            }}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col space-y-2">
          {/* Product Title - 2 lines with ellipsis */}
          <h4 
            className="font-card-title line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors min-h-[48px]" 
            style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: '#222' }}
          >
            {language === "fa" ? product.title : product.titleEn}
          </h4>

          {/* Price */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-number" style={{ fontSize: '18px', lineHeight: '22px', fontWeight: 600, color: '#1A1A1A' }}>
                {formatPrice(product.price, product.currency, language)}
              </span>
            </div>
          </div>

          {/* MOQ and Country */}
          <div className="flex items-center justify-between text-sm">
            <p className="font-small" style={{ fontSize: '14px', lineHeight: '18px', fontWeight: 500, color: '#666' }}>
              {t("common.minimumOrder")}: {product.moq}
            </p>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="font-small text-gray-600">IR</span>
            </div>
          </div>

          {/* Rating (if available) */}
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-number text-sm" style={{ fontSize: '14px', fontWeight: 500, color: '#666' }}>
                {product.rating}
              </span>
              {product.reviewCount && (
                <span className="font-small text-gray-500" style={{ fontSize: '12px' }}>
                  ({product.reviewCount})
                </span>
              )}
            </div>
          )}

          {/* Supplier Name */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <span className="font-small truncate flex-1" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 500, color: '#666' }}>
              {product.supplierName}
            </span>
            {product.verified && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                {language === "fa" ? "تأیید شده" : "Verified"}
              </span>
            )}
          </div>

          {/* Contact Button */}
          <Button 
            className="w-full mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-semibold"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Handle contact/RFQ
            }}
          >
            {language === "fa" ? "تماس با تأمین‌کننده" : "Contact Supplier"}
          </Button>
        </div>
      </div>
    </Link>
  );
}
