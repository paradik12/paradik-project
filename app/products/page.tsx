"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language-store";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/homepage/header";
import { Footer } from "@/components/homepage/footer";
import { Breadcrumb } from "@/components/product/breadcrumb";
import { SortBar, type SortOption } from "@/components/product/sort-bar";
import { Filters } from "@/components/product/filters";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: { min: number; max: number };
  moq: number;
  verifiedOnly: boolean;
  goldSupplier: boolean;
}

const PRODUCTS_PER_PAGE = 20;

export default function ProductsPage() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  
  // Initialize sort from URL params
  const initialSort = (searchParams.get("sort") as SortOption) || "relevance";
  const initialCategory = searchParams.get("category") || "";
  const productType = searchParams.get("type") || "";
  
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [filters, setFilters] = useState<FilterState>({
    categories: initialCategory ? [initialCategory] : [],
    brands: [],
    priceRange: { min: 0, max: 0 },
    moq: 0,
    verifiedOnly: productType === "featured" || productType === "flash-deals" ? false : false,
    goldSupplier: false,
  });
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const observerTarget = useRef<HTMLDivElement>(null);
  
  // Update sort when URL changes
  useEffect(() => {
    const urlSort = searchParams.get("sort") as SortOption;
    if (urlSort && urlSort !== sortBy) {
      setSortBy(urlSort);
    }
  }, [searchParams, sortBy]);
  
  // Update category when URL changes
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory && !filters.categories.includes(urlCategory)) {
      setFilters(prev => ({
        ...prev,
        categories: [urlCategory],
      }));
    }
  }, [searchParams, filters.categories]);

  // Fetch products
  const fetchProducts = useCallback(async (currentOffset: number, reset = false) => {
    try {
      if (reset) {
        setLoading(true);
        setOffset(0);
      } else {
        setLoadingMore(true);
      }

      const params = new URLSearchParams({
        limit: PRODUCTS_PER_PAGE.toString(),
        offset: currentOffset.toString(),
      });

      if (filters.categories.length > 0) {
        params.append("category", filters.categories[0]);
      }
      
      // Add product type filter if specified in URL
      const productTypeParam = searchParams.get("type");
      if (productTypeParam) {
        params.append("type", productTypeParam);
      }
      
      // Add sort parameter
      if (sortBy && sortBy !== "relevance") {
        params.append("sort", sortBy);
      }

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();

      if (reset) {
        setProducts(data.products);
        setOffset(PRODUCTS_PER_PAGE);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
        setOffset((prev) => prev + PRODUCTS_PER_PAGE);
      }

      setTotalResults(data.total);
      setHasMore(data.products.length === PRODUCTS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [filters.categories, searchParams, sortBy]);

  // Initial load
  useEffect(() => {
    fetchProducts(0, true);
  }, [filters, sortBy]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          fetchProducts(offset, false);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadingMore, loading, offset, fetchProducts]);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return 0; // Would need createdAt in Product type
      case "lowest-price":
        return a.price - b.price;
      case "highest-price":
        return b.price - a.price;
      case "popular":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1" role="main">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              {
                label: language === "fa" ? "محصولات" : "Products",
              },
            ]}
          />

          {/* Page Title */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontSize: '32px', fontWeight: 800, color: '#1A1A1A' }}>
            {language === "fa" ? "محصولات" : "Products"}
          </h1>

          {/* Filters Row */}
          <div className="mb-4 flex flex-wrap gap-2">
            {/* Top filters can be added here if needed */}
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            {/* Filters Sidebar - Right side for RTL */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-4">
                <Filters filters={filters} onFiltersChange={setFilters} />
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort Bar */}
              <SortBar
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalResults={totalResults}
              />

              {/* Loading State */}
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
                </div>
              ) : (
                <>
                  {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {sortedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Infinite Scroll Trigger */}
                  {hasMore && (
                    <div ref={observerTarget} className="flex items-center justify-center py-8">
                      {loadingMore && (
                        <Loader2 className="w-6 h-6 animate-spin text-[var(--color-primary)]" />
                      )}
                    </div>
                  )}

                  {/* End of Results */}
                  {!hasMore && products.length > 0 && (
                    <div className="text-center py-8 text-gray-600">
                      {language === "fa" ? "همه محصولات نمایش داده شد" : "All products displayed"}
                    </div>
                  )}

                  {/* No Results */}
                  {!loading && products.length === 0 && (
                    <div className="text-center py-20 text-gray-600">
                      <p className="text-lg">
                        {language === "fa" ? "محصولی یافت نشد" : "No products found"}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}