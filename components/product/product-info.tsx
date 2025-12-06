"use client";

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const isRTL = language === "fa";

  return (
    <div className="space-y-4" dir={isRTL ? "rtl" : "ltr"}>
      {/* Breadcrumb will be handled by parent */}
      
      {/* Product Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
        {language === "fa" ? product.title : product.titleEn}
      </h1>

      {/* Rating and Reviews */}
      {product.rating && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < Math.floor(product.rating || 0)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>
          {product.reviewCount && (
            <span className="text-sm text-gray-600">
              {language === "fa" 
                ? `(${product.reviewCount.toLocaleString('fa-IR')} ${t("common.reviews") || "نظرات"})`
                : `(${product.reviewCount.toLocaleString()} reviews)`
              }
            </span>
          )}
          {!product.reviewCount && (
            <span className="text-sm text-gray-600">
              {language === "fa" ? "هنوز نظری ثبت نشده" : "No reviews yet"}
            </span>
          )}
        </div>
      )}

      {/* Supplier Information */}
      <div className="flex items-center gap-3 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            {language === "fa" ? product.supplierNameFa || product.supplierName : product.supplierName}
          </span>
          {product.verified && (
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
          )}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>IR</span>
        </div>
      </div>

      {/* Short Description */}
      {(product.shortDescription || product.description) && (
        <div className="py-3">
          <p className="text-gray-700 leading-relaxed">
            {language === "fa" 
              ? (product.shortDescription || product.description)
              : (product.shortDescriptionEn || product.description)
            }
          </p>
        </div>
      )}

      {/* Sold Count */}
      {product.sold > 0 && (
        <div className="text-sm text-gray-600">
          {language === "fa"
            ? `${product.sold.toLocaleString('fa-IR')} ${t("common.orders") || "سفارش"}`
            : `${product.sold.toLocaleString()} orders`
          }
        </div>
      )}
    </div>
  );
}



