'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { categories } from '@/data/mockData'
import { Package } from 'lucide-react'

export default function CategoriesPage() {
  const { locale } = useLocale()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            دسته‌بندی محصولات
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            دسترسی به طیف گسترده‌ای از محصولات در دسته‌بندی‌های مختلف
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 text-center"
            >
              {/* Icon */}
              <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {category.name[locale]}
              </h3>

              {/* Description */}
              {category.description && (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {category.description[locale]}
                </p>
              )}

              {/* Product Count */}
              <div className="flex items-center justify-center gap-2 text-primary-500 dark:text-primary-400 font-semibold">
                <Package className="w-5 h-5" />
                <span className="text-base md:text-lg">
                  {category.productCount.toLocaleString()} محصول
                </span>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 text-sm font-medium">
                  مشاهده محصولات
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                دسته‌بندی
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                {categories.reduce((sum, cat) => sum + cat.productCount, 0).toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                محصول فعال
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                تولیدکننده
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                خریدار
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

