"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";

export function RFQCTA() {
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();
  const isRTL = direction === "rtl";

  const features = [
    { 
      icon: FileText, 
      title: language === "fa" ? "ارسال درخواست" : "Submit Request", 
      description: language === "fa" ? "نیاز خود را شرح دهید" : "Describe your needs" 
    },
    { 
      icon: Clock, 
      title: language === "fa" ? "دریافت قیمت" : "Get Quotes", 
      description: language === "fa" ? "طی ۲۴ ساعت" : "Within 24 hours" 
    },
    { 
      icon: CheckCircle, 
      title: language === "fa" ? "مقایسه" : "Compare", 
      description: language === "fa" ? "چندین تأمین‌کننده" : "Multiple suppliers" 
    },
    { 
      icon: DollarSign, 
      title: language === "fa" ? "صرفه‌جویی" : "Save Money", 
      description: language === "fa" ? "بهترین قیمت‌ها" : "Best prices" 
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title - Figma exact */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-white">
            {language === "fa" 
              ? "آنچه نیاز دارید را پیدا نمی‌کنید؟" 
              : "Can't find what you need?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {language === "fa"
              ? "درخواست قیمت خود را ثبت کنید و بگذارید تأمین‌کنندگان تایید شده برای کسب‌وکار شما رقابت کنند"
              : "Submit a price request and let verified suppliers compete for your business"}
          </p>
        </div>

        {/* Feature Cards - Figma exact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <h4 className="mb-2 text-white">{feature.title}</h4>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA buttons - Figma exact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/rfq" className="focus-modern">
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition-all transform hover:scale-105 w-full sm:w-auto min-h-[48px]">
              {language === "fa" ? "اطلاعات بیشتر" : "Learn More"}
            </button>
          </Link>
          <Link href="/rfq" className="focus-modern">
            <button className="px-10 py-4 bg-white text-[var(--color-primary)] rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto min-h-[48px]">
              {language === "fa" ? "ثبت درخواست قیمت" : "Submit RFQ"}
            </button>
          </Link>
        </div>

        {/* Social Proof - Figma exact */}
        <div className="mt-8 text-center">
          <p className="text-white/80">
            {language === "fa" ? (
              <>
                به <span className="text-white">50,000+</span> کسب‌وکار که با موفقیت از طریق درخواست قیمت پارادیک تأمین کرده‌اند بپیوندید
              </>
            ) : (
              <>
                Join <span className="text-white">50,000+</span> businesses that have successfully sourced through Paradik RFQ
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
