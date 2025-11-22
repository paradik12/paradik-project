'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, send to API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Mail className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            در خبرنامه ما عضو شوید
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            آخرین اخبار، محصولات جدید و پیشنهادات ویژه را دریافت کنید
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="آدرس ایمیل شما"
                required
                className="w-full px-6 py-4 pr-12 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <span>ارسال شد!</span>
                </>
              ) : (
                <>
                  <span>عضویت</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-200 text-sm">
              ✓ با موفقیت عضو خبرنامه شدید!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

