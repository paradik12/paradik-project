'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import { useTheme } from '@/contexts/ThemeContext'
import { translations } from '@/utils/translations'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[locale]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            پارادیک
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/products"
              className={`font-medium transition-colors ${
                isActive('/products')
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {t.nav.products}
            </Link>
            <Link
              href="/manufacturers"
              className={`font-medium transition-colors ${
                isActive('/manufacturers')
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {t.nav.manufacturers}
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {locale === 'fa' ? 'العربية' : 'فارسی'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
              >
                {t.nav.login}
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                {t.nav.register}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {t.nav.products}
              </Link>
              <Link
                href="/manufacturers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {t.nav.manufacturers}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {t.nav.contact}
              </Link>
              <div className="flex gap-2 px-4 pt-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg"
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-primary-600 rounded-lg"
                >
                  {t.nav.register}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

