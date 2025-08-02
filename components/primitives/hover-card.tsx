import { cn } from '@/lib/cn'
import { HoverCard as HoverCardPrimitive } from 'radix-ui'

export const HoverCard = (
  props: React.ComponentProps<typeof HoverCardPrimitive.Root>,
) => {
  return <HoverCardPrimitive.Root {...props} />
}

export const HoverCardTrigger = (
  props: React.ComponentProps<typeof HoverCardPrimitive.Trigger>,
) => {
  return <HoverCardPrimitive.Trigger {...props} />
}

export const HoverCardContent = (
  props: React.ComponentProps<typeof HoverCardPrimitive.Content>,
) => {
  const { align = 'center', sideOffset = 10, className, ...rest } = props

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        sideOffset={sideOffset}
        align={align}
        className={cn(
          'rounded-md',
          'border',
          'p-2 shadow-md',
          'bg-popover',
          'outline-none',
          'fade-in-0 zoom-in-95 animate-in',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in',
          className,
        )}
        {...rest}
      />
    </HoverCardPrimitive.Portal>
  )
}
