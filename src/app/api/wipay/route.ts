import { NextRequest, NextResponse } from 'next/server'
import { buildWiPayForm, type WiPayPayload } from '@/lib/wipay'

export async function POST(req: NextRequest) {
  try {
    const payload: WiPayPayload = await req.json()
    const { url, fields } = buildWiPayForm(payload)

    // POST to WiPay to get a redirect URL
    const formData = new URLSearchParams(fields)
    const wipayRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    const text = await wipayRes.text()

    // WiPay returns a URL string or JSON with a redirect field
    let redirectUrl: string
    try {
      const json = JSON.parse(text)
      redirectUrl = json.url || json.redirect_url || json.payment_url
    } catch {
      redirectUrl = text.trim()
    }

    if (!redirectUrl || !redirectUrl.startsWith('http')) {
      return NextResponse.json({ error: 'Invalid response from payment gateway' }, { status: 502 })
    }

    return NextResponse.json({ url: redirectUrl })
  } catch (err: any) {
    console.error('WiPay error:', err)
    return NextResponse.json({ error: 'Payment gateway error' }, { status: 500 })
  }
}
