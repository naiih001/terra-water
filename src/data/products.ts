export interface Product {
  slug: string
  name: string
  size: string
  price: number
  description: string
  longDescription: string
  features: string[]
  badge?: string
}

export const products: Product[] = [
  {
    slug: '330ml',
    name: '330 ml',
    size: '330\u2009ml',
    price: 1.80,
    description: 'Perfect for a single serving. Light, portable, and endlessly refreshing.',
    longDescription:
      'Our smallest bottle is designed for life on the move. Tucked into a bag or held in hand, it brings the purity of mountain spring water wherever you go. The compact 330 ml size fits every cup holder and every moment — from morning commutes to afternoon hikes.',
    features: [
      'Ideal for on-the-go hydration',
      'Fits standard cup holders',
      '100% recyclable glass bottle',
      'Naturally pH balanced at 7.4',
    ],
  },
  {
    slug: '750ml',
    name: '750 ml',
    size: '750\u2009ml',
    price: 2.40,
    description: 'The everyday essential. At your desk, at the table, in your day.',
    longDescription:
      'The 750 ml bottle is our most versatile size. It sits comfortably on a dinner table, in a work bag, or next to a yoga mat. Generous enough to share, practical enough to keep for yourself. This is the bottle that becomes part of your daily rhythm.',
    features: [
      'Perfect for desk or dinner table',
      'Generous everyday portion',
      'Premium glass with minimalist label',
      'Sourced and bottled at origin',
    ],
  },
  {
    slug: '15l',
    name: '1.5 L',
    size: '1.5\u2009L',
    price: 3.20,
    description: 'For when one glass is not enough. Share it or save it for later.',
    longDescription:
      'Our largest bottle is made for sharing, for long dinners, for days when thirst runs deep. The 1.5 L format brings the table together — a centrepiece that pours pure mountain water into every glass. It is also the most sustainable choice, using less glass per litre of water.',
    features: [
      'Best value per litre',
      'Ideal for sharing at meals',
      'Lower glass-to-water ratio',
      'Sealed at source for lasting freshness',
    ],
  },
  {
    slug: 'case-330',
    name: 'Case of 12 — 330 ml',
    size: '12 \u00d7 330\u2009ml',
    price: 18.00,
    description: 'Stock the fridge. Twelve bottles of perfectly portioned spring water.',
    longDescription:
      'A full case of our 330 ml bottles, ready for the week ahead. Whether you are stocking the office fridge, packing for a trip, or simply making sure you never run out, this case delivers twelve individually-sized bottles of pure mountain spring water.',
    features: [
      '12 bottles per case',
      'Save 17% vs single bottles',
      'Recyclable cardboard packaging',
      'Delivered to your door',
    ],
    badge: 'Best value',
  },
  {
    slug: 'case-mixed',
    name: 'Mixed Case — 6 × 750 ml + 6 × 1.5 L',
    size: 'Mixed',
    price: 28.00,
    description: 'The best of both worlds. Everyday bottles and sharing bottles, together.',
    longDescription:
      'Can not decide? This mixed case gives you six 750 ml bottles for daily hydration and six 1.5 L bottles for when company comes over. Every size, every occasion — all the pure mountain spring water you need, delivered in one convenient case.',
    features: [
      '6 × 750 ml + 6 × 1.5 L',
      'Save 20% vs individual bottles',
      'Perfect variety for home',
      'Recyclable packaging',
    ],
    badge: 'Popular',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
