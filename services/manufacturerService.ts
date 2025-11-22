import { Manufacturer } from '@/types'
import { manufacturers } from '@/data/mockData'

/**
 * Get all manufacturers
 */
export async function getManufacturers(): Promise<Manufacturer[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return manufacturers
}

/**
 * Get manufacturer by ID
 */
export async function getManufacturerById(id: string): Promise<Manufacturer | null> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return manufacturers.find((m) => m.id === id) || null
}

/**
 * Search manufacturers
 */
export async function searchManufacturers(
  query: string,
  locale: 'fa' | 'ar' = 'fa'
): Promise<Manufacturer[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const lowerQuery = query.toLowerCase()
  return manufacturers.filter(
    (m) =>
      m.name[locale].toLowerCase().includes(lowerQuery) ||
      m.description[locale].toLowerCase().includes(lowerQuery)
  )
}

