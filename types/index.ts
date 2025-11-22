// TypeScript interfaces for all data structures

export interface Product {
  id: string
  name: {
    fa: string
    ar: string
    en: string
  }
  description: {
    fa: string
    ar: string
    en: string
  }
  price: {
    irr: number // Iranian Rial
    aed?: number // UAE Dirham
    sar?: number // Saudi Riyal
  }
  image: string
  images?: string[]
  category: string
  manufacturerId: string
  manufacturerName: {
    fa: string
    ar: string
  }
  moq: number // Minimum Order Quantity
  rating: number
  reviewCount: number
  specifications?: Record<string, string>
  inStock: boolean
  createdAt: string
}

export interface Manufacturer {
  id: string
  name: {
    fa: string
    ar: string
  }
  logo: string
  description: {
    fa: string
    ar: string
  }
  category: string[]
  location: {
    city: string
    country: string
  }
  rating: number
  reviewCount: number
  productCount: number
  verified: boolean
  badges: string[]
  contact: {
    email: string
    phone: string
    website?: string
  }
  trustIndicators: {
    yearsInBusiness: number
    totalOrders: number
    responseRate: number
  }
}

export interface Category {
  id: string
  slug: string
  name: {
    fa: string
    ar: string
  }
  icon: string
  productCount: number
  description?: {
    fa: string
    ar: string
  }
}

export interface User {
  id: string
  email: string
  name: string
  role: 'buyer' | 'seller' | 'admin'
  companyName?: string
  avatar?: string
  language: 'fa' | 'ar'
  currency: 'irr' | 'aed' | 'sar'
}

export interface FilterOptions {
  category?: string
  minPrice?: number
  maxPrice?: number
  minRating?: number
  manufacturerId?: string
  inStock?: boolean
  currency?: 'irr' | 'aed' | 'sar'
}

export interface SearchResult {
  products: Product[]
  manufacturers: Manufacturer[]
  total: number
}

