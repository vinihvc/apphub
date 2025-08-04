'use client'

import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/primitives/button'
import type { AppType } from '@/content/apps'
import { useCartStore } from '@/lib/cart'
import { cn } from '@/lib/cn'

interface CartButtonClientProps extends React.ComponentProps<typeof Button> {
  /**
   * The data to add to the cart
   */
  data: AppType | AppType[]
}

const CartButtonClient = (props: CartButtonClientProps) => {
  const { data, className, ...rest } = props

  const { addToCart, removeFromCart } = useCartStore()

  const isInCart = useCartStore((state) =>
    Array.isArray(data)
      ? data.some((app) => state.isInCart(app.slug))
      : state.isInCart(data.slug),
  )

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (Array.isArray(data)) {
      for (const app of data) {
        isInCart ? removeFromCart(app.slug) : addToCart(app)
      }
    } else {
      isInCart ? removeFromCart(data.slug) : addToCart(data)
    }
  }

  return (
    <Button
      aria-label={`${isInCart ? 'Remove from' : 'Add to'} Cart`}
      className={cn('hidden sm:inline-flex', className)}
      onClick={handleAddToCart}
      size="icon"
      variant="outline"
      {...rest}
    >
      {isInCart ? (
        <Trash2 className="fade-in-0 zoom-in-95 animate-in" />
      ) : (
        <Plus className="fade-in-0 zoom-in-95 animate-in" />
      )}
    </Button>
  )
}

export default CartButtonClient
