import { cartCount } from '../stores/cart.js'
import './NavBar.css'

export function NavBar() {
  const count = cartCount.value

  return (
    <nav class="site-nav">
      <a href="/" class="logo">TERRA</a>
      <ul class="nav-links">
        <li><a href="/shop">Shop</a></li>
        <li><a href="/#story">Story</a></li>
        <li><a href="/#discover">Discover</a></li>
      </ul>
      <a href="/cart" class="cart-link" aria-label="Shopping cart">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="4" y="7" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {count > 0 && <span class="cart-badge">{count > 9 ? '9+' : count}</span>}
      </a>
    </nav>
  )
}
