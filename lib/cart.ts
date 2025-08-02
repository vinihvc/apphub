import type { AppType } from '@/content/apps'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore {
  items: AppType[]
  addToCart: (app: AppType) => void
  removeFromCart: (appSlug: string) => void
  clearCart: () => void
  isInCart: (appSlug: string) => boolean
  getCartCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (app: AppType) => {
        const { items } = get()
        const isAlreadyInCart = items.some((item) => item.slug === app.slug)

        if (!isAlreadyInCart) {
          set({ items: [...items, app] })
        }
      },

      removeFromCart: (appSlug: string) => {
        const { items } = get()
        set({ items: items.filter((item) => item.slug !== appSlug) })
      },

      clearCart: () => {
        set({ items: [] })
      },

      isInCart: (appSlug: string) => {
        const { items } = get()
        return items.some((item) => item.slug === appSlug)
      },

      getCartCount: () => {
        const { items } = get()
        return items.length
      },
    }),
    {
      name: 'cart-storage',
      storage: {
        getItem: (name) => {
          try {
            const item = localStorage.getItem(name)
            return item ? JSON.parse(item) : null
          } catch {
            return null
          }
        },
        setItem: (name, value) => {
          try {
            localStorage.setItem(name, JSON.stringify(value))
          } catch {
            // Ignore localStorage errors
          }
        },
        removeItem: (name) => {
          try {
            localStorage.removeItem(name)
          } catch {
            // Ignore localStorage errors
          }
        },
      },
    },
  ),
)
