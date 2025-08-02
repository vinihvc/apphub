'use client'

import { Button } from '@/components/primitives/button'
import { Plus } from 'lucide-react'
import dynamic from 'next/dynamic'

const CartButtonClient = dynamic(() => import('./cart-button-client'), {
  ssr: false,
  loading: () => (
    <Button variant="outline" size="icon">
      <Plus />
    </Button>
  ),
})

interface CartButtonProps
  extends React.ComponentProps<typeof CartButtonClient> {}

export const CartButton = (props: CartButtonProps) => {
  return <CartButtonClient {...props} />
}
