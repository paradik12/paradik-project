'use client'

import Link from 'next/link'
import { Package, UserPlus, ArrowLeft } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
            بازار آنلاین تامین کالا برای تولیدکنندگان و عمده‌فروشان
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto">
            اتصال مستقیم تولیدکنندگان به خریداران عمده در یک پلتفرم امن و قابل اعتماد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              <Package className="w-5 h-5" />
              مشاهده محصولات
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              <UserPlus className="w-5 h-5" />
              ثبت‌نام فروشندگان
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

