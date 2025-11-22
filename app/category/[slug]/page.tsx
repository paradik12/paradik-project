'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import ProductCard from '@/components/ProductCard'
import { categories, products } from '@/data/mockData'
import { Category, Product } from '@/types'
import { ArrowRight, Package } from 'lucide-react'

export default function CategoryDetailPage() {
  const params = useParams()
  const { locale } = useLocale()
  const [category, setCategory] = useState<Category | null>(null)
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])

  useEffect(() => {
    const found = categories.find((c) => c.slug === params.slug)
    setCategory(found || null)

    if (found) {
      const prods = products.filter((p) => p.category === found.name.fa)
      setCategoryProducts(prods)
    }
  }, [params.slug])

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'fa' ? 'دسته‌بندی یافت نشد' : 'الفئة غير موجودة'}
          </h1>
          <Link
            href="/categories"
            className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium"
          >
            {locale === 'fa' ? 'بازگشت به دسته‌بندی‌ها' : 'العودة إلى الفئات'}
          </Link>
        </div>
      </div>
    )
  }

  const categoryName = category.name[locale]
  const categoryDescription = category.description?.[locale] || ''

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            خانه
          </Link>
          <span>/</span>
          <Link
            href="/categories"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            دسته‌بندی‌ها
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{categoryName}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Icon */}
            <div className="text-8xl md:text-9xl flex-shrink-0">
              {category.icon}
            </div>

            {/* Content */}
            <div className="flex-grow text-center md:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {categoryName}
              </h1>
              {categoryDescription && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {categoryDescription}
                </p>
              )}
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary-500 dark:text-primary-400">
                <Package className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  {category.productCount.toLocaleString()} محصول
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              محصولات این دسته‌بندی
            </h2>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-semibold transition-colors"
            >
              مشاهده همه محصولات
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {locale === 'fa' ? 'در حال حاضر محصولی در این دسته‌بندی موجود نیست' : 'لا توجد منتجات في هذه الفئة حاليًا'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Mobile View All Button */}
          {categoryProducts.length > 0 && (
            <div className="text-center mt-8 md:hidden">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-md"
              >
                مشاهده همه محصولات
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            دسته‌بندی‌های مرتبط
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories
              .filter((c) => c.id !== category.id)
              .slice(0, 6)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/category/${relatedCategory.slug}`}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {relatedCategory.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {relatedCategory.name[locale]}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

