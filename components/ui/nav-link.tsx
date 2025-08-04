'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/cn'

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  /**
   * If true, the link will only be active if the pathname is exactly equal to the href.
   *
   * @default false
   */
  exact?: boolean
}

export const NavLink = (props: NavLinkProps) => {
  const { href, exact = false, className, ...rest } = props

  const pathname = usePathname()

  const [isHovered, setIsHovered] = React.useState(false)

  const url = typeof href === 'object' ? href.pathname : href

  const isActive = exact ? pathname === url : pathname.startsWith(url || '')

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        { active: isActive },
        'outline-none',
        'transition-colors',
        'rounded-md',
        'focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      prefetch={isHovered ? true : null}
      {...rest}
    />
  )
}
