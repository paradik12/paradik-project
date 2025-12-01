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
        {/* Section Header - Alibaba.com Professional Style */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1.5">
              {t("homepage.featuredProducts.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              {t("homepage.featuredProducts.subtitle")}
            </p>
          </div>
          <Link href="/products" className="focus-modern">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm px-4 py-2 font-medium border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors h-9"
            >
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        {/* Product Grid - Alibaba.com Style Compact Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {mockProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
            >
              <Card className="modern-card h-full flex flex-col overflow-hidden bg-white">
                {/* Image Container - Compact Alibaba Style */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={`${language === "fa" ? product.title : product.titleEn} - ${t("common.products")} - Paradik B2B Marketplace`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16.67vw"
                    quality={90}
                    loading="lazy"
                    title={language === "fa" ? product.title : product.titleEn}
                  />
                  {product.verified && (
                    <Badge className="absolute top-1.5 left-1.5 bg-green-600 text-white font-semibold px-1.5 py-0.5 text-[10px] leading-tight shadow-sm border-0">
                      <CheckCircle2 className="h-2.5 w-2.5 mr-0.5 inline" />
                      {t("common.verified")}
                    </Badge>
                  )}
                </div>
                
                {/* Content - Compact Professional Layout */}
                <CardContent className="flex-1 flex flex-col p-3 space-y-2">
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem] text-gray-900 group-hover:text-primary transition-colors">
                    {language === "fa" ? product.title : product.titleEn}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-1.5 border-t border-gray-100">
                    <span className="text-lg font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.rating && (
                      <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                        <span className="text-yellow-500 text-xs">★</span>
                        <span>{product.rating}</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1 text-xs text-gray-600">
                    <p className="font-normal">
                      {t("common.minimumOrder")}: <span className="font-semibold text-gray-900">{product.moq}</span>
                    </p>
                    <p className="font-normal">
                      {product.sold.toLocaleString()} {t("common.sold")}
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="p-3 pt-0">
                  <Button 
                    className="w-full text-sm font-semibold py-2 h-9 bg-primary hover:bg-primary/90 text-white focus-modern" 
                    size="sm"
                    aria-label={`${t("common.addToCart")} - ${language === "fa" ? product.title : product.titleEn}`}
                  >
                    <ShoppingCart className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
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

