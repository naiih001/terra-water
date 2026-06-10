import { useSignal } from '@preact/signals'
import { getProduct, products } from '../../data/products.js'
import { addToCart } from '../../stores/cart.js'
import { QuantityPicker } from '../../components/QuantityPicker.jsx'
import { BottleSvg } from '../Shop/BottleSvg.jsx'
import './Product.css'

export function Product({ slug }: { slug: string }) {
  const product = getProduct(slug)
  const qty = useSignal(1)
  const added = useSignal(false)

  if (!product) {
    return (
      <section class="section-wrap product-not-found">
        <div class="section-content" style="text-align:center">
          <h2>Product not found</h2>
          <p style="margin:16px 0 24px; color:var(--text-light)">
            We could not find that product.
          </p>
          <a href="/shop" class="btn btn-primary" style="display:inline-block;text-decoration:none">
            Back to shop
          </a>
        </div>
      </section>
    )
  }

  return (
    <div class="product-detail-page">
      <section class="section-wrap">
        <div class="section-content">
          <nav class="product-breadcrumb">
            <a href="/shop">Shop</a>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div class="product-detail-grid">
            <div class="product-detail-visual">
              <div class="product-detail-bottle">
                      <BottleSvg slug={product.slug} />
              </div>
              <div class="product-detail-blob"></div>
            </div>

            <div class="product-detail-info">
              {product.badge && <span class="product-badge">{product.badge}</span>}
              <h1>{product.name}</h1>
              <p class="product-detail-price">${product.price.toFixed(2)}</p>
              <p class="product-detail-desc">{product.longDescription}</p>

              <ul class="product-features">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div class="product-detail-actions">
                <QuantityPicker value={qty.value} onChange={(v) => { qty.value = v; added.value = false }} />
                <button
                  class={`btn ${added.value ? 'btn-added' : 'btn-primary'}`}
                  onClick={() => {
                    addToCart(product, qty.value)
                    added.value = true
                    qty.value = 1
                  }}
                >
                  {added.value ? 'Added!' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section class="section-wrap product-more">
          <div class="section-content">
            <div class="section-header">
              <h2>Explore more</h2>
            </div>
            <div class="more-grid">
              {products
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((p) => (
                  <a key={p.slug} href={`/shop/${p.slug}`} class="more-card">
                    <div class="more-card-visual">
                <BottleSvg slug={p.slug} />
                    </div>
                    <h3>{p.name}</h3>
                    <p class="product-price">${p.price.toFixed(2)}</p>
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
