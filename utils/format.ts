/**
 * Format number to Persian/Farsi locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('fa-IR').format(num)
}

/**
 * Format currency (Toman)
 */
export function formatCurrency(amount: number): string {
  return `${formatNumber(amount)} تومان`
}

/**
 * Format date to Persian date
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/**
 * Format date and time to Persian
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}


