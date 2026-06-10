import { useEffect } from 'preact/hooks';
import { cartCount } from '../stores/cart.js';
import { currentUser, isLoggedIn, logout } from '../stores/auth.js';
import './MobileNav.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

export function MobileNav({ isOpen, onClose, onSignIn }: MobileNavProps) {
  const count = cartCount.value;
  const user = currentUser.value;
  const loggedIn = isLoggedIn.value;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKey);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <div
      class={`mobile-nav-overlay${isOpen ? ' open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <aside
        class={`mobile-nav-drawer${isOpen ? ' open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Navigation menu"
      >
        <button class="mobile-nav-close" onClick={onClose} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <nav class="mobile-nav-links">
          <a href="/shop" style="--i: 0" onClick={onClose}>Shop</a>
          <a href="/#story" style="--i: 1" onClick={onClose}>Story</a>
          <a href="/#discover" style="--i: 2" onClick={onClose}>Discover</a>
        </nav>

        <div class="mobile-nav-divider" />

        <div class="mobile-nav-auth">
          {loggedIn ? (
            <>
              <span class="mobile-nav-user">{user?.name}</span>
              <button
                class="mobile-nav-signout"
                onClick={() => { logout(); onClose(); }}
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              class="mobile-nav-signin"
              onClick={() => { onClose(); setTimeout(onSignIn, 300); }}
            >
              Sign in
            </button>
          )}
        </div>

        <a href="/cart" class="mobile-nav-cart" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <rect x="4" y="7" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M7 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          Cart
          {count > 0 && (
            <span class="mobile-cart-badge">
              {count > 9 ? '9+' : count}
            </span>
          )}
        </a>
      </aside>
    </div>
  );
}
