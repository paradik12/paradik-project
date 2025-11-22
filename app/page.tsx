'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import SearchBar from '@/components/SearchBar'
import ProductCard from '@/components/ProductCard'
import ManufacturerCard from '@/components/ManufacturerCard'
import { categories, products, manufacturers } from '@/data/mockData'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Home() {
  const { locale } = useLocale()
  const t = translations[locale]
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const featuredProducts = products.slice(0, 6)
  const featuredManufacturers = manufacturers.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {t.home.heroTitle}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.home.heroSubtitle}
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            {t.nav.products}
          </Link>
          <Link
            href="/auth/register"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {t.nav.register}
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.home.productCategories}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center ${
                selectedCategory === category.id
                  ? 'ring-2 ring-primary-600'
                  : ''
              }`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {category.name[locale]}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category.productCount} {locale === 'fa' ? 'محصول' : 'منتج'}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {locale === 'fa' ? 'محصولات برتر' : 'أفضل المنتجات'}
          </h2>
          <Link
            href="/products"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-2"
          >
            {locale === 'fa' ? 'مشاهده همه' : 'عرض الكل'}
            {locale === 'fa' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Manufacturers */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t.home.featuredManufacturers}
          </h2>
          <Link
            href="/manufacturers"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-2"
          >
            {locale === 'fa' ? 'مشاهده همه' : 'عرض الكل'}
            {locale === 'fa' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredManufacturers.map((manufacturer) => (
            <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 dark:bg-primary-700 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t.home.ctaTitle}</h2>
        <p className="text-xl mb-6 opacity-90">{t.home.ctaSubtitle}</p>
        <Link
          href="/auth/register"
          className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-medium"
        >
          {t.nav.register}
        </Link>
      </section>
    </div>
  )
}
