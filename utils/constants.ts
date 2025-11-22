/**
 * Application constants
 */

export const APP_NAME = 'پارادیک'
export const APP_DESCRIPTION = 'پلتفرم B2B پیشرو برای راه‌حل‌های حرفه‌ای کسب‌وکار'

// API endpoints
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: number) => `/products/${id}`,
  CONTACT: '/contact',
  SEARCH: '/search',
} as const

// Product categories
export const PRODUCT_CATEGORIES = [
  'الکترونیک',
  'مکانیک',
  'نرم‌افزار',
  'سخت‌افزار',
  'خدمات',
] as const

// Pagination
export const ITEMS_PER_PAGE = 12

// Contact information
export const CONTACT_INFO = {
  PHONE: '021-12345678',
  EMAIL: 'info@paradik.com',
  ADDRESS: 'تهران، خیابان ولیعصر، پلاک 123',
  WORKING_HOURS: 'شنبه تا پنج‌شنبه: 9:00 - 18:00',
} as const


