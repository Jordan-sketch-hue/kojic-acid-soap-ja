import Link from 'next/link'
import { getFeatured } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  const featured = getFeatured()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAF6F1 0%, #f5ede6 50%, #f0ddd5 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-bordeaux font-semibold mb-4">
              Certified Kojie San Distributor · Jamaica
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal leading-tight">
              Brighter Skin,<br />
              <span className="text-bordeaux">Trusted Results</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-md">
              Jamaica&apos;s #1 source for authentic Kojie San products and our own Kojic Glow line. Over 10,000 satisfied customers and counting.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/shop" className="btn-primary px-8 py-3">
                Shop Now
              </Link>
              <a
                href="https://wa.me/18765120350?text=Hi!%20I%27d%20like%20to%20learn%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border-2 border-charcoal text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-colors"
              >
                Chat with Us
              </a>
            </div>
            <div className="flex items-center gap-8 mt-10">
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '100%', label: 'Authentic Products' },
                { number: 'JA', label: 'Island-wide Delivery' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-bordeaux" style={{ opacity: 0.2 }} />}
                  <div className="text-center">
                    <p className="font-playfair text-3xl font-bold text-bordeaux">{stat.number}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 rounded-full flex items-center justify-center" style={{ background: 'rgba(123,45,62,0.08)' }}>
              <div className="text-center p-8">
                <div className="font-playfair text-2xl font-bold text-bordeaux mb-2">Kojic Glow</div>
                <div className="text-sm text-gray-500">Authentic • Natural • Effective</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-bordeaux text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-medium">
          <span>✓ Authentic Kojie San Products</span>
          <span>✓ Delivered Island-wide</span>
          <span>✓ WhatsApp Orders Welcome</span>
          <span>✓ 10,000+ Customers Served</span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-bordeaux font-semibold">Bestsellers</span>
            <h2 className="font-playfair text-3xl font-bold mt-1">Featured Products</h2>
          </div>
          <Link href="/shop" className="text-sm text-bordeaux font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-bordeaux font-semibold">Why Choose Us</span>
            <h2 className="font-playfair text-3xl font-bold mt-1">The Kojic Acid JA Promise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Certified Authentic', body: 'Registered official distributor of Kojie San products in Jamaica. No counterfeits, ever.', icon: '🏆' },
              { title: 'Results Guaranteed', body: 'Trusted by 10,000+ Jamaicans. Our products deliver visible brightening results within weeks.', icon: '✨' },
              { title: 'Island-wide Delivery', body: 'We ship across Jamaica. Order via card or WhatsApp and receive your products at your door.', icon: '🚚' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-playfair font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="font-playfair text-3xl font-bold mb-4">Ready to Glow?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Browse our full collection of brightening soaps, creams, and serums.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="btn-primary px-10 py-3">
            Shop the Collection
          </Link>
          <a
            href="https://wa.me/18765120350"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-lg font-semibold transition-colors text-white"
            style={{ background: '#25D366' }}
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
