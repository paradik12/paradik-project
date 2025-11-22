'use client'

import { Shield, TrendingUp, Users, CheckCircle, Search, Handshake } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'جستجو و پیدا کردن',
    description: 'جستجوی آسان در بین هزاران محصول و تولیدکننده معتبر',
  },
  {
    icon: Handshake,
    title: 'ارتباط مستقیم',
    description: 'ارتباط مستقیم با تولیدکنندگان و مذاکره در مورد قیمت و شرایط',
  },
  {
    icon: Shield,
    title: 'خرید امن',
    description: 'سیستم پرداخت امن و تضمین کیفیت محصولات برای خرید مطمئن',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'رشد کسب‌وکار',
    description: 'افزایش فروش و دسترسی به بازارهای جدید با ابزارهای بازاریابی پیشرفته',
  },
  {
    icon: Users,
    title: 'شبکه گسترده',
    description: 'اتصال به هزاران تولیدکننده و خریدار در سراسر کشور و منطقه',
  },
  {
    icon: CheckCircle,
    title: 'کیفیت تضمین شده',
    description: 'تضمین کیفیت محصولات و بررسی دقیق تولیدکنندگان قبل از تایید',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* How It Works */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              چگونه کار می‌کند؟
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              سه مرحله ساده برای شروع تجارت B2B
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us */}
        <div>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              چرا پارادیک؟
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              پلتفرم پیشرو برای تجارت B2B با ویژگی‌های منحصر به فرد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 dark:group-hover:bg-primary-600 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

