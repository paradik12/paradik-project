'use client'

import Link from 'next/link'
import { products } from '@/data/mockData'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              محصولات برتر
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              محصولات پرفروش و با کیفیت از تولیدکنندگان معتبر
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-semibold text-lg transition-all duration-300 hover:gap-3"
          >
            مشاهده همه
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 md:hidden bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-md"
          >
            مشاهده همه محصولات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

