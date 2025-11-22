// API service for product-related operations

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  specifications?: string[]
}

// Mock data - Replace with actual API calls
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'محصول نمونه 1',
    description: 'این یک محصول نمونه با کیفیت بالا است که برای نیازهای B2B طراحی شده است.',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'الکترونیک',
    specifications: [
      'ویژگی 1: مشخصات فنی پیشرفته',
      'ویژگی 2: کیفیت بالا',
      'ویژگی 3: گارانتی 2 ساله',
    ],
  },
  {
    id: 2,
    name: 'محصول نمونه 2',
    description: 'محصولی حرفه‌ای برای استفاده در محیط‌های تجاری و صنعتی.',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'مکانیک',
    specifications: [
      'ویژگی 1: مقاوم در برابر شرایط سخت',
      'ویژگی 2: عملکرد عالی',
      'ویژگی 3: پشتیبانی فنی کامل',
    ],
  },
  {
    id: 3,
    name: 'محصول نمونه 3',
    description: 'راه‌حل کامل برای نیازهای کسب‌وکار شما با بهترین قیمت.',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
    category: 'نرم‌افزار',
    specifications: [
      'ویژگی 1: رابط کاربری ساده',
      'ویژگی 2: امنیت بالا',
      'ویژگی 3: به‌روزرسانی رایگان',
    ],
  },
  {
    id: 4,
    name: 'محصول نمونه 4',
    description: 'محصولی با تکنولوژی روز برای بهبود عملکرد کسب‌وکار.',
    price: 1800000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'الکترونیک',
    specifications: [
      'ویژگی 1: طراحی مدرن',
      'ویژگی 2: مصرف انرژی پایین',
      'ویژگی 3: نصب آسان',
    ],
  },
  {
    id: 5,
    name: 'محصول نمونه 5',
    description: 'راه‌حل جامع برای چالش‌های کسب‌وکار شما.',
    price: 4200000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'مکانیک',
    specifications: [
      'ویژگی 1: دوام بالا',
      'ویژگی 2: تعمیر و نگهداری آسان',
      'ویژگی 3: گارانتی 3 ساله',
    ],
  },
  {
    id: 6,
    name: 'محصول نمونه 6',
    description: 'نرم‌افزار حرفه‌ای برای مدیریت کسب‌وکار.',
    price: 5500000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
    category: 'نرم‌افزار',
    specifications: [
      'ویژگی 1: گزارش‌گیری پیشرفته',
      'ویژگی 2: پشتیبانی چند زبانه',
      'ویژگی 3: ابری و قابل دسترسی از هر جا',
    ],
  },
]

/**
 * Get all products
 * @returns Promise<Product[]>
 */
export async function getProducts(): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  
  // In a real application, you would make an actual API call here
  // Example:
  // const response = await fetch('/api/products')
  // return response.json()
  
  return mockProducts
}

/**
 * Get a single product by ID
 * @param id - Product ID
 * @returns Promise<Product>
 */
export async function getProductById(id: number): Promise<Product> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  
  // In a real application, you would make an actual API call here
  // Example:
  // const response = await fetch(`/api/products/${id}`)
  // return response.json()
  
  const product = mockProducts.find((p) => p.id === id)
  
  if (!product) {
    throw new Error('Product not found')
  }
  
  return product
}

/**
 * Get products by category
 * @param category - Category name
 * @returns Promise<Product[]>
 */
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 400))
  
  if (category === 'all') {
    return mockProducts
  }
  
  return mockProducts.filter((p) => p.category === category)
}

/**
 * Search products by query
 * @param query - Search query
 * @returns Promise<Product[]>
 */
export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 400))
  
  const lowerQuery = query.toLowerCase()
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  )
}


