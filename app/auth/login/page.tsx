'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'

export default function LoginPage() {
  const { locale } = useLocale()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'buyer' as 'buyer' | 'seller',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Mock authentication
    if (formData.email && formData.password) {
      // In real app, make API call here
      localStorage.setItem('user', JSON.stringify({ email: formData.email, role: formData.role }))
      router.push('/dashboard')
    } else {
      setError(locale === 'fa' ? 'لطفا تمام فیلدها را پر کنید' : 'يرجى ملء جميع الحقول')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {translations[locale].nav.login}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {locale === 'fa' ? 'نوع حساب' : 'نوع الحساب'}
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="buyer">
                {locale === 'fa' ? 'خریدار' : 'مشتر'}
              </option>
              <option value="seller">
                {locale === 'fa' ? 'فروشنده' : 'بائع'}
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {locale === 'fa' ? 'ایمیل' : 'البريد الإلكتروني'}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {locale === 'fa' ? 'رمز عبور' : 'كلمة المرور'}
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium mb-4"
          >
            {translations[locale].nav.login}
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400">
            {locale === 'fa' ? 'حساب کاربری ندارید؟' : 'ليس لديك حساب؟'}{' '}
            <Link
              href="/auth/register"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {translations[locale].nav.register}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

