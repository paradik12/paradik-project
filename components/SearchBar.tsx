'use client'

import { useState, FormEvent } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/utils/translations'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({
  placeholder,
  onSearch,
  className = '',
}: SearchBarProps) {
  const { locale } = useLocale()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const t = translations[locale]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query)
      } else {
        router.push(`/products?search=${encodeURIComponent(query)}`)
      }
      setQuery('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || t.home.searchPlaceholder}
        className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
    </form>
  )
}
