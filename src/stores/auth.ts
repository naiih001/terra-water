import { signal, computed } from '@preact/signals'

interface StoredUser {
  email: string
  name: string
  password: string
}

export interface User {
  email: string
  name: string
}

const SESSION_KEY = 'terra-auth-session'
const USERS_KEY = 'terra-auth-users'

function loadUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function loadSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveSession(user: User | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(SESSION_KEY)
  }
}

export const currentUser = signal<User | null>(loadSession())
export const isLoggedIn = computed(() => currentUser.value !== null)

export function signup(email: string, password: string, name: string): string | null {
  const users = loadUsers()
  if (users.find((u) => u.email === email)) return 'An account with this email already exists'
  if (password.length < 6) return 'Password must be at least 6 characters'
  users.push({ email, name, password })
  saveUsers(users)
  const user = { email, name }
  currentUser.value = user
  saveSession(user)
  return null
}

export function login(email: string, password: string): string | null {
  const users = loadUsers()
  const found = users.find((u) => u.email === email)
  if (!found) return 'No account found with this email'
  if (found.password !== password) return 'Incorrect password'
  const user = { email, name: found.name }
  currentUser.value = user
  saveSession(user)
  return null
}

export function logout() {
  currentUser.value = null
  saveSession(null)
}
