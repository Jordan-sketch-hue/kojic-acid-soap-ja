import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <span className="text-xs uppercase tracking-widest text-bordeaux font-semibold">Our Story</span>
      <h1 className="font-playfair text-4xl font-bold mt-2 mb-6">About Kojic Acid Soap JA</h1>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-5">
        <p>
          Kojic Acid Soap JA is Jamaica&apos;s certified distributor of Kojie San skincare products. We&apos;re passionate about helping Jamaicans achieve brighter, more even skin using authentic, proven formulas.
        </p>
        <p>
          With over 10,000 satisfied customers island-wide, we&apos;ve built a reputation on trust, authenticity, and results. Every product we carry is genuine — no knockoffs, no counterfeits.
        </p>
        <p>
          Alongside our distribution of Kojie San, we&apos;ve developed our own <strong>Kojic Glow</strong> line — formulated specifically for Caribbean skin, combining kojic acid with powerful natural ingredients for targeted brightening, dark spot removal, and hydration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-cream rounded-2xl p-6">
          <h3 className="font-playfair font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-gray-500">
            Make authentic, effective brightening skincare accessible to every Jamaican — at fair prices, with reliable island-wide delivery.
          </p>
        </div>
        <div className="bg-cream rounded-2xl p-6">
          <h3 className="font-playfair font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm text-gray-500">
            WhatsApp: <a href="tel:+18765120350" className="text-bordeaux hover:underline">(876) 512-0350</a><br />
            Instagram: <a href="https://instagram.com/kojicacidsoapja" target="_blank" rel="noopener noreferrer" className="text-bordeaux hover:underline">@kojicacidsoapja</a>
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/shop" className="btn-primary px-10 py-3">Shop the Collection</Link>
      </div>
    </div>
  )
}
