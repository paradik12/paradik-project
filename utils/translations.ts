// Translation utilities and common translations
import { Locale } from './locale'

export const translations = {
  fa: {
    nav: {
      home: 'خانه',
      products: 'محصولات',
      manufacturers: 'تولیدکنندگان',
      about: 'درباره ما',
      contact: 'تماس',
      login: 'ورود',
      register: 'ثبت‌نام',
      dashboard: 'داشبورد',
      logout: 'خروج',
    },
    home: {
      heroTitle: 'پلتفرم B2B پارادیک',
      heroSubtitle: 'اتصال تولیدکنندگان ایرانی با خریداران در سراسر جهان',
      searchPlaceholder: 'جستجوی محصولات یا تولیدکنندگان...',
      featuredManufacturers: 'تولیدکنندگان برتر',
      productCategories: 'دسته‌بندی محصولات',
      ctaTitle: 'آماده شروع هستید؟',
      ctaSubtitle: 'همین حالا ثبت‌نام کنید و به هزاران محصول دسترسی پیدا کنید',
    },
    products: {
      title: 'محصولات',
      filters: 'فیلترها',
      category: 'دسته‌بندی',
      price: 'قیمت',
      rating: 'امتیاز',
      moq: 'حداقل سفارش',
      inStock: 'موجود',
      currency: 'ارز',
      sortBy: 'مرتب‌سازی',
      showPrices: 'نمایش قیمت‌ها',
    },
    common: {
      loading: 'در حال بارگذاری...',
      noResults: 'نتیجه‌ای یافت نشد',
      viewDetails: 'مشاهده جزئیات',
      addToCart: 'افزودن به سبد',
      contact: 'تماس',
      rating: 'امتیاز',
      reviews: 'نظرات',
      verified: 'تایید شده',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      manufacturers: 'المصنعين',
      about: 'من نحن',
      contact: 'اتصل',
      login: 'تسجيل الدخول',
      register: 'التسجيل',
      dashboard: 'لوحة التحكم',
      logout: 'تسجيل الخروج',
    },
    home: {
      heroTitle: 'منصة باراديك B2B',
      heroSubtitle: 'ربط المصنعين الإيرانيين بالمشترين في جميع أنحاء العالم',
      searchPlaceholder: 'البحث عن المنتجات أو المصنعين...',
      featuredManufacturers: 'أفضل المصنعين',
      productCategories: 'فئات المنتجات',
      ctaTitle: 'هل أنت مستعد للبدء؟',
      ctaSubtitle: 'سجل الآن واحصل على الوصول إلى آلاف المنتجات',
    },
    products: {
      title: 'المنتجات',
      filters: 'المرشحات',
      category: 'الفئة',
      price: 'السعر',
      rating: 'التقييم',
      moq: 'الحد الأدنى للطلب',
      inStock: 'متوفر',
      currency: 'العملة',
      sortBy: 'ترتيب حسب',
      showPrices: 'عرض الأسعار',
    },
    common: {
      loading: 'جاري التحميل...',
      noResults: 'لم يتم العثور على نتائج',
      viewDetails: 'عرض التفاصيل',
      addToCart: 'إضافة إلى السلة',
      contact: 'اتصل',
      rating: 'التقييم',
      reviews: 'المراجعات',
      verified: 'متحقق',
    },
  },
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

