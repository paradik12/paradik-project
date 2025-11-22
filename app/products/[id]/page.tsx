'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import { formatPrice } from '@/utils/locale'
import { products, manufacturers } from '@/data/mockData'
import { Product } from '@/types'
import { Star, Package, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

export default function ProductDetailsPage() {
  const params = useParams()
  const { locale } = useLocale()
  const [product, setProduct] = useState<Product | null>(null)
  const [currency, setCurrency] = useState<'irr' | 'aed' | 'sar'>('irr')
  const [selectedImage, setSelectedImage] = useState(0)
  const t = translations[locale]

  useEffect(() => {
    const found = products.find((p) => p.id === params.id)
    setProduct(found || null)
  }, [params.id])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {locale === 'fa' ? 'محصول یافت نشد' : 'المنتج غير موجود'}
        </h1>
        <Link
          href="/products"
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700"
        >
          {locale === 'fa' ? 'بازگشت به لیست محصولات' : 'العودة إلى قائمة المنتجات'}
        </Link>
      </div>
    )
  }

  const manufacturer = manufacturers.find((m) => m.id === product.manufacturerId)
  const name = product.name[locale] || product.name.fa
  const description = product.description[locale] || product.description.fa
  const price = product.price[currency] || product.price.irr
  const images = product.images || [product.image]

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/products"
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-6 inline-flex items-center gap-2"
      >
        {locale === 'fa' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
        {locale === 'fa' ? 'بازگشت به لیست محصولات' : 'العودة إلى قائمة المنتجات'}
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Images */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={images[selectedImage]}
              alt={name}
              className="w-full h-96 object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-primary-600'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img src={img} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <Link
              href={`/manufacturers/${product.manufacturerId}`}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              {product.manufacturerName[locale]}
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.rating}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.reviewCount} {t.common.reviews})
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              {formatPrice(price, currency, locale)}
            </div>
            <div className="flex gap-2 mb-4">
              {(['irr', 'aed', 'sar'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    currency === curr
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {curr.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

          {/* MOQ */}
          <div className="flex items-center gap-2 mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>{t.products.moq}:</strong> {product.moq}
            </span>
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {locale === 'fa' ? 'مشخصات' : 'المواصفات'}
              </h2>
              <ul className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-600 dark:text-gray-400">{key}:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              {locale === 'fa' ? 'افزودن به سبد خرید' : 'إضافة إلى السلة'}
            </button>
            <button className="border border-primary-600 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
              {t.common.contact}
            </button>
          </div>
        </div>
      </div>

      {/* Manufacturer Info */}
      {manufacturer && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {locale === 'fa' ? 'اطلاعات تولیدکننده' : 'معلومات المصنع'}
          </h2>
          <div className="flex items-start gap-4">
            <img
              src={manufacturer.logo}
              alt={manufacturer.name[locale]}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {manufacturer.name[locale]}
                </h3>
                {manufacturer.verified && (
                  <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {manufacturer.description[locale]}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>
                  {locale === 'fa' ? 'امتیاز' : 'التقييم'}: {manufacturer.rating}
                </span>
                <span>
                  {manufacturer.productCount}{' '}
                  {locale === 'fa' ? 'محصول' : 'منتج'}
                </span>
              </div>
              <Link
                href={`/manufacturers/${manufacturer.id}`}
                className="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:underline"
              >
                {locale === 'fa' ? 'مشاهده پروفایل کامل' : 'عرض الملف الشخصي الكامل'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
