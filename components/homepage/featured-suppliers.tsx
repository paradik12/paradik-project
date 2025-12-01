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
    <section className="section-spacing bg-muted/30" aria-label="Featured Suppliers">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1.5">
              {t("homepage.featuredSuppliers.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t("homepage.featuredSuppliers.subtitle")}
            </p>
          </div>
          <Link href="/suppliers">
            <Button variant="outline" size="sm" className="text-sm px-4 py-2 font-medium border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors h-9">
              {t("common.viewMore")}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {mockSuppliers.map((supplier) => (
            <Link 
              key={supplier.id} 
              href={`/suppliers/${supplier.id}`}
              className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
            >
              <Card className="modern-card h-full flex flex-col overflow-hidden bg-white">
                <CardContent className="flex-1 flex flex-col p-5 space-y-4">
                  {/* Supplier Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                      <Image
                        src={supplier.logo}
                        alt={`${language === "fa" ? supplier.name : supplier.nameEn} - Verified Supplier - Paradik B2B Marketplace`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 64px, 80px"
                        quality={90}
                        loading="lazy"
                        title={language === "fa" ? supplier.name : supplier.nameEn}
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start gap-2 flex-wrap">
                        <h3 className="font-semibold text-base sm:text-lg leading-tight text-gray-900 group-hover:text-primary transition-colors">
                          {language === "fa" ? supplier.name : supplier.nameEn}
                        </h3>
                        {supplier.verified && (
                          <Badge variant="default" className="bg-green-600 text-white font-medium px-2 py-0.5 text-[10px] leading-tight shadow-sm border-0 flex-shrink-0">
                            <CheckCircle2 className="h-2.5 w-2.5 mr-0.5 inline" />
                            {t("common.verified")}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-normal">
                        {supplier.yearsActive} {language === "fa" ? "سال تجربه" : "Years Experience"}
                      </p>
                    </div>
                  </div>

                  {/* Supplier Stats */}
                  <div className="space-y-2.5 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">{supplier.rating}</span>
                      </span>
                      <span className="text-gray-600 font-normal text-xs sm:text-sm">
                        {supplier.responseRate}% {language === "fa" ? "نرخ پاسخ" : "Response Rate"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 font-normal">
                      <Package className="h-3.5 w-3.5" />
                      <span>
                        {supplier.productCount.toLocaleString()} {t("common.products")}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full text-sm font-semibold py-2 h-9 border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors focus-modern mt-auto" 
                    variant="outline" 
                    size="sm"
                    aria-label={`${t("common.contactSupplier")} - ${language === "fa" ? supplier.name : supplier.nameEn}`}
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

