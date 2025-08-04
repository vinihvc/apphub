import { CircleOff, LayoutGrid, Trash2 } from 'lucide-react'
import React from 'react'
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
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button className="relative max-md:hidden" size="icon" variant="ghost">
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

      <PopoverContent align="end" className="w-80 p-0" sideOffset={18}>
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Apps ({cartCount})</h3>
            {cartCount > 0 && (
              <Button onClick={handleClearCart} size="sm" variant="ghost">
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
                    <Button asChild size="sm" variant="solid">
                      <NavLink href="/apps">Start installing apps</NavLink>
                    </Button>
                  </PopoverClose>
                </div>
              </div>
            </div>
          ) : (
            items.map((app) => <CartItem app={app} key={app.slug} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4">
            <CopyCommand className="w-full" data={items} size="sm">
              Copy script
            </CopyCommand>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default HeaderCart
