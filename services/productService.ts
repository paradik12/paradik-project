import { Product, FilterOptions } from '@/types'
import { products } from '@/data/mockData'

/**
 * Get all products
 */
export async function getProducts(filters?: FilterOptions): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  let filtered = [...products]

  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category)
    }
    if (filters.minPrice !== undefined) {
      const currency = filters.currency || 'irr'
      filtered = filtered.filter(
        (p) => (p.price[currency] || p.price.irr) >= filters.minPrice!
      )
    }
    if (filters.maxPrice !== undefined) {
      const currency = filters.currency || 'irr'
      filtered = filtered.filter(
        (p) => (p.price[currency] || p.price.irr) <= filters.maxPrice!
      )
    }
    if (filters.minRating !== undefined) {
      filtered = filtered.filter((p) => p.rating >= filters.minRating!)
    }
    if (filters.manufacturerId) {
      filtered = filtered.filter((p) => p.manufacturerId === filters.manufacturerId)
    }
    if (filters.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === filters.inStock)
    }
  }

  return filtered
}

/**
 * Get product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return products.find((p) => p.id === id) || null
}

/**
 * Search products
 */
export async function searchProducts(
  query: string,
  locale: 'fa' | 'ar' = 'fa'
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name[locale].toLowerCase().includes(lowerQuery) ||
      p.description[locale].toLowerCase().includes(lowerQuery) ||
      p.manufacturerName[locale].toLowerCase().includes(lowerQuery)
  )
}
