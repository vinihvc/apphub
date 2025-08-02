import { cn } from '@/lib/cn'
import type * as React from 'react'

export const Kbd = (props: React.ComponentProps<'kbd'>) => {
  const { className, ...rest } = props

  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'px-1.5 py-0.5',
        'font-mono text-xs tracking-wide',
        'bg-muted',
        'text-muted-foreground',
        'rounded-md border',
        'select-none',
        className,
      )}
      {...rest}
    />
  )
}
