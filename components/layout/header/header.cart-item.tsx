import { Button } from '@/components/primitives/button'
import { CopyCommand } from '@/components/ui/copy-command'
import { ShimmerImage } from '@/components/ui/shimmer-image'
import type { AppType } from '@/content/apps'
import { useCartStore } from '@/lib/cart'
import { X } from 'lucide-react'

interface CartItemProps {
  /**
   * The app to display in the cart item
   */
  app: AppType
}

export const CartItem = (props: CartItemProps) => {
  const { app } = props

  const { removeFromCart } = useCartStore()

  const handleRemove = () => {
    removeFromCart(app.slug)
  }

  return (
    <div className="flex items-center gap-3 border-b p-3 last:border-b-0">
      <div className="relative size-8 flex-shrink-0 overflow-hidden rounded-lg">
        <ShimmerImage
          src={`/images/apps/${app.slug}.webp`}
          alt={`${app.name} icon`}
          className="rounded-md object-contain"
          fill
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="line-clamp-1 font-medium text-sm">{app.name}</h4>
        <p className="line-clamp-1 text-muted-foreground text-xs">
          {app.developer}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <CopyCommand data={app} variant="ghost" size="icon" />

        <Button variant="ghost" size="icon" onClick={handleRemove}>
          <X />
        </Button>
      </div>
    </div>
  )
}
