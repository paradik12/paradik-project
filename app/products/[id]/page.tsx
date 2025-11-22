'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getProductById } from '@/services/productService'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  specifications?: string[]
}

export default function ProductDetailsPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      loadProduct()
    }
  }, [params.id])

  const loadProduct = async () => {
    try {
      setLoading(true)
      const data = await getProductById(Number(params.id))
      setProduct(data)
    } catch (error) {
      console.error('Error loading product:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">محصول یافت نشد</h1>
        <Link
          href="/products"
          className="text-primary-600 hover:text-primary-700"
        >
          بازگشت به لیست محصولات
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/products"
        className="text-primary-600 hover:text-primary-700 mb-6 inline-block"
      >
        ← بازگشت به لیست محصولات
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="mb-4">
            <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          <p className="text-3xl font-bold text-primary-600 mb-6">
            {product.price.toLocaleString('fa-IR')} تومان
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">مشخصات</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors flex-1">
              افزودن به سبد خرید
            </button>
            <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
              تماس با فروشنده
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


