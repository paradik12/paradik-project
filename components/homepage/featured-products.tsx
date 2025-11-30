"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

const mockProducts: Product[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
  {
    id: "4",
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
    id: "5",
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
    id: "6",
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
];

export function FeaturedProducts() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="section-spacing bg-white" aria-label="Featured Products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header - Alibaba Style */}
        <div className="mb-10 sm:mb-12 md:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground">
              {t("homepage.featuredProducts.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl">
              {t("homepage.featuredProducts.subtitle")}
            </p>
          </div>
          <Link href="/products" className="focus-modern">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 min-h-[48px]"
            >
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        {/* Product Grid - Modern, Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {mockProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <Card className="modern-card h-full flex flex-col overflow-hidden bg-white">
                {/* Image Container - Fixed Aspect Ratio with Modern Styling */}
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  <Image
                    src={product.image}
                    alt={`${language === "fa" ? product.title : product.titleEn} - ${t("common.products")} - Paradik B2B Marketplace`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16.67vw"
                    quality={90}
                    loading="lazy"
                    title={language === "fa" ? product.title : product.titleEn}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  {product.verified && (
                    <Badge className="absolute top-2.5 left-2.5 bg-green-600 text-white font-bold px-2.5 py-1 text-xs shadow-lg border-0">
                      <CheckCircle2 className="h-3 w-3 mr-1 inline" />
                      {t("common.verified")}
                    </Badge>
                  )}
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                
                {/* Content - Clean, Spacious Layout */}
                <CardContent className="flex-1 flex flex-col p-4 sm:p-5 space-y-3">
                  <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] font-heading leading-tight text-foreground">
                    {language === "fa" ? product.title : product.titleEn}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.rating && (
                      <span className="text-sm sm:text-base text-muted-foreground font-semibold flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md">
                        <span className="text-yellow-500">⭐</span>
                        <span>{product.rating}</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p className="font-medium">
                      {t("common.minimumOrder")}: <span className="font-bold text-foreground">{product.moq}</span>
                    </p>
                    <p className="font-medium">
                      {product.sold.toLocaleString()} {t("common.sold")}
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 sm:p-5 pt-0">
                  <Button 
                    className="w-full text-base font-bold py-3 sm:py-4 min-h-[48px] btn-primary-modern focus-modern" 
                    size="lg"
                    aria-label={`${t("common.addToCart")} - ${language === "fa" ? product.title : product.titleEn}`}
                  >
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" aria-hidden="true" />
                    {t("common.addToCart")}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

