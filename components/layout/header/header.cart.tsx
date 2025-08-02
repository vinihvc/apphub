import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { CopyCommand } from '@/components/ui/copy-command'
import { NavLink } from '@/components/ui/nav-link'
import { useCartStore } from '@/lib/cart'
import { CircleOff, LayoutGrid, Trash2 } from 'lucide-react'
import React from 'react'
import { CartItem } from './header.cart-item'

const HeaderCart = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { items, getCartCount, clearCart } = useCartStore()

  const cartCount = getCartCount()

  const handleClearCart = () => {
    clearCart()
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative max-md:hidden">
          <LayoutGrid />

          {cartCount > 0 && (
            <div className="-top-1 -right-1 fade-in-0 zoom-in-95 absolute animate-in">
              <Badge className="flex size-4 rounded-full p-0 text-xs">
                <span className="sr-only">Apps to install</span>
                {cartCount}
              </Badge>
            </div>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-0" align="end" sideOffset={18}>
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Apps ({cartCount})</h3>
            {cartCount > 0 && (
              <Button variant="ghost" size="sm" onClick={handleClearCart}>
                <Trash2 className="size-3" />
                Clear apps
              </Button>
            )}
          </div>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              <CircleOff className="mx-auto mb-2 size-8 opacity-50" />
              <div className="grid gap-2">
                <p className="font-medium text-sm">The list is empty</p>

                <div>
                  <PopoverClose asChild>
                    <Button variant="solid" size="sm" asChild>
                      <NavLink href="/apps">Start installing apps</NavLink>
                    </Button>
                  </PopoverClose>
                </div>
              </div>
            </div>
          ) : (
            items.map((app) => <CartItem key={app.slug} app={app} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4">
            <CopyCommand data={items} className="w-full" size="sm">
              Copy script
            </CopyCommand>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default HeaderCart
