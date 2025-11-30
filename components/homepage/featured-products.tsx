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
    <section className="py-16 md:py-20" aria-label="Featured Products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-heading">
              {t("homepage.featuredProducts.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              {t("homepage.featuredProducts.subtitle")}
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {mockProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="h-full transition-all hover:shadow-xl hover:scale-105 group border-2 hover:border-primary/30">
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <Image
                    src={product.image}
                    alt={`${language === "fa" ? product.title : product.titleEn} - ${t("common.products")} - Paradik B2B Marketplace`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16.67vw"
                    quality={90}
                    loading="lazy"
                    title={language === "fa" ? product.title : product.titleEn}
                  />
                  {product.verified && (
                    <Badge className="absolute top-3 left-3 bg-green-600 text-white font-semibold px-2 py-1 text-xs">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      {t("common.verified")}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5 md:p-6">
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 line-clamp-2 min-h-[3rem] font-heading">
                    {language === "fa" ? product.title : product.titleEn}
                  </h3>
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.rating && (
                      <span className="text-base md:text-lg text-muted-foreground font-semibold">
                        ⭐ {product.rating}
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-2 font-medium">
                    {t("common.minimumOrder")}: {product.moq}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {product.sold} {t("common.sold")}
                  </p>
                </CardContent>
                <CardFooter className="p-5 md:p-6 pt-0">
                  <Button className="w-full text-base md:text-lg font-semibold py-5 md:py-6 hover:bg-primary/90 transition-all duration-300" size="lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
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

