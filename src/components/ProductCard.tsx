'use client'

import { ShoppingBag, Check } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { formatJMD } from '@/lib/wipay'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-bordeaux/5">
      <div className="aspect-square bg-cream overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const el = e.target as HTMLImageElement
            el.src = '/placeholder-product.jpg'
          }}
        />
      </div>
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-bordeaux/70">
          {product.brand}
        </span>
        <h3 className="font-playfair font-semibold text-base mt-1 leading-snug">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-bordeaux text-lg">{formatJMD(product.price)}</span>
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              added
                ? 'bg-green-500 text-white'
                : product.inStock
                ? 'bg-bordeaux text-white hover:bg-bordeaux/90'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {added ? (
              <><Check size={14} /> Added</>
            ) : (
              <><ShoppingBag size={14} /> {product.inStock ? 'Add' : 'Sold Out'}</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
