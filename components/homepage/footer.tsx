"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted border-t" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* About */}
          <div>
            <h3 className="font-card-title mb-4 md:mb-6" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
              {t("footer.about")}
            </h3>
            <ul className="space-y-3 font-body" style={{ fontSize: '16px', lineHeight: '26px', color: '#444' }}>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  {t("footer.help")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-card-title mb-4" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
              {t("footer.products")}
            </h3>
            <ul className="space-y-2 font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  {t("footer.products")}
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="hover:text-foreground transition-colors">
                  {t("footer.suppliers")}
                </Link>
              </li>
              <li>
                <Link href="/rfq" className="hover:text-foreground transition-colors">
                  {t("footer.rfq")}
                </Link>
              </li>
              <li>
                <Link href="/trade-assurance" className="hover:text-foreground transition-colors">
                  {t("footer.tradeAssurance")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Shipping */}
          <div>
            <h3 className="font-card-title mb-4" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
              {t("footer.payment")}
            </h3>
            <ul className="space-y-2 font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
              <li>
                <Link href="/payment" className="hover:text-foreground transition-colors">
                  {t("footer.payment")}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-foreground transition-colors">
                  {t("footer.shipping")}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  {t("footer.help")}
                </Link>
              </li>
            </ul>
          </div>

          {/* For Suppliers */}
          <div>
            <h3 className="font-card-title mb-4" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
              {t("footer.forSuppliers")}
            </h3>
            <ul className="space-y-2 font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
              <li>
                <Link href="/become-supplier" className="hover:text-foreground transition-colors">
                  {t("footer.becomeSupplier")}
                </Link>
              </li>
              <li>
                <Link href="/supplier-dashboard" className="hover:text-foreground transition-colors">
                  {t("footer.supplierCentral")}
                </Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-foreground transition-colors">
                  {t("footer.advertising")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-card-title mb-4" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
              {t("footer.terms")}
            </h3>
            <ul className="space-y-2 font-small" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-card-title mb-4" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600, color: '#222' }}>
                {t("footer.followUs")}
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="font-small text-center" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#666' }}>
              <p>© 2025 Paradik. All rights reserved.</p>
              <p className="mt-1">پارادیک - بازار B2B ایران</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

