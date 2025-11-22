'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import ProductCard from '@/components/ProductCard'
import { manufacturers, products } from '@/data/mockData'
import { Manufacturer, Product } from '@/types'
import {
  Star,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  Package,
} from 'lucide-react'

export default function ManufacturerProfilePage() {
  const params = useParams()
  const { locale } = useLocale()
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null)
  const [manufacturerProducts, setManufacturerProducts] = useState<Product[]>([])
  const t = translations[locale]

  useEffect(() => {
    const found = manufacturers.find((m) => m.id === params.id)
    setManufacturer(found || null)

    if (found) {
      const prods = products.filter((p) => p.manufacturerId === found.id)
      setManufacturerProducts(prods)
    }
  }, [params.id])

  if (!manufacturer) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {locale === 'fa' ? 'تولیدکننده یافت نشد' : 'المصنع غير موجود'}
        </h1>
        <Link
          href="/manufacturers"
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700"
        >
          {locale === 'fa' ? 'بازگشت به لیست' : 'العودة إلى القائمة'}
        </Link>
      </div>
    )
  }

  const name = manufacturer.name[locale]
  const description = manufacturer.description[locale]

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/manufacturers"
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-6 inline-block"
      >
        {locale === 'fa' ? '← بازگشت به لیست' : '← العودة إلى القائمة'}
      </Link>

      {/* Company Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={manufacturer.logo}
              alt={name}
              className="w-32 h-32 rounded-lg object-cover border-4 border-gray-200 dark:border-gray-700"
            />
          </div>

          <div className="flex-grow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {name}
                  </h1>
                  {manufacturer.verified && (
                    <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {manufacturer.location.city}, {manufacturer.location.country}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {manufacturer.rating}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  ({manufacturer.reviewCount} {t.common.reviews})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {manufacturer.productCount}{' '}
                  {locale === 'fa' ? 'محصول' : 'منتج'}
                </span>
              </div>
            </div>

            {/* Badges */}
            {manufacturer.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {manufacturer.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {manufacturer.trustIndicators.yearsInBusiness}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {locale === 'fa' ? 'سال تجربه' : 'سنوات من الخبرة'}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <Package className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {manufacturer.trustIndicators.totalOrders.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {locale === 'fa' ? 'سفارش موفق' : 'طلب ناجح'}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {manufacturer.trustIndicators.responseRate}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {locale === 'fa' ? 'نرخ پاسخ' : 'معدل الاستجابة'}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {locale === 'fa' ? 'اطلاعات تماس' : 'معلومات الاتصال'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <a
              href={`mailto:${manufacturer.contact.email}`}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {manufacturer.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <a
              href={`tel:${manufacturer.contact.phone}`}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {manufacturer.contact.phone}
            </a>
          </div>
          {manufacturer.contact.website && (
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <a
                href={manufacturer.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {manufacturer.contact.website}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {locale === 'fa' ? 'محصولات' : 'المنتجات'} ({manufacturerProducts.length})
        </h2>
        {manufacturerProducts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            {locale === 'fa' ? 'محصولی یافت نشد' : 'لم يتم العثور على منتجات'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

