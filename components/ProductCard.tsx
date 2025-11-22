'use client'

import Link from 'next/link'
import { Product } from '@/types'
import { useLocale } from '@/contexts/LocaleContext'
import { formatPrice } from '@/utils/locale'
import { translations } from '@/utils/translations'
import { Star, Package } from 'lucide-react'

interface ProductCardProps {
  product: Product
  currency?: 'irr' | 'aed' | 'sar'
}

export default function ProductCard({ product, currency = 'irr' }: ProductCardProps) {
  const { locale } = useLocale()
  const t = translations[locale]

  const price = product.price[currency] || product.price.irr
  const name = product.name[locale] || product.name.fa
  const description = product.description[locale] || product.description.fa

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              {locale === 'fa' ? 'ناموجود' : 'غير متوفر'}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Manufacturer */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {product.manufacturerName[locale]}
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviewCount} {t.common.reviews})
            </span>
          </div>

          {/* MOQ and Price */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <Package className="w-4 h-4" />
              <span>
                MOQ: {product.moq}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                {formatPrice(price, currency, locale)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
