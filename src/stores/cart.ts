import { signal, computed, batch } from '@preact/signals'
import type { Product } from '../data/products.js'

export interface CartItem {
  product: Product
  quantity: number
}

const STORAGE_KEY = 'terra-cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export const cartItems = signal<CartItem[]>(loadCart())

export const cartCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0),
)

export const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
)

export function addToCart(product: Product, quantity = 1) {
  batch(() => {
    const items = cartItems.value
    const existing = items.find((i) => i.product.slug === product.slug)
    if (existing) {
      existing.quantity += quantity
      cartItems.value = [...items]
    } else {
      cartItems.value = [...items, { product, quantity }]
    }
    saveCart(cartItems.value)
  })
}

export function updateQuantity(slug: string, quantity: number) {
  if (quantity < 1) return
  const items = cartItems.value.map((item) =>
    item.product.slug === slug ? { ...item, quantity } : item,
  )
  cartItems.value = items
  saveCart(items)
}

export function removeFromCart(slug: string) {
  const items = cartItems.value.filter((item) => item.product.slug !== slug)
  cartItems.value = items
  saveCart(items)
}

export function clearCart() {
  cartItems.value = []
  saveCart([])
}
