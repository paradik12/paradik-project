"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const mockTopDeals: Product[] = [
  {
    id: "td1",
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
    id: "td2",
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
    id: "td3",
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
    id: "td4",
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
    id: "td5",
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
    id: "td6",
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

export function TopDeals() {
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();
  const isRTL = direction === "rtl";

  return (
    <section className="section-spacing bg-gradient-to-b from-primary/5 via-primary/3 to-background" aria-label="Top Deals">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-heading">
              {language === "fa" ? "پیشنهادات ویژه" : "Top Deals"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {language === "fa"
                ? "کمترین قیمت‌ها در پارادیک"
                : "Score the lowest prices on Paradik"}
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary hover:underline text-base md:text-lg font-semibold"
          >
            {t("common.viewMore")}
            <ArrowRight
              className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto">
          {mockTopDeals.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <Card className="modern-card h-full flex flex-col overflow-hidden bg-white">
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  <Image
                    src={product.image}
                    alt={`${language === "fa" ? product.title : product.titleEn} - Flash Deal - Paradik B2B Marketplace`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16.67vw"
                    quality={90}
                    loading="lazy"
                    title={language === "fa" ? product.title : product.titleEn}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <Badge className="absolute top-2.5 left-2.5 bg-red-600 text-white font-bold px-3 py-1.5 text-xs sm:text-sm shadow-lg border-0">
                    {language === "fa" ? "فوری" : "Flash Deal"}
                  </Badge>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <CardContent className="flex-1 flex flex-col p-4 sm:p-5 space-y-2">
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-xl sm:text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.price > 20 && (
                      <span className="text-sm text-muted-foreground line-through font-medium">
                        ${(product.price * 1.2).toFixed(0)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium">
                    {t("common.minimumOrder")}: <span className="font-bold text-foreground">{product.moq}</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


