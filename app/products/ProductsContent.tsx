'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import { products, categories } from '@/data/mockData'
import { Product } from '@/types'
import { Star, Filter, ChevronRight, ChevronLeft } from 'lucide-react'

const ITEMS_PER_PAGE = 12

export default function ProductsContent() {
  const { locale } = useLocale()
  const searchParams = useSearchParams()
  const t = translations[locale]
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000])
  const [minRating, setMinRating] = useState(0)
  const [currency, setCurrency] = useState<'irr' | 'aed' | 'sar'>('irr')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'newest'>('newest')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProducts = useMemo(() => {
    let filtered: Product[] = [...products]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name[locale].toLowerCase().includes(query) ||
          p.description[locale].toLowerCase().includes(query) ||
          p.manufacturerName[locale].toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      const category = categories.find((c) => c.id === selectedCategory)
      if (category) {
        filtered = filtered.filter((p) => p.category === category.name.fa)
      }
    }

    // Price filter
    filtered = filtered.filter((p) => {
      const price = p.price[currency] || p.price.irr
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Rating filter
    filtered = filtered.filter((p) => p.rating >= minRating)

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'price') {
        return (a.price[currency] || a.price.irr) - (b.price[currency] || b.price.irr)
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    return filtered
  }, [searchQuery, selectedCategory, priceRange, minRating, currency, sortBy, locale])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, priceRange, minRating, sortBy])

  const maxPrice = Math.max(...products.map((p) => p.price[currency] || p.price.irr))

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">
        {t.products.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Filter size={20} />
                {t.products.filters}
              </h2>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.products.category}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
              >
                <option value="all">{locale === 'fa' ? 'همه دسته‌ها' : 'جميع الفئات'}</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name[locale]}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.products.price}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>0</span>
                  <span>{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.products.rating}
              </label>
              <div className="flex items-center gap-2">
                {[4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm ${
                      minRating >= rating
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        minRating >= rating ? 'fill-yellow-400 text-yellow-400' : ''
                      }`}
                    />
                    <span>{rating}+</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.products.currency}
              </label>
              <div className="flex gap-2">
                {(['irr', 'aed', 'sar'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      currency === curr
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {curr.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Search and Sort */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <SearchBar
                  placeholder={t.home.searchPlaceholder}
                  onSearch={setSearchQuery}
                />
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden px-4 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                <Filter size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {filteredProducts.length}{' '}
                {locale === 'fa' ? 'محصول یافت شد' : 'منتج موجود'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-base"
              >
                <option value="newest">
                  {locale === 'fa' ? 'جدیدترین' : 'الأحدث'}
                </option>
                <option value="price">
                  {locale === 'fa' ? 'قیمت' : 'السعر'}
                </option>
                <option value="rating">
                  {locale === 'fa' ? 'امتیاز' : 'التقييم'}
                </option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t.common.noResults}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} currency={currency} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-primary-500 text-white'
                              : 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="px-2 text-gray-500">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
