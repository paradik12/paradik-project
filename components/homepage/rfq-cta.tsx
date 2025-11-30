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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">
                    {t("homepage.rfq.title")}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("homepage.rfq.subtitle")}
                </p>
                <Link href="/rfq">
                  <Button size="lg" className="text-lg px-8">
                    {t("homepage.rfq.button")}
                    {direction === "rtl" ? (
                      <ArrowLeft className="h-5 w-5 mr-2" />
                    ) : (
                      <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
                    )}
                  </Button>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

