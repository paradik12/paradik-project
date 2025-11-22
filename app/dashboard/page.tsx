'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'

export default function DashboardPage() {
  const { locale } = useLocale()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {locale === 'fa' ? 'در حال بارگذاری...' : 'جاري التحميل...'}
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {translations[locale].nav.dashboard}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {locale === 'fa' ? 'خوش آمدید' : 'مرحباً'} {user.name}
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            <strong>{locale === 'fa' ? 'ایمیل:' : 'البريد:'}</strong> {user.email}
          </p>
          <p>
            <strong>
              {locale === 'fa' ? 'نوع حساب:' : 'نوع الحساب:'}
            </strong>{' '}
            {user.role === 'buyer'
              ? locale === 'fa'
                ? 'خریدار'
                : 'مشتر'
              : locale === 'fa'
              ? 'فروشنده'
              : 'بائع'}
          </p>
          {user.companyName && (
            <p>
              <strong>
                {locale === 'fa' ? 'نام شرکت:' : 'اسم الشركة:'}
              </strong>{' '}
              {user.companyName}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

