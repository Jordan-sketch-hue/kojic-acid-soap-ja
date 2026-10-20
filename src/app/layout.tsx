import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kojic Acid Soap JA — Certified Kojie San Distributor Jamaica',
  description:
    'Official Kojie San distributor in Jamaica. Shop authentic brightening soaps, creams, serums and more. 10,000+ happy customers. Delivered island-wide.',
  keywords: ['kojic acid soap jamaica', 'kojie san jamaica', 'skin brightening jamaica', 'dark spot removal'],
  openGraph: {
    title: 'Kojic Acid Soap JA',
    description: "Jamaica's trusted Kojie San distributor. Authentic brightening products, island-wide delivery.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
