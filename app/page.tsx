'use client'

import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import HowItWorks from '@/components/home/HowItWorks'
import SupplierHighlight from '@/components/home/SupplierHighlight'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <SupplierHighlight />
      <Newsletter />
    </div>
  )
}
