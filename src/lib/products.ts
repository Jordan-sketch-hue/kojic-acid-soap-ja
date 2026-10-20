export type Product = {
  id: string
  name: string
  brand: 'KOJIC GLOW' | 'KOJIE SAN'
  category: string
  price: number
  description: string
  benefits: string[]
  image: string
  inStock: boolean
  featured?: boolean
}

export const products: Product[] = [
  // KOJIC GLOW — own brand
  {
    id: 'kg-spot-remover',
    name: 'Spot Remover Cream',
    brand: 'KOJIC GLOW',
    category: 'Creams',
    price: 3500,
    description: 'Targeted formula that visibly fades dark spots, hyperpigmentation and uneven skin tone.',
    benefits: ['Fades dark spots', 'Brightens complexion', 'Hydrating formula'],
    image: '/products/kg-spot-remover.jpg',
    inStock: true,
    featured: true,
  },
  {
    id: 'kg-brightening-soap',
    name: 'Brightening Kojic Soap',
    brand: 'KOJIC GLOW',
    category: 'Soaps',
    price: 1800,
    description: 'Daily cleansing bar infused with kojic acid for a brighter, more even complexion.',
    benefits: ['Deep cleansing', 'Brightening', 'Suitable for all skin types'],
    image: '/products/kg-brightening-soap.jpg',
    inStock: true,
    featured: true,
  },
  {
    id: 'kg-serum',
    name: 'Kojic Glow Serum',
    brand: 'KOJIC GLOW',
    category: 'Serums',
    price: 4200,
    description: 'Concentrated brightening serum with kojic acid and Vitamin C for a luminous glow.',
    benefits: ['Fast-absorbing', 'Vitamin C enriched', 'Targets stubborn dark spots'],
    image: '/products/kg-serum.jpg',
    inStock: true,
  },
  {
    id: 'kg-body-lotion',
    name: 'Brightening Body Lotion',
    brand: 'KOJIC GLOW',
    category: 'Lotions',
    price: 3000,
    description: 'Full-body moisturizer with kojic acid for an all-over even, radiant skin tone.',
    benefits: ['Full body coverage', '24hr moisture', 'Non-greasy formula'],
    image: '/products/kg-body-lotion.jpg',
    inStock: true,
  },
  {
    id: 'kg-dark-spot-combo',
    name: 'Dark Spot Combo',
    brand: 'KOJIC GLOW',
    category: 'Bundles',
    price: 4500,
    description: 'Complete dark spot system: Soap + Cream for maximum brightening results.',
    benefits: ['Value bundle', 'Synergistic formula', 'Day & night routine'],
    image: '/products/kg-dark-spot-combo.jpg',
    inStock: true,
    featured: true,
  },
  // KOJIE SAN — distributor line
  {
    id: 'ks-original-soap',
    name: 'Kojie San Skin Brightening Soap',
    brand: 'KOJIE SAN',
    category: 'Soaps',
    price: 1500,
    description: 'The original Philippine kojic acid soap trusted by millions worldwide.',
    benefits: ['Authentic formula', 'Proven brightening', 'Dermatologist tested'],
    image: '/products/ks-original-soap.jpg',
    inStock: true,
    featured: true,
  },
  {
    id: 'ks-men-soap',
    name: 'Kojie San Men Soap',
    brand: 'KOJIE SAN',
    category: 'Soaps',
    price: 1600,
    description: 'Kojic acid soap formulated specifically for men\'s skin texture and concerns.',
    benefits: ['Men\'s formula', 'Antibacterial', 'Brightening + cleansing'],
    image: '/products/ks-men-soap.jpg',
    inStock: true,
  },
  {
    id: 'ks-toner',
    name: 'Kojie San Skin Lightening Toner',
    brand: 'KOJIE SAN',
    category: 'Toners',
    price: 2800,
    description: 'Refreshing toner that tightens pores and brightens with every swipe.',
    benefits: ['Pore-minimizing', 'Alcohol-free', 'Brightening toner'],
    image: '/products/ks-toner.jpg',
    inStock: true,
  },
  {
    id: 'ks-face-cream',
    name: 'Kojie San Face Cream',
    brand: 'KOJIE SAN',
    category: 'Creams',
    price: 3200,
    description: 'Rich face cream with Kojie San\'s trusted brightening complex and SPF protection.',
    benefits: ['SPF protection', 'Brightening', 'Moisturizing'],
    image: '/products/ks-face-cream.jpg',
    inStock: true,
  },
  {
    id: 'ks-lotion',
    name: 'Kojie San Body Lotion',
    brand: 'KOJIE SAN',
    category: 'Lotions',
    price: 2500,
    description: 'Lightweight body lotion with authentic Kojie San brightening formula.',
    benefits: ['Fast absorbing', 'All-day moisture', 'Brightening'],
    image: '/products/ks-lotion.jpg',
    inStock: true,
  },
  {
    id: 'ks-duo-pack',
    name: 'Kojie San Duo Pack',
    brand: 'KOJIE SAN',
    category: 'Bundles',
    price: 2800,
    description: 'Two Kojie San soaps at a bundle price — stock up and save.',
    benefits: ['2 soaps', 'Value pack', 'Authentic Kojie San'],
    image: '/products/ks-duo-pack.jpg',
    inStock: true,
  },
]

export const getFeatured = () => products.filter(p => p.featured && p.inStock)
export const getByBrand = (brand: Product['brand']) => products.filter(p => p.brand === brand)
export const getByCategory = (cat: string) => products.filter(p => p.category === cat)
export const getById = (id: string) => products.find(p => p.id === id)
export const categories = [...new Set(products.map(p => p.category))]
