'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun, Menu, X, Globe, LogIn, UserPlus, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: '/', label: 'خانه' },
    { href: '/categories', label: 'دسته‌بندی‌ها' },
    { href: '/products', label: 'محصولات' },
    { href: '/manufacturers', label: 'تولیدکنندگان' },
    { href: '/about', label: 'درباره ما' },
    { href: '/contact', label: 'تماس با ما' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white dark:bg-gray-900 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent group-hover:from-primary-600 group-hover:to-primary-700 dark:group-hover:from-primary-300 dark:group-hover:to-primary-400 transition-all duration-300">
              Paradik
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50 dark:border-gray-700/50">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-700 shadow-md scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/60 dark:hover:bg-gray-700/60'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></span>
                  )}
                  {!isActive(item.href) && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-primary-500/10 transition-all duration-300"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions - Right */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
              aria-label="Toggle language"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-primary-500/5 transition-all duration-300"></span>
              <Globe className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden md:inline relative z-10">
                {locale === 'fa' ? 'العربية' : 'فارسی'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-primary-500/5 transition-all duration-300"></span>
              <div className="relative z-10 group-hover:rotate-180 transition-transform duration-500">
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-all duration-300"></span>
                <LogIn className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                <span className="relative z-10">ورود</span>
              </Link>
              <Link
                href="/auth/register"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <UserPlus className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">ثبت‌نام</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 relative overflow-hidden group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-primary-500/5 transition-all duration-300"></span>
              <div className="relative z-10">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 border-t border-gray-200 dark:border-gray-700">
            {/* Mobile Navigation Items */}
            <div className="flex flex-col gap-2 mb-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3.5 font-medium rounded-lg transition-all duration-300 transform ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border-r-4 border-primary-500 shadow-sm scale-[1.02]'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-2 active:scale-95'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {isActive(item.href) && (
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    )}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              {/* Language Toggle - Mobile */}
              <button
                onClick={() => {
                  toggleLocale()
                  setMobileMenuOpen(false)
                }}
                className="flex items-center justify-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95 group"
              >
                <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>{locale === 'fa' ? 'العربية' : 'فارسی'}</span>
              </button>

              {/* Theme Toggle - Mobile */}
              <button
                onClick={() => {
                  toggleTheme()
                }}
                className="flex items-center justify-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95 group"
              >
                <div className="group-hover:rotate-180 transition-transform duration-500">
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </div>
                <span>{theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'}</span>
              </button>

              {/* Auth Buttons - Mobile */}
              <div className="flex gap-3 pt-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 active:scale-95"
                >
                  <LogIn className="w-4 h-4" />
                  ورود
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  ثبت‌نام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
