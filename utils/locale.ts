// Locale and language utilities

export type Locale = 'fa' | 'ar'

export const defaultLocale: Locale = 'fa'

export const locales: Locale[] = ['fa', 'ar']

export const currencyMap = {
  irr: { fa: 'تومان', ar: 'ريال إيراني', symbol: 'IRR' },
  aed: { fa: 'درهم', ar: 'درهم', symbol: 'AED' },
  sar: { fa: 'ریال سعودی', ar: 'ريال سعودي', symbol: 'SAR' },
}

export function getCurrencyLabel(currency: keyof typeof currencyMap, locale: Locale): string {
  return currencyMap[currency][locale]
}

export function formatPrice(price: number, currency: keyof typeof currencyMap, locale: Locale): string {
  const label = getCurrencyLabel(currency, locale)
  
  if (currency === 'irr') {
    // Format Iranian Rial (remove last 3 zeros for Toman)
    const toman = price / 10
    return `${toman.toLocaleString('fa-IR')} ${label}`
  }
  
  return `${price.toLocaleString(locale === 'fa' ? 'fa-IR' : 'ar-SA')} ${label}`
}

