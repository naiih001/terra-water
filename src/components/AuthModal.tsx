import { useSignal } from '@preact/signals'
import { login, signup } from '../stores/auth.js'
import './AuthModal.css'

interface AuthModalProps {
  onClose: () => void
}

export function AuthModal({ onClose }: AuthModalProps) {
  const mode = useSignal<'login' | 'signup'>('login')
  const email = useSignal('')
  const password = useSignal('')
  const name = useSignal('')
  const error = useSignal<string | null>(null)
  const loading = useSignal(false)

  function resetForm() {
    email.value = ''
    password.value = ''
    name.value = ''
    error.value = null
  }

  function switchMode(m: 'login' | 'signup') {
    mode.value = m
    resetForm()
  }

  function handleSubmit(e: Event) {
    e.preventDefault()
    error.value = null
    loading.value = true

    if (!email.value.trim()) {
      error.value = 'Email is required'
      loading.value = false
      return
    }

    if (!password.value) {
      error.value = 'Password is required'
      loading.value = false
      return
    }

    setTimeout(() => {
      const result =
        mode.value === 'signup'
          ? signup(email.value.trim(), password.value, name.value.trim() || email.value.trim())
          : login(email.value.trim(), password.value)

      if (result) {
        error.value = result
        loading.value = false
      } else {
        onClose()
      }
    }, 200)
  }

  return (
    <div class="auth-overlay" onClick={onClose}>
      <div class="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button class="auth-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div class="auth-header">
          <h2>{mode.value === 'login' ? 'Welcome back' : 'Create account'}</h2>
          <p>{mode.value === 'login' ? 'Sign in to your Terra account.' : 'Join Terra and enjoy a faster checkout.'}</p>
        </div>

        <div class="auth-tabs">
          <button
            class={`auth-tab ${mode.value === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Sign in
          </button>
          <button
            class={`auth-tab ${mode.value === 'signup' ? 'active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            Sign up
          </button>
        </div>

        <form class="auth-form" onSubmit={handleSubmit}>
          {mode.value === 'signup' && (
            <div class="auth-field">
              <label for="auth-name">Name (optional)</label>
              <input
                id="auth-name"
                type="text"
                placeholder="Your name"
                value={name.value}
                onInput={(e) => { name.value = (e.target as HTMLInputElement).value }}
              />
            </div>
          )}

          <div class="auth-field">
            <label for="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              required
              value={email.value}
              onInput={(e) => { email.value = (e.target as HTMLInputElement).value }}
            />
          </div>

          <div class="auth-field">
            <label for="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              placeholder="At least 6 characters"
              required
              minLength={6}
              value={password.value}
              onInput={(e) => { password.value = (e.target as HTMLInputElement).value }}
            />
          </div>

          {error.value && <p class="auth-error">{error.value}</p>}

          <button
            type="submit"
            class="btn btn-primary auth-submit"
            disabled={loading.value}
          >
            {loading.value ? 'Please wait…' : mode.value === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <p class="auth-footnote">
          {mode.value === 'login' ? (
            <>No account? <button class="auth-link" onClick={() => switchMode('signup')}>Sign up</button></>
          ) : (
            <>Already have an account? <button class="auth-link" onClick={() => switchMode('login')}>Sign in</button></>
          )}
        </p>
      </div>
    </div>
  )
}
