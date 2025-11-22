'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-primary-600 border-b-2 border-primary-600'
      : 'text-gray-700 hover:text-primary-600'
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            پارادیک
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${isActive('/')}`}
            >
              خانه
            </Link>
            <Link
              href="/products"
              className={`font-medium transition-colors ${isActive('/products')}`}
            >
              محصولات
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${isActive('/about')}`}
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${isActive('/contact')}`}
            >
              تماس با ما
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-primary-600">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}


