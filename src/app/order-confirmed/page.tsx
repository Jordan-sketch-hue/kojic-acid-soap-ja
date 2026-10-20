import Link from 'next/link'

export default function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="font-playfair text-3xl font-bold mb-3">Order Confirmed!</h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        Thank you for your purchase! We&apos;ll contact you on WhatsApp or phone to confirm delivery details and timing.
      </p>
      <a
        href="https://wa.me/18765120350?text=Hi!%20I%20just%20placed%20an%20order%20and%20wanted%20to%20confirm."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors mb-4"
        style={{ background: '#25D366' }}
      >
        Message Us on WhatsApp
      </a>
      <br />
      <Link href="/shop" className="text-sm text-bordeaux hover:underline">
        Continue Shopping →
      </Link>
    </div>
  )
}
