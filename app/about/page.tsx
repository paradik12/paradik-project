'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function AboutPage() {
  const { locale } = useLocale()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {locale === 'fa' ? 'درباره ما' : 'من نحن'}
      </h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {locale === 'fa' ? 'ما کی هستیم؟' : 'من نحن؟'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {locale === 'fa'
              ? 'پارادیک یک پلتفرم B2B پیشرو است که تولیدکنندگان ایرانی را با خریداران در سراسر جهان متصل می‌کند. ما با تمرکز بر بازارهای عربی و منطقه، راه‌حل‌های جامعی برای تجارت B2B ارائه می‌دهیم.'
              : 'باراديك هي منصة B2B رائدة تربط المصنعين الإيرانيين بالمشترين في جميع أنحاء العالم. مع التركيز على الأسواق العربية والإقليمية، نقدم حلولاً شاملة لتجارة B2B.'}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {locale === 'fa' ? 'ماموریت ما' : 'مهمتنا'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {locale === 'fa'
              ? 'ماموریت ما این است که با ارائه راه‌حل‌های نوآورانه و کارآمد، به کسب‌وکارها کمک کنیم تا در بازار رقابتی امروز موفق شوند. ما به کیفیت، نوآوری و رضایت مشتری متعهد هستیم.'
              : 'مهمتنا هي مساعدة الشركات على النجاح في السوق التنافسية اليوم من خلال تقديم حلول مبتكرة وفعالة. نحن ملتزمون بالجودة والابتكار ورضا العملاء.'}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {locale === 'fa' ? 'ارزش‌های ما' : 'قيمنا'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'fa' ? 'کیفیت' : 'الجودة'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {locale === 'fa'
                  ? 'ما به کیفیت بالای محصولات و خدمات خود متعهد هستیم.'
                  : 'نحن ملتزمون بجودة عالية للمنتجات والخدمات.'}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'fa' ? 'نوآوری' : 'الابتكار'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {locale === 'fa'
                  ? 'همواره در جستجوی راه‌حل‌های نوآورانه برای چالش‌های کسب‌وکار هستیم.'
                  : 'نبحث دائمًا عن حلول مبتكرة لتحديات الأعمال.'}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'fa' ? 'اعتماد' : 'الثقة'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {locale === 'fa'
                  ? 'اعتماد مشتریان ما بزرگترین سرمایه ماست.'
                  : 'ثقة عملائنا هي أكبر أصولنا.'}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'fa' ? 'پشتیبانی' : 'الدعم'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {locale === 'fa'
                  ? 'پشتیبانی کامل و 24/7 برای اطمینان از رضایت شما.'
                  : 'دعم كامل و 24/7 لضمان رضاكم.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
