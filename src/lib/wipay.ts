export type WiPayOrderItem = {
  name: string
  quantity: number
  price: number
}

export type WiPayPayload = {
  total: number
  items: WiPayOrderItem[]
  customerName: string
  customerPhone: string
  orderId: string
}

export function buildWiPayForm(payload: WiPayPayload) {
  const accountNumber = process.env.WIPAY_ACCOUNT_NUMBER!
  const apiKey = process.env.WIPAY_API_KEY!
  const environment = process.env.WIPAY_ENV || 'sandbox'
  const baseUrl = environment === 'live'
    ? 'https://wipayfinancial.com/v1/gateway'
    : 'https://sandbox.wipayfinancial.com/v1/gateway'

  return {
    url: baseUrl,
    fields: {
      account_number: accountNumber,
      avs: '0',
      card_type: 'card',
      currency: 'JMD',
      environment,
      fee_structure: 'customer_pay',
      method: 'POST',
      order_id: payload.orderId,
      origin: process.env.NEXT_PUBLIC_SITE_URL || 'https://kojicacidsoapja.com',
      response_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/wipay/callback`,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmed`,
      total: payload.total.toString(),
    },
  }
}

export function generateOrderId() {
  return `KOJIC-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
}

export function formatJMD(amount: number) {
  return new Intl.NumberFormat('en-JM', {
    style: 'currency',
    currency: 'JMD',
    minimumFractionDigits: 0,
  }).format(amount)
}
