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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold lg:text-4xl mb-3">
            {language === "fa" 
              ? "آنچه نیاز دارید را پیدا نکردید؟" 
              : "Can't find what you need?"}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {language === "fa"
              ? "درخواست قیمت ثبت کنید و بگذارید تأمین‌کنندگان تایید شده برای کار شما رقابت کنند"
              : "Submit a price request and let verified suppliers compete for your business"}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/15 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 lg:w-20 lg:h-20 mx-auto mb-4 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/rfq" className="focus-modern">
            <Button 
              variant="outline"
              className="px-10 py-4 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105 min-h-[48px]"
            >
              {language === "fa" ? "اطلاعات بیشتر" : "Learn More"}
            </Button>
          </Link>
          <Link href="/rfq" className="focus-modern">
            <Button 
              className="px-10 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg min-h-[48px]"
            >
              {language === "fa" ? "ثبت درخواست قیمت" : "Submit RFQ"}
              <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180 mr-2" : "ml-2"}`} />
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <p className="mt-8 text-center text-white/80 text-sm font-medium">
          {language === "fa" ? (
            <>
              بیش از <span className="font-bold text-white">۵۰,۰۰۰+</span> کسب‌وکار از پارادیک تأمین کرده‌اند
            </>
          ) : (
            <>
              Over <span className="font-bold text-white">50,000+</span> businesses have sourced from Paradik
            </>
          )}
        </p>
      </div>
    </section>
  );
}
