import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          به پلتفرم B2B پارادیک خوش آمدید
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          راه‌حل‌های حرفه‌ای برای کسب‌وکار شما
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            مشاهده محصولات
          </Link>
          <Link
            href="/about"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            درباره ما
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">سریع و کارآمد</h3>
          <p className="text-gray-600">
            راه‌حل‌های سریع و کارآمد برای رشد کسب‌وکار شما
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-xl font-semibold mb-2">حرفه‌ای</h3>
          <p className="text-gray-600">
            خدمات حرفه‌ای با کیفیت بالا برای مشتریان B2B
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-2">پشتیبانی کامل</h3>
          <p className="text-gray-600">
            پشتیبانی 24/7 برای اطمینان از رضایت شما
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">آماده شروع هستید؟</h2>
        <p className="text-xl mb-6 opacity-90">
          با ما تماس بگیرید و از خدمات حرفه‌ای ما بهره‌مند شوید
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
        >
          تماس با ما
        </Link>
      </section>
    </div>
  )
}


