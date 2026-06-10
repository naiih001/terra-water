import { signal } from '@preact/signals'
import { cartItems, cartTotal, clearCart } from './cart.js'
import { currentUser } from './auth.js'
import type { CartItem } from './cart.js'

const STORAGE_KEY = 'terra-orders'

export interface ShippingAddress {
  name: string
  address: string
  city: string
  postalCode: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  shipping: ShippingAddress
  userEmail: string
  date: string
}

export const orders = signal<Order[]>([])

export function placeOrder(address: ShippingAddress): Order | null {
  const user = currentUser.value
  if (!user) return null

  const items = cartItems.value
  if (items.length === 0) return null

  const order: Order = {
    id: `TERRA-${Date.now()}`,
    items: items.map((i) => ({ ...i })),
    total: cartTotal.value,
    shipping: { ...address },
    userEmail: user.email,
    date: new Date().toISOString(),
  }

  const allOrders = loadOrders()
  allOrders.unshift(order)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allOrders))
  orders.value = allOrders
  clearCart()

  return order
}

export function loadOrders(): Order[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
