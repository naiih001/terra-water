import { useSignal } from '@preact/signals'
import { products } from '../../data/products.js'
import { useInView } from '../../hooks/useInView.js'
import { addToCart } from '../../stores/cart.js'
import { BottleSvg } from './BottleSvg.jsx'
import type { Product } from '../../data/products.js'
import './Shop.css'

const categoryLabels: Record<string, string> = {
  '330ml': 'Single',
  '750ml': 'Single',
  '15l': 'Single',
  'case-330': 'Case',
  'case-mixed': 'Case',
}

const categories = ['All', 'Single', 'Case']

function filterProducts(category: string): Product[] {
  if (category === 'All') return products
  return products.filter((p) => categoryLabels[p.slug] === category)
}

export function Shop() {
  const [ref, inView] = useInView(0.05)
  const activeCategory = useSignal('All')

  return (
    <div class="shop-page">
      <section class="section-wrap shop-hero">
        <div class="section-content">
          <div class="section-header">
            <h2>Our products</h2>
            <p>From the source to your table. Choose your size.</p>
          </div>

          <div class="shop-filters">
            {categories.map((cat) => (
              <button
                class={`shop-filter-btn ${activeCategory.value === cat ? 'active' : ''}`}
                onClick={() => { activeCategory.value = cat }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div class="shop-grid" ref={ref}>
            {filterProducts(activeCategory.value).map((product, i) => (
              <ShopCard key={product.slug} product={product} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ShopCard({ product, index, inView }: { product: Product; index: number; inView: boolean }) {
  return (
    <div class={`product-card ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <a href={`/shop/${product.slug}`} class="product-card-link">
        <div class="product-visual">
          <BottleSvg slug={product.slug} />
        </div>
        {product.badge && <span class="product-badge">{product.badge}</span>}
        <h3>{product.name}</h3>
        <p class="product-desc">{product.description}</p>
        <p class="product-price">${product.price.toFixed(2)}</p>
      </a>
      <button class="btn btn-primary" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  )
}
