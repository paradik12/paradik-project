"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import { Header } from "@/components/homepage/header";
import { Footer } from "@/components/homepage/footer";
import { Breadcrumb } from "@/components/product/breadcrumb";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductPricing } from "@/components/product/product-pricing";
import { ProductVariations } from "@/components/product/product-variations";
import { ProductShipping } from "@/components/product/product-shipping";
import { ProductActionButtons } from "@/components/product/product-action-buttons";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import type { Product } from "@/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const { t } = useTranslation();
  const { language, direction } = useLanguageStore();
  const isRTL = direction === "rtl";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data.product);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "fa" ? "محصول یافت نشد" : "Product not found"}
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Prepare images array
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="min-h-screen flex flex-col bg-white" dir={direction}>
      <Header />
      <main className="flex-1" role="main">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              {
                label: language === "fa" ? "خانه" : "Home",
                href: "/",
              },
              {
                label: language === "fa" ? "محصولات" : "Products",
                href: "/products",
              },
              {
                label: language === "fa" ? product.title : product.titleEn,
              },
            ]}
          />

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6">
            {/* Left Column - Gallery (Right in RTL) */}
            <div className={cn(
              "lg:col-span-5",
              isRTL ? "lg:order-2" : "lg:order-1"
            )}>
              <ProductGallery
                images={images}
                title={product.title}
                titleEn={product.titleEn}
              />
            </div>

            {/* Right Column - Product Info (Left in RTL) */}
            <div className={cn(
              "lg:col-span-7",
              isRTL ? "lg:order-1" : "lg:order-2"
            )}>
              <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
                <ProductInfo product={product} />
                
                {product.pricingTiers && product.pricingTiers.length > 0 && (
                  <ProductPricing
                    product={product}
                    pricingTiers={product.pricingTiers}
                  />
                )}

                {product.variations && product.variations.length > 0 && (
                  <ProductVariations variations={product.variations} />
                )}

                {product.shipping && product.shipping.length > 0 && (
                  <ProductShipping shipping={product.shipping} />
                )}

                <ProductActionButtons
                  onSendInquiry={() => {
                    // TODO: Handle send inquiry
                    console.log("Send inquiry");
                  }}
                  onChatNow={() => {
                    // TODO: Handle chat now
                    console.log("Chat now");
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <ProductTabs product={product} images={images} />

          {/* Related Products - Independent Section */}
          <RelatedProducts productId={product.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
