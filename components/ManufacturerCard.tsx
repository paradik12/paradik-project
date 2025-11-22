'use client'

import Link from 'next/link'
import { Manufacturer } from '@/types'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import { Star, CheckCircle, MapPin } from 'lucide-react'

interface ManufacturerCardProps {
  manufacturer: Manufacturer
}

export default function ManufacturerCard({ manufacturer }: ManufacturerCardProps) {
  const { locale } = useLocale()
  const t = translations[locale]

  const name = manufacturer.name[locale]
  const description = manufacturer.description[locale]

  return (
    <Link href={`/manufacturers/${manufacturer.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 p-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={manufacturer.logo}
              alt={name}
              className="w-20 h-20 rounded-lg object-cover border-2 border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Content */}
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {name}
                </h3>
                {manufacturer.verified && (
                  <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.common.verified}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {description}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <MapPin className="w-4 h-4" />
              <span>
                {manufacturer.location.city}, {manufacturer.location.country}
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {manufacturer.rating}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  ({manufacturer.reviewCount})
                </span>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {manufacturer.productCount}{' '}
                {locale === 'fa' ? 'محصول' : 'منتج'}
              </div>
            </div>

            {/* Badges */}
            {manufacturer.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {manufacturer.badges.slice(0, 3).map((badge, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

