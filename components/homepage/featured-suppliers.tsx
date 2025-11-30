"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/language-store";
import type { Supplier } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star, Package } from "lucide-react";

const mockSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "شرکت پسته ایرانی",
    nameEn: "Iranian Nuts Company",
    logo: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 15,
    country: "Iran",
    productCount: 1250,
    responseRate: 98,
    rating: 4.8,
    mainCategories: ["Food", "Nuts"],
  },
  {
    id: "s2",
    name: "صادرات زعفران",
    nameEn: "Saffron Export",
    logo: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 12,
    country: "Iran",
    productCount: 890,
    responseRate: 95,
    rating: 4.9,
    mainCategories: ["Food", "Spices"],
  },
  {
    id: "s3",
    name: "فرش‌های دستباف ایرانی",
    nameEn: "Persian Handmade Carpets",
    logo: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 20,
    country: "Iran",
    productCount: 450,
    responseRate: 92,
    rating: 5.0,
    mainCategories: ["Home", "Carpets"],
  },
  {
    id: "s4",
    name: "مزرعه عسل",
    nameEn: "Honey Farm",
    logo: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop",
    verified: false,
    yearsActive: 8,
    country: "Iran",
    productCount: 320,
    responseRate: 88,
    rating: 4.6,
    mainCategories: ["Food", "Honey"],
  },
  {
    id: "s5",
    name: "کارگاه چرم",
    nameEn: "Leather Workshop",
    logo: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 10,
    country: "Iran",
    productCount: 680,
    responseRate: 96,
    rating: 4.7,
    mainCategories: ["Apparel", "Leather"],
  },
  {
    id: "s6",
    name: "محصولات زیبایی",
    nameEn: "Beauty Products",
    logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 6,
    country: "Iran",
    productCount: 540,
    responseRate: 94,
    rating: 4.5,
    mainCategories: ["Beauty", "Health"],
  },
];

export function FeaturedSuppliers() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section className="py-16 md:py-20 bg-muted/50" aria-label="Featured Suppliers">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-heading">
              {t("homepage.featuredSuppliers.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              {t("homepage.featuredSuppliers.subtitle")}
            </p>
          </div>
          <Link href="/suppliers">
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {mockSuppliers.map((supplier) => (
            <Link 
              key={supplier.id} 
              href={`/suppliers/${supplier.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <Card className="h-full flex flex-col transition-all hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/30 overflow-hidden">
                <CardContent className="flex-1 flex flex-col p-5 sm:p-6 md:p-7">
                  {/* Supplier Header */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden flex-shrink-0 border-2 border-muted">
                      <Image
                        src={supplier.logo}
                        alt={`${language === "fa" ? supplier.name : supplier.nameEn} - Verified Supplier - Paradik B2B Marketplace`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                        quality={90}
                        loading="lazy"
                        title={language === "fa" ? supplier.name : supplier.nameEn}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl font-heading leading-tight">
                          {language === "fa" ? supplier.name : supplier.nameEn}
                        </h3>
                        {supplier.verified && (
                          <Badge variant="default" className="bg-green-600 text-white font-bold px-2 py-1 text-xs flex-shrink-0">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {t("common.verified")}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                        {supplier.yearsActive} {language === "fa" ? "سال تجربه" : "Years Experience"}
                      </p>
                    </div>
                  </div>

                  {/* Supplier Stats */}
                  <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 flex-1">
                    <div className="flex items-center justify-between text-sm sm:text-base md:text-lg">
                      <span className="flex items-center gap-2">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold">{supplier.rating}</span>
                      </span>
                      <span className="text-muted-foreground font-medium text-sm sm:text-base">
                        {supplier.responseRate}% {language === "fa" ? "نرخ پاسخ" : "Response Rate"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                      <Package className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>
                        {supplier.productCount} {t("common.products")}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full text-base font-bold py-3 sm:py-4 min-h-[44px] hover:bg-primary hover:text-white transition-all duration-300" 
                    variant="outline" 
                    size="lg"
                  >
                    {t("common.contactSupplier")}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

