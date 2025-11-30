"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/language-store";
import type { HeroSlide } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mockSlides.length) % mockSlides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockSlides.length);
  };

  const currentSlide = mockSlides[currentIndex];

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-xl shadow-2xl" role="region" aria-label="Hero carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.image}
            alt={language === "fa" ? currentSlide.title : currentSlide.titleEn}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className={`absolute inset-0 ${direction === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-black/70 via-black/50 to-black/30`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8">
        <div className="container mx-auto text-center text-white max-w-4xl">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-heading drop-shadow-lg"
          >
            {language === "fa" ? currentSlide.title : currentSlide.titleEn}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 font-medium drop-shadow-md px-4"
          >
            {language === "fa" ? currentSlide.subtitle : currentSlide.subtitleEn}
          </motion.p>
          <motion.div
            key={`cta-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href={currentSlide.link} className="focus-modern">
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-10 md:px-12 py-6 md:py-7 font-bold btn-primary-modern focus-modern min-h-[56px]"
                aria-label={language === "fa" ? currentSlide.ctaText : currentSlide.ctaTextEn}
              >
                {language === "fa" ? currentSlide.ctaText : currentSlide.ctaTextEn}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute ${direction === "rtl" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm`}
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className={`h-6 w-6 ${direction === "rtl" ? "rotate-180" : ""}`} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`absolute ${direction === "rtl" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className={`h-6 w-6 ${direction === "rtl" ? "rotate-180" : ""}`} />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {mockSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white scale-110" : "w-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}

