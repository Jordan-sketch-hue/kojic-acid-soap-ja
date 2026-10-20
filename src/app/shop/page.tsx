'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

function ShopInner() {
  const searchParams = useSearchParams()
  const brandParam = searchParams.get('brand') || 'All'
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeBrand, setActiveBrand] = useState<string>(brandParam)

  const filtered = useMemo(() => {
    return products.filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory
      const brandMatch = activeBrand === 'All' || p.brand === activeBrand
      return catMatch && brandMatch
    })
  }, [activeCategory, activeBrand])

  const filterBtn = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
      active
        ? 'bg-bordeaux text-white'
        : 'bg-white text-charcoal border border-gray-200 hover:border-bordeaux'
    }`

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="font-playfair text-4xl font-bold">All Products</h1>
        <p className="text-gray-500 mt-2">Authentic brightening products delivered island-wide</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {['All', 'KOJIE SAN', 'KOJIC GLOW'].map(b => (
          <button key={b} onClick={() => setActiveBrand(b)} className={filterBtn(activeBrand === b)}>
            {b}
          </button>
        ))}
        <div className="w-px h-6 bg-gray-200 mx-1 hidden md:block" />
        {['All', ...categories].map(c => (
          <button key={c} onClick={() => setActiveCategory(c)} className={filterBtn(activeCategory === c)}>
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-10 text-gray-400">Loading...</div>}>
      <ShopInner />
    </Suspense>
  )
}
