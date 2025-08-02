import { cn } from '@/lib/cn'
import { Toggle as TogglePrimitive } from 'radix-ui'

export const Toggle = (
  props: React.ComponentProps<typeof TogglePrimitive.Root>,
) => {
  const { className, ...rest } = props

  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        'focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  )
}
