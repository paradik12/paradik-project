"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";
import type { HeroSlide } from "@/types";
import Image from "next/image";

const mockSlides: HeroSlide[] = [
  {
    id: "1",
    title: "بهترین محصولات ایرانی",
    titleEn: "Best Iranian Products",
    subtitle: "اتصال مستقیم با تولیدکنندگان",
    subtitleEn: "Direct connection with manufacturers",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=600&fit=crop",
    ctaText: "شروع خرید",
    ctaTextEn: "Start Shopping",
    link: "/products",
  },
  {
    id: "2",
    title: "تامین‌کنندگان معتبر",
    titleEn: "Trusted Suppliers",
    subtitle: "تایید شده و قابل اعتماد",
    subtitleEn: "Verified and trusted",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop",
    ctaText: "مشاهده تامین‌کنندگان",
    ctaTextEn: "View Suppliers",
    link: "/suppliers",
  },
  {
    id: "3",
    title: "درخواست قیمت سریع",
    titleEn: "Quick RFQ",
    subtitle: "بهترین قیمت را دریافت کنید",
    subtitleEn: "Get the best prices",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop",
    ctaText: "ارسال درخواست",
    ctaTextEn: "Submit RFQ",
    link: "/rfq",
  },
];

export function HeroCarousel() {
  const { language, direction } = useLanguageStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockSlides.length) % mockSlides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Carousel - Figma Exact */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {mockSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ display: index === currentSlide || index === (currentSlide - 1 + mockSlides.length) % mockSlides.length ? 'block' : 'none' }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={language === "fa" ? slide.title : slide.titleEn}
              fill
              className="w-full h-full object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
            
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`max-w-2xl text-white ${direction === "rtl" ? "mr-auto" : "ml-auto"}`}>
                  <h1 className="font-heading text-3xl mb-4 animate-fadeIn text-white" style={{ fontSize: '36px', lineHeight: '48px', fontWeight: 900, color: '#FFFFFF' }}>
                    {language === "fa" ? slide.title : slide.titleEn}
                  </h1>
                  <p className="font-body text-base mb-8 text-gray-100" style={{ fontSize: '16px', lineHeight: '26px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {language === "fa" ? slide.subtitle : slide.subtitleEn}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="font-cta px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-all transform hover:scale-105 shadow-lg" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {language === "fa" ? slide.ctaText : slide.ctaTextEn}
                    </button>
                    <button className="font-cta px-8 py-3 bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg" style={{ fontSize: '16px', fontWeight: 600, color: '#1A1A1A' }}>
                      {language === "fa" ? "اطلاعات بیشتر" : "Learn More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Figma Exact */}
        <button
          onClick={nextSlide}
          className={`absolute ${direction === "rtl" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={prevSlide}
          className={`absolute ${direction === "rtl" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Dots indicator - Figma Exact */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {mockSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[var(--color-primary)] w-8 md:w-10' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Search bar overlay - Mobile - Figma Exact */}
      <div className="md:hidden px-4 -mt-8 relative z-30 pb-6">
        <div className="bg-white rounded-lg shadow-xl p-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg overflow-hidden focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-opacity-20">
            <button className="px-4 py-3 bg-[var(--color-primary)] text-white">
              {language === "fa" ? "جستجو" : "Search"}
            </button>
            <input
              type="text"
              placeholder={language === "fa" ? "جستجوی محصولات..." : "Search products..."}
              className="flex-1 px-2 py-3 outline-none"
            />
            <Search className="w-5 h-5 text-gray-400 ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

