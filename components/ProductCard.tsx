import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative w-full h-48 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-primary-600">
              {product.price.toLocaleString('fa-IR')} تومان
            </span>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              مشاهده جزئیات →
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

