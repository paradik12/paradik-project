"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";

export function RFQCTA() {
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 shadow-xl">
          <CardContent className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-start gap-4 md:gap-5 mb-6 md:mb-8">
                  <FileText className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
                    {t("homepage.rfq.title")}
                  </h2>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 font-medium leading-relaxed">
                  {t("homepage.rfq.subtitle")}
                </p>
                <Link href="/rfq">
                  <Button size="lg" className="text-lg md:text-xl px-10 md:px-12 py-6 md:py-7 font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90">
                    {t("homepage.rfq.button")}
                    {direction === "rtl" ? (
                      <ArrowLeft className="h-6 w-6 mr-2" />
                    ) : (
                      <ArrowLeft className="h-6 w-6 ml-2 rotate-180" />
                    )}
                  </Button>
                </Link>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-40 w-40 lg:h-48 lg:w-48 text-primary/30" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

