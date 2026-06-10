import { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } from '../../stores/cart.js'
import { QuantityPicker } from '../../components/QuantityPicker.jsx'
import { BottleSvg } from '../Shop/BottleSvg.jsx'
import './Cart.css'

export function Cart() {
  const items = cartItems.value
  const total = cartTotal.value

  return (
    <div class="cart-page">
      <section class="section-wrap">
        <div class="section-content">
          <div class="cart-header">
            <h1>Your cart</h1>
            {items.length > 0 && (
              <button class="cart-clear-btn" onClick={clearCart}>
                Clear all
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div class="cart-empty">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect x="12" y="22" width="40" height="36" rx="4" stroke="var(--text-light)" strokeWidth="1.5" fill="none" opacity="0.3" />
                <path d="M22 22v-6a10 10 0 0 1 20 0v6" stroke="var(--text-light)" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
                <circle cx="32" cy="40" r="2" fill="var(--text-light)" opacity="0.2" />
              </svg>
              <h2>Your cart is empty</h2>
              <p>Looks like you have not added anything yet.</p>
              <a href="/shop" class="btn btn-primary" style="display:inline-block;text-decoration:none">
                Browse products
              </a>
            </div>
          ) : (
            <div class="cart-layout">
              <div class="cart-items">
                {items.map((item) => (
                  <div key={item.product.slug} class="cart-item">
                    <div class="cart-item-visual">
                      <BottleSvg slug={item.product.slug} />
                    </div>
                    <div class="cart-item-info">
                      <h3>{item.product.name}</h3>
                      <p class="cart-item-price">${item.product.price.toFixed(2)}</p>
                    </div>
                    <QuantityPicker
                      value={item.quantity}
                      onChange={(q) => updateQuantity(item.product.slug, q)}
                    />
                    <p class="cart-item-total">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      class="cart-item-remove"
                      onClick={() => removeFromCart(item.product.slug)}
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <aside class="cart-summary">
                <h3>Order summary</h3>
                <div class="summary-row">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div class="summary-row summary-shipping">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div class="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary" style="width:100%" disabled>
                  Checkout — coming soon
                </button>
                <a href="/shop" class="cart-continue">Continue shopping</a>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
