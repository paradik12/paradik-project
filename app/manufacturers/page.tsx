'use client'

import { useState, useMemo } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import ManufacturerCard from '@/components/ManufacturerCard'
import SearchBar from '@/components/SearchBar'
import { manufacturers, categories } from '@/data/mockData'
import { Manufacturer } from '@/types'

export default function ManufacturersPage() {
  const { locale } = useLocale()
  const t = translations[locale]
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredManufacturers = useMemo(() => {
    let filtered: Manufacturer[] = [...manufacturers]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (m) =>
          m.name[locale].toLowerCase().includes(query) ||
          m.description[locale].toLowerCase().includes(query)
      )
    }

    if (selectedCategory !== 'all') {
      const category = categories.find((c) => c.id === selectedCategory)
      if (category) {
        filtered = filtered.filter((m) => m.category.includes(category.name.fa))
      }
    }

    return filtered
  }, [searchQuery, selectedCategory, locale])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {t.nav.manufacturers}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.products.filters}
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.products.category}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">{locale === 'fa' ? 'همه دسته‌ها' : 'جميع الفئات'}</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name[locale]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="mb-6">
            <SearchBar
              placeholder={
                locale === 'fa' ? 'جستجوی تولیدکنندگان...' : 'البحث عن المصنعين...'
              }
              onSearch={setSearchQuery}
            />
          </div>

          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredManufacturers.length}{' '}
              {locale === 'fa' ? 'تولیدکننده یافت شد' : 'مصنع موجود'}
            </p>
          </div>

          {filteredManufacturers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t.common.noResults}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredManufacturers.map((manufacturer) => (
                <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

