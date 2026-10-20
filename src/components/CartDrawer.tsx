'use client'

import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { formatJMD } from '@/lib/wipay'

type Props = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, remove, update, total, count } = useCart()

  const waText = encodeURIComponent(
    `Hi! I'd like to order:\n${items.map(i => `• ${i.product.name} x${i.quantity} — ${formatJMD(i.product.price * i.quantity)}`).join('\n')}\n\nTotal: ${formatJMD(total)}`
  )
  const waUrl = `https://wa.me/18765120350?text=${waText}`

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-playfair text-lg font-semibold">Your Cart ({count})</h2>
          <button onClick={onClose} className="p-1 hover:text-bordeaux transition-colors">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-8">
            <ShoppingBag size={48} className="text-bordeaux/20" />
            <p className="text-sm text-gray-500">Your cart is empty</p>
            <button
              onClick={onClose}
              className="btn-primary text-sm px-6 py-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-cream rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder-product.jpg' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-bordeaux font-semibold mt-0.5">{formatJMD(product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => update(product.id, quantity - 1)}
                        className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:border-bordeaux transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-4 text-center">{quantity}</span>
                      <button
                        onClick={() => update(product.id, quantity + 1)}
                        className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:border-bordeaux transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(product.id)}
                    className="text-gray-300 hover:text-red-400 transition-colors self-start"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t px-5 py-4 space-y-3">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-bordeaux">{formatJMD(total)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="btn-primary w-full text-center block py-3 text-sm"
              >
                Pay with Card (WiPay)
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block py-3 text-sm rounded-lg border-2 border-[#25D366] text-[#25D366] font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
