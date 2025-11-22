'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const categories = [
  {
    id: '1',
    name: 'پلاستیک',
    icon: '🧴',
    description: 'محصولات پلاستیکی صنعتی',
    count: '245+',
    link: '/categories/plastic',
  },
  {
    id: '2',
    name: 'لوازم خانگی',
    icon: '🏠',
    description: 'تجهیزات و لوازم خانگی',
    count: '189+',
    link: '/categories/home-appliances',
  },
  {
    id: '3',
    name: 'پوشاک',
    icon: '👕',
    description: 'پوشاک و منسوجات',
    count: '156+',
    link: '/categories/apparel',
  },
  {
    id: '4',
    name: 'مواد غذایی',
    icon: '🍎',
    description: 'مواد غذایی و نوشیدنی',
    count: '203+',
    link: '/categories/food',
  },
  {
    id: '5',
    name: 'ماشین‌آلات',
    icon: '⚙️',
    description: 'ماشین‌آلات صنعتی',
    count: '167+',
    link: '/categories/machinery',
  },
  {
    id: '6',
    name: 'الکترونیک',
    icon: '⚡',
    description: 'تجهیزات الکترونیکی',
    count: '298+',
    link: '/categories/electronics',
  },
  {
    id: '7',
    name: 'ساختمان',
    icon: '🏗️',
    description: 'مصالح ساختمانی',
    count: '234+',
    link: '/categories/construction',
  },
  {
    id: '8',
    name: 'بسته‌بندی',
    icon: '📦',
    description: 'مواد و تجهیزات بسته‌بندی',
    count: '198+',
    link: '/categories/packaging',
  },
]

export default function Categories() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            دسته‌بندی محصولات
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            دسترسی به طیف گسترده‌ای از محصولات در دسته‌بندی‌های مختلف
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 hover:-translate-y-1"
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-primary-500 dark:text-primary-400 font-semibold text-sm">
                <span>{category.count} محصول</span>
                <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

