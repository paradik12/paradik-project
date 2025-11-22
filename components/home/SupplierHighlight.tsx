'use client'

import Link from 'next/link'
import { manufacturers } from '@/data/mockData'
import { Star, CheckCircle, ArrowLeft } from 'lucide-react'

export default function SupplierHighlight() {
  const featuredSuppliers = manufacturers.slice(0, 3)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            تولیدکنندگان برتر
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            با معتبرترین تولیدکنندگان ایران همکاری کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredSuppliers.map((supplier) => (
            <Link
              key={supplier.id}
              href={`/manufacturers/${supplier.id}`}
              className="group bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={supplier.logo}
                  alt={supplier.name.fa}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700 group-hover:border-primary-400 dark:group-hover:border-primary-600 transition-colors"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {supplier.name.fa}
                    </h3>
                    {supplier.verified && (
                      <CheckCircle className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{supplier.rating}</span>
                    <span>({supplier.reviewCount} نظر)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                {supplier.description.fa}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {supplier.badges.slice(0, 2).map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{supplier.productCount}</span> محصول
                </div>
                <div className="flex items-center gap-2 text-primary-500 dark:text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  مشاهده پروفایل
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/manufacturers"
            className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-semibold text-lg transition-all hover:gap-3"
          >
            مشاهده همه تولیدکنندگان
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

