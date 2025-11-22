'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import { formatPrice } from '@/utils/locale'
import { products, manufacturers } from '@/data/mockData'
import { Product, Manufacturer } from '@/types'
import {
  Star,
  Package,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function ProductDetailsPage() {
  const params = useParams()
  const { locale } = useLocale()
  const [product, setProduct] = useState<Product | null>(null)
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null)
  const [currency, setCurrency] = useState<'irr' | 'aed' | 'sar'>('irr')
  const [selectedImage, setSelectedImage] = useState(0)
  const [showContactModal, setShowContactModal] = useState(false)
  const t = translations[locale]

  useEffect(() => {
    const found = products.find((p) => p.id === params.id)
    if (found) {
      setProduct(found)
      const man = manufacturers.find((m) => m.id === found.manufacturerId)
      setManufacturer(man || null)
    }
  }, [params.id])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {locale === 'fa' ? 'محصول یافت نشد' : 'المنتج غير موجود'}
        </h1>
        <Link
          href="/products"
          className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium"
        >
          {locale === 'fa' ? 'بازگشت به لیست محصولات' : 'العودة إلى قائمة المنتجات'}
        </Link>
      </div>
    )
  }

  const name = product.name[locale] || product.name.fa
  const description = product.description[locale] || product.description.fa
  const price = product.price[currency] || product.price.irr
  const images = product.images || [product.image]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
          خانه
        </Link>
        <span>/</span>
        <Link
          href="/products"
          className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          محصولات
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white font-medium">{name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images Gallery */}
        <div>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-4">
            <img
              src={images[selectedImage]}
              alt={name}
              className="w-full h-96 md:h-[500px] object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg transition-colors"
                  aria-label="Next image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </>
            )}
            {!product.inStock && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {locale === 'fa' ? 'ناموجود' : 'غير متوفر'}
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-500 dark:border-primary-400 scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {/* Supplier Link */}
          <Link
            href={`/manufacturers/${product.manufacturerId}`}
            className="inline-flex items-center gap-2 text-sm text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-4 transition-colors"
          >
            {product.manufacturerName[locale]}
            <ArrowLeft className="w-4 h-4" />
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.rating}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.reviewCount} {t.common.reviews})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-4xl font-bold text-primary-500 dark:text-primary-400 mb-4">
              {formatPrice(price, currency, locale)}
            </div>
            <div className="flex gap-2">
              {(['irr', 'aed', 'sar'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currency === curr
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600'
                  }`}
                >
                  {curr.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {locale === 'fa' ? 'توضیحات' : 'الوصف'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* MOQ */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
            <Package className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'fa' ? 'حداقل سفارش' : 'الحد الأدنى للطلب'}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.moq} {locale === 'fa' ? 'عدد' : 'قطعة'}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
              {locale === 'fa' ? 'افزودن به سبد خرید' : 'إضافة إلى السلة'}
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="flex-1 border-2 border-primary-500 text-primary-500 dark:text-primary-400 px-8 py-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-semibold text-lg"
            >
              {locale === 'fa' ? 'تماس با فروشنده' : 'اتصل بالبائع'}
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {locale === 'fa' ? 'مشخصات فنی' : 'المواصفات التقنية'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr
                    key={key}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-right font-semibold text-gray-900 dark:text-white w-1/3">
                      {key}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Supplier Info Section */}
      {manufacturer && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {locale === 'fa' ? 'اطلاعات تولیدکننده' : 'معلومات المصنع'}
            </h2>
            <Link
              href={`/manufacturers/${manufacturer.id}`}
              className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium flex items-center gap-2"
            >
              {locale === 'fa' ? 'مشاهده پروفایل' : 'عرض الملف الشخصي'}
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Supplier Details */}
            <div className="flex items-start gap-6">
              <img
                src={manufacturer.logo}
                alt={manufacturer.name[locale]}
                className="w-24 h-24 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
              />
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {manufacturer.name[locale]}
                  </h3>
                  {manufacturer.verified && (
                    <CheckCircle className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {manufacturer.description[locale]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {manufacturer.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{manufacturer.rating}</span>
                    <span>({manufacturer.reviewCount})</span>
                  </div>
                  <div>
                    {manufacturer.productCount} {locale === 'fa' ? 'محصول' : 'منتج'}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {locale === 'fa' ? 'اطلاعات تماس' : 'معلومات الاتصال'}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {manufacturer.location.city}, {manufacturer.location.country}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${manufacturer.contact.phone}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {manufacturer.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <a
                    href={`mailto:${manufacturer.contact.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {manufacturer.contact.email}
                  </a>
                </div>
                {manufacturer.contact.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <a
                      href={manufacturer.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {manufacturer.contact.website}
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Supplier Button */}
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full mt-6 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-md hover:shadow-lg"
              >
                {locale === 'fa' ? 'تماس با تولیدکننده' : 'اتصل بالمصنع'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && manufacturer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {locale === 'fa' ? 'تماس با تولیدکننده' : 'اتصل بالمصنع'}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {locale === 'fa' ? 'نام' : 'الاسم'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {locale === 'fa' ? 'ایمیل' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {locale === 'fa' ? 'پیام' : 'الرسالة'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  {locale === 'fa' ? 'انصراف' : 'إلغاء'}
                </button>
                <button
                  onClick={() => {
                    // In real app, send message
                    setShowContactModal(false)
                    alert(locale === 'fa' ? 'پیام شما ارسال شد' : 'تم إرسال رسالتك')
                  }}
                  className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                >
                  {locale === 'fa' ? 'ارسال' : 'إرسال'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
