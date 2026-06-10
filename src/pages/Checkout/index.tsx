import { useSignal } from '@preact/signals'
import { cartItems, cartTotal } from '../../stores/cart.js'
import { isLoggedIn } from '../../stores/auth.js'
import { placeOrder } from '../../stores/orders.js'
import { BottleSvg } from '../Shop/BottleSvg.jsx'
import { AuthModal } from '../../components/AuthModal.jsx'
import type { ShippingAddress, Order } from '../../stores/orders.js'
import './Checkout.css'

export function Checkout() {
  const items = cartItems.value
  const total = cartTotal.value
  const loggedIn = isLoggedIn.value
  const showAuth = useSignal(false)
  const order = useSignal<Order | null>(null)

  const name = useSignal('')
  const address = useSignal('')
  const city = useSignal('')
  const postalCode = useSignal('')
  const error = useSignal('')
  const submitting = useSignal(false)

  if (order.value) {
    const o = order.value
    return (
      <div class="checkout-page">
        <section class="section-wrap">
          <div class="section-content">
            <div class="checkout-confirmation">
              <div class="checkout-confirmation-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2>Thank you, {o.shipping.name.split(' ')[0]}!</h2>
              <p class="order-id">Order {o.id}</p>
              <p>
                Your order has been placed and will be shipped to{' '}
                {o.shipping.address}, {o.shipping.city}.
              </p>
              <a href="/shop" class="btn btn-primary" style="display:inline-block;text-decoration:none">
                Continue shopping
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div class="checkout-page">
        <section class="section-wrap">
          <div class="section-content">
            <div class="checkout-confirmation">
              <h2>Your cart is empty</h2>
              <p>Add some products before checking out.</p>
              <a href="/shop" class="btn btn-primary" style="display:inline-block;text-decoration:none">
                Browse products
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }

  function handleSubmit(e: Event) {
    e.preventDefault()
    if (submitting.value) return

    if (!name.value.trim()) { error.value = 'Please enter your name'; return }
    if (!address.value.trim()) { error.value = 'Please enter your address'; return }
    if (!city.value.trim()) { error.value = 'Please enter your city'; return }
    if (!postalCode.value.trim()) { error.value = 'Please enter your postal code'; return }

    submitting.value = true
    error.value = ''

    const shipping: ShippingAddress = {
      name: name.value.trim(),
      address: address.value.trim(),
      city: city.value.trim(),
      postalCode: postalCode.value.trim(),
    }

    const result = placeOrder(shipping)
    if (result) {
      order.value = result
    } else {
      error.value = 'Something went wrong. Please try again.'
    }
    submitting.value = false
  }

  return (
    <div class="checkout-page">
      <section class="section-wrap">
        <div class="section-content">
          {!loggedIn ? (
            <div class="checkout-auth-prompt">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="8" stroke="var(--text-light)" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M8 44c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="var(--text-light)" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
              </svg>
              <h2>Sign in to checkout</h2>
              <p>You need to be signed in to place an order.</p>
              <button class="btn btn-primary" onClick={() => { showAuth.value = true }}>
                Sign in
              </button>
              {showAuth.value && <AuthModal onClose={() => { showAuth.value = false }} />}
            </div>
          ) : (
            <div class="checkout-layout">
              <form class="checkout-form" onSubmit={handleSubmit}>
                <h2>Shipping details</h2>

                <div class="form-group">
                  <label for="name">Full name</label>
                  <input id="name" type="text" value={name.value} onInput={(e) => { name.value = (e.target as HTMLInputElement).value }} placeholder="Jane Doe" required />
                </div>

                <div class="form-group">
                  <label for="address">Address</label>
                  <input id="address" type="text" value={address.value} onInput={(e) => { address.value = (e.target as HTMLInputElement).value }} placeholder="123 Main Street" required />
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="city">City</label>
                    <input id="city" type="text" value={city.value} onInput={(e) => { city.value = (e.target as HTMLInputElement).value }} placeholder="City" required />
                  </div>
                  <div class="form-group">
                    <label for="postal">Postal code</label>
                    <input id="postal" type="text" value={postalCode.value} onInput={(e) => { postalCode.value = (e.target as HTMLInputElement).value }} placeholder="12345" required />
                  </div>
                </div>

                {error.value && <p class="form-error" style="color:#c0392b;font-size:0.88rem;margin-bottom:16px">{error.value}</p>}

                <div class="checkout-form-actions">
                  <button type="submit" class="btn btn-primary" disabled={submitting.value}>
                    {submitting.value ? 'Placing order…' : `Place order — $${total.toFixed(2)}`}
                  </button>
                </div>
              </form>

              <aside class="checkout-summary">
                <h3>Order summary</h3>
                {items.map((item) => (
                  <div key={item.product.slug} class="checkout-summary-item">
                    <div class="checkout-summary-item-img">
                      <BottleSvg slug={item.product.slug} />
                    </div>
                    <div class="checkout-summary-item-info">
                      <h4>{item.product.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <span class="checkout-summary-item-total">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div class="checkout-summary-totals">
                  <div class="checkout-summary-row">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div class="checkout-summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div class="checkout-summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
