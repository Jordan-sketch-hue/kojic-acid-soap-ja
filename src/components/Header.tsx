'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart'
import CartDrawer from './CartDrawer'

export default function Header() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const nav = [
    { href: '/shop', label: 'Shop' },
    { href: '/shop?brand=KOJIE+SAN', label: 'Kojie San' },
    { href: '/shop?brand=KOJIC+GLOW', label: 'Kojic Glow' },
    { href: '/wholesale', label: 'Wholesale' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-bordeaux/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl font-bold text-charcoal tracking-tight">
            Kojic Acid<span className="text-bordeaux"> JA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="hover:text-bordeaux transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:text-bordeaux transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-bordeaux text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-bordeaux/10 bg-cream">
            {nav.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="block px-6 py-3 text-sm hover:bg-bordeaux/5 hover:text-bordeaux transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
