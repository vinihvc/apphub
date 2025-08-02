'use client'

import { Popover as PopoverPrimitive } from 'radix-ui'
import type * as React from 'react'

import { cn } from '@/lib/cn'

export const Popover = (
  props: React.ComponentProps<typeof PopoverPrimitive.Root>,
) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

export const PopoverTrigger = (
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>,
) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

export const PopoverContent = (
  props: React.ComponentProps<typeof PopoverPrimitive.Content>,
) => {
  const { align = 'center', sideOffset = 4, className, ...rest } = props

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50',
          'w-72',
          'p-4',
          'origin-(--radix-popover-content-transform-origin)',
          'bg-popover',
          'text-popover-foreground',
          'rounded-md border shadow-md',
          'outline-hidden',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export const PopoverAnchor = (
  props: React.ComponentProps<typeof PopoverPrimitive.Anchor>,
) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export const PopoverClose = (
  props: React.ComponentProps<typeof PopoverPrimitive.Close>,
) => {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}
