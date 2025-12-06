"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import type { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedProductsProps {
  productId: string;
  className?: string;
}

export function RelatedProducts({ productId, className }: RelatedProductsProps) {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const isRTL = language === "fa";
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one product card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      
      if (isRTL) {
        // In RTL, reverse the scroll direction
        const newScrollPosition = currentScroll + (direction === 'right' ? scrollAmount : -scrollAmount);
        scrollContainerRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      } else {
        const newScrollPosition = currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount);
        scrollContainerRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`/api/products/${productId}/related`);
        if (response.ok) {
          const data = await response.json();
          setRelatedProducts(data.products || []);
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId]);

  if (loading) {
    return null;
  }

  // Only show if we have at least 1 product
  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  // Display exactly 4 products (or as many as we have)
  const displayProducts = relatedProducts.slice(0, 4);
  
  // Don't show section if we have less than 1 product
  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <div className={cn("mt-8 pt-8 border-t border-gray-200", className)}>
      {/* Title */}
      <h4 className={cn(
        "text-xl font-semibold text-gray-900 mb-6",
        isRTL ? "text-right" : "text-left"
      )}>
        {language === "fa" ? "محصولات مرتبط" : "Related Products"}
      </h4>

      {/* Container with scroll buttons on sides */}
      <div className="relative">
        {/* Left Scroll Button - On the left side of cards */}
        <button
          onClick={() => scroll('left')}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full shadow-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors",
            isRTL ? "right-4" : "left-4"
          )}
          aria-label={language === "fa" ? "اسکرول به چپ" : "Scroll left"}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Horizontal Scroll Container - 4 products visible at once */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            paddingInlineStart: '64px',
            paddingInlineEnd: '64px'
          }}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[280px] md:w-[300px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Scroll Button - On the right side of cards */}
        <button
          onClick={() => scroll('right')}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full shadow-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors",
            isRTL ? "left-4" : "right-4"
          )}
          aria-label={language === "fa" ? "اسکرول به راست" : "Scroll right"}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
