'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Youtube, ArrowLeft } from 'lucide-react'

export default function Footer() {
  const { locale } = useLocale()

  const footerLinks = {
    company: [
      { label: 'درباره ما', href: '/about' },
      { label: 'تماس با ما', href: '/contact' },
      { label: 'وبلاگ', href: '/blog' },
      { label: 'شغل‌ها', href: '/careers' },
      { label: 'اخبار', href: '/news' },
    ],
    products: [
      { label: 'محصولات', href: '/products' },
      { label: 'دسته‌بندی‌ها', href: '/categories' },
      { label: 'تولیدکنندگان', href: '/manufacturers' },
      { label: 'محصولات برتر', href: '/products?featured=true' },
      { label: 'محصولات جدید', href: '/products?sort=newest' },
    ],
    support: [
      { label: 'مرکز راهنما', href: '/help' },
      { label: 'سوالات متداول', href: '/faq' },
      { label: 'پشتیبانی', href: '/support' },
      { label: 'راهنمای خرید', href: '/buying-guide' },
      { label: 'راهنمای فروش', href: '/selling-guide' },
    ],
    legal: [
      { label: 'حریم خصوصی', href: '/privacy' },
      { label: 'شرایط استفاده', href: '/terms' },
      { label: 'سیاست بازگشت', href: '/return-policy' },
      { label: 'گواهینامه‌ها', href: '/certifications' },
      { label: 'قوانین و مقررات', href: '/regulations' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-primary-400 group-hover:to-primary-300 transition-all duration-300">
                  Paradik
                </h3>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm text-sm md:text-base">
              پلتفرم B2B پیشرو برای اتصال تولیدکنندگان ایرانی با خریداران در سراسر جهان. 
              تجارت آسان، سریع و مطمئن.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-700 dark:hover:bg-gray-800 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 rounded-lg text-xs font-medium text-gray-300 border border-gray-700">
                ✓ تایید شده
              </div>
              <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 rounded-lg text-xs font-medium text-gray-300 border border-gray-700">
                🔒 امن
              </div>
              <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 rounded-lg text-xs font-medium text-gray-300 border border-gray-700">
                ⭐ معتبر
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              شرکت
              <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm leading-relaxed flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              محصولات
              <span className="absolute bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm leading-relaxed flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              پشتیبانی
              <span className="absolute bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm leading-relaxed flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 text-white relative">
              قوانین
              <span className="absolute bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm leading-relaxed flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-12 border-t border-gray-800 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  آدرس
                </h5>
                <p className="text-white leading-relaxed">
                  تهران، خیابان ولیعصر، پلاک 123
                  <br />
                  ایران
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  تلفن
                </h5>
                <a
                  href="tel:+982112345678"
                  className="text-white hover:text-primary-400 transition-colors duration-300 block"
                >
                  +98-21-12345678
                </a>
                <a
                  href="tel:+989123456789"
                  className="text-white hover:text-primary-400 transition-colors duration-300 block mt-1"
                >
                  +98-912-345-6789
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  ایمیل
                </h5>
                <a
                  href="mailto:info@paradik.com"
                  className="text-white hover:text-primary-400 transition-colors duration-300 block"
                >
                  info@paradik.com
                </a>
                <a
                  href="mailto:support@paradik.com"
                  className="text-white hover:text-primary-400 transition-colors duration-300 block mt-1"
                >
                  support@paradik.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 dark:border-gray-800 bg-gray-950 dark:bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Paradik. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span>طراحی شده با</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>در ایران</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
