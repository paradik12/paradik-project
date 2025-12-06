"use client";

import { useLanguageStore } from "@/store/language-store";
import type { ProductShipping } from "@/types";
import { Truck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductShippingProps {
  shipping: ProductShipping[];
}

export function ProductShipping({ shipping }: ProductShippingProps) {
  const { language } = useLanguageStore();
  const isRTL = language === "fa";

  if (!shipping || shipping.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3" dir={isRTL ? "rtl" : "ltr"}>
      <h3 className="text-lg font-semibold text-gray-900">
        {language === "fa" ? "حمل و نقل" : "Shipping"}
      </h3>
      
      {shipping.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-2">
          {item.discount && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
              <p className="text-sm font-semibold text-green-700">
                {language === "fa" ? item.discount : item.discountEn}
              </p>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Truck className="w-4 h-4" />
            <span className="font-medium">
              {language === "fa" ? item.method : item.methodEn}
            </span>
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-medium">
              {language === "fa" ? "هزینه حمل:" : "Shipping fee:"}
            </span>{" "}
            <span>{language === "fa" ? item.fee : item.feeEn}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              <span className="font-medium">
                {language === "fa" ? "زمان تحویل:" : "Transit time:"}
              </span>{" "}
              <span>{language === "fa" ? item.transitTime : item.transitTimeEn}</span>
            </span>
          </div>
          
          <button className="text-sm text-[var(--color-primary)] hover:underline mt-2">
            {language === "fa" ? "دریافت قیمت" : "Get quote"}
          </button>
        </div>
      ))}
      
      <p className="text-sm text-gray-600">
        {language === "fa"
          ? "یا برای گزینه‌های بیشتر حمل و نقل با تأمین‌کننده چت کنید."
          : "Or, chat with the product supplier for more shipping options."}
      </p>
    </div>
  );
}



