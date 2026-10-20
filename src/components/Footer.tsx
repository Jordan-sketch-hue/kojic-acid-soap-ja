import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-playfair text-white text-lg font-semibold mb-3">
            Kojic Acid <span className="text-bordeaux">JA</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Jamaica&apos;s certified Kojie San distributor. Authentic brightening products trusted by 10,000+ customers island-wide.
          </p>
          <p className="text-sm mt-3">
            <a href="tel:+18765120350" className="hover:text-white transition-colors">
              (876) 512-0350
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/shop?brand=KOJIE+SAN" className="hover:text-white transition-colors">Kojie San</Link></li>
            <li><Link href="/shop?brand=KOJIC+GLOW" className="hover:text-white transition-colors">Kojic Glow</Link></li>
            <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://wa.me/18765120350" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href="https://instagram.com/kojicacidsoapja" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @kojicacidsoapja
              </a>
            </li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-[#666]">
          © 2026 kojicacidsoapja.com — All rights reserved.
        </p>
      </div>
    </footer>
  )
}
