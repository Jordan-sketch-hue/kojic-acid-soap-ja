import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const status = formData.get('status')
  const orderId = formData.get('order_id')
  const total = formData.get('total')

  // Log for records — replace with DB write once Supabase is connected
  console.log('WiPay callback:', { status, orderId, total })

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://kojicacidsoapja.com'

  if (status === 'success') {
    return NextResponse.redirect(`${base}/order-confirmed?id=${orderId}`)
  }
  return NextResponse.redirect(`${base}/checkout?error=payment_failed`)
}
