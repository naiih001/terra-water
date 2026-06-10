import { useSignal } from '@preact/signals'
import { cartCount } from '../stores/cart.js'
import { currentUser, isLoggedIn, logout } from '../stores/auth.js'
import { AuthModal } from './AuthModal.jsx'
import { MobileNav } from './MobileNav.jsx'
import './NavBar.css'

export function NavBar() {
  const count = cartCount.value
  const user = currentUser.value
  const loggedIn = isLoggedIn.value
  const showAuth = useSignal(false)
  const showMobileNav = useSignal(false)

  return (
    <>
      <nav class="site-nav">
        <a href="/" class="logo">TERRA</a>
        <ul class="nav-links">
          <li><a href="/shop">Shop</a></li>
          <li><a href="/#story">Story</a></li>
          <li><a href="/#discover">Discover</a></li>
        </ul>
        <button
            class="mobile-nav-toggle"
            onClick={() => { showMobileNav.value = !showMobileNav.value }}
            aria-label={showMobileNav.value ? 'Close menu' : 'Open menu'}
            aria-expanded={showMobileNav.value}
          >
            <div class="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        <div class="nav-actions">
          {loggedIn ? (
            <div class="nav-user">
              <span class="nav-user-name">{user.name}</span>
              <button class="nav-signout" onClick={logout}>Sign out</button>
            </div>
          ) : (
            <button class="nav-signin" onClick={() => { showAuth.value = true }}>
              Sign in
            </button>
          )}
          <a href="/cart" class="cart-link" aria-label="Shopping cart">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="4" y="7" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
              <path d="M7 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            {count > 0 && <span class="cart-badge">{count > 9 ? '9+' : count}</span>}
          </a>
        </div>
      </nav>
      {showAuth.value && <AuthModal onClose={() => { showAuth.value = false }} />}
      <MobileNav
        isOpen={showMobileNav.value}
        onClose={() => { showMobileNav.value = false }}
        onSignIn={() => { showAuth.value = true }}
      />
    </>
  )
}
