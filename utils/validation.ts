/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Iranian format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+98|0)?9\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Validate required field
 */
export function isRequired(value: string | number | null | undefined): boolean {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  return value !== null && value !== undefined
}

/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min
}

/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.length <= max
}

/**
 * Sanitize string input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}


