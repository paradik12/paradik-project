"use client";

import { useLanguageStore } from "@/store/language-store";
import type { Product, ProductPricingTier } from "@/types";
import { cn } from "@/lib/utils";

interface ProductPricingProps {
  product: Product;
  pricingTiers?: ProductPricingTier[];
}

export function ProductPricing({ product, pricingTiers }: ProductPricingProps) {
  const { language } = useLanguageStore();
  const isRTL = language === "fa";

  // Format price helper
  const formatPrice = (price: number, currency: string) => {
    if (language === "fa") {
      return `${(price * 50000).toLocaleString('fa-IR')} تومان`;
    }
    return `${currency} ${price.toLocaleString()}`;
  };

  // Default pricing tiers if not provided
  const tiers = pricingTiers || [
    { min: 1, max: 10, price: product.price },
    { min: 11, max: 100, price: product.price * 0.8 },
    { min: 101, price: product.price * 0.7 },
  ];

  return (
    <div className="space-y-3" dir={isRTL ? "rtl" : "ltr"}>
      <h3 className="text-lg font-semibold text-gray-900">
        {language === "fa" ? "قیمت" : "Price"}
      </h3>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                {language === "fa" ? "تعداد" : "Quantity"}
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                {language === "fa" ? "قیمت واحد" : "Unit Price"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr
                key={index}
                className={cn(
                  "border-t border-gray-200",
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                )}
              >
                <td className="px-4 py-3 text-sm text-gray-700">
                  {tier.max
                    ? `${tier.min}-${tier.max}`
                    : `≥${tier.min}`}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                  {formatPrice(tier.price, product.currency)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



