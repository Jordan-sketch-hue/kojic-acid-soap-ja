export default function WholesalePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <span className="text-xs uppercase tracking-widest text-bordeaux font-semibold">For Retailers & Resellers</span>
      <h1 className="font-playfair text-4xl font-bold mt-2 mb-4">Wholesale Pricing</h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        We offer competitive wholesale pricing for salons, spas, pharmacies, and independent resellers across Jamaica.
        Minimum order quantities apply.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          { tier: 'Starter', units: '12+ units', discount: '15% off', highlight: false },
          { tier: 'Trade', units: '25+ units', discount: '25% off', highlight: true },
          { tier: 'Bulk', units: '50+ units', discount: '35% off', highlight: false },
        ].map(t => (
          <div
            key={t.tier}
            className={`border-2 rounded-2xl p-6 text-center ${t.highlight ? 'border-bordeaux shadow-md' : 'border-gray-200'}`}
          >
            {t.highlight && (
              <span className="text-xs uppercase tracking-widest text-bordeaux font-semibold block mb-1">Most Popular</span>
            )}
            <h3 className="font-playfair text-xl font-semibold">{t.tier}</h3>
            <p className="text-sm text-gray-500 mt-1">{t.units}</p>
            <p className="text-bordeaux font-bold text-2xl mt-3">{t.discount}</p>
          </div>
        ))}
      </div>

      <div className="bg-cream rounded-2xl p-8 text-center">
        <h2 className="font-playfair text-2xl font-semibold mb-3">Get a Custom Quote</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Message us on WhatsApp with your business details and order requirements.
        </p>
        <a
          href="https://wa.me/18765120350?text=Hi!%20I%27m%20interested%20in%20wholesale%20pricing%20for%20Kojic%20Acid%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 text-white font-semibold rounded-lg transition-colors"
          style={{ background: '#25D366' }}
        >
          WhatsApp for Wholesale
        </a>
      </div>
    </div>
  )
}
