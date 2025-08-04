'use client'

import { CloudDownload, LayoutGrid } from 'lucide-react'
import dynamic from 'next/dynamic'
import { RemoveScroll } from 'react-remove-scroll'
import { Button } from '@/components/primitives/button'
import { NavLink } from '@/components/ui/nav-link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { SITE_CONFIG } from '@/config/site'
import { cn } from '@/lib/cn'
import { HEADER_LINKS } from './header.data'
import { HeaderSearch } from './header.search'

const HeaderCart = dynamic(() => import('./header.cart'), {
  ssr: false,
  loading: () => (
    <Button size="icon" variant="ghost">
      <LayoutGrid />
    </Button>
  ),
})

export const Header = () => {
  return (
    <header
      className={cn(
        'container fixed top-0 right-0 left-0 z-50 w-full',
        RemoveScroll.classNames.zeroRight,
      )}
    >
      <div className="mt-2 flex h-16 w-full items-center rounded-lg border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavLink className="mr-6 flex items-center gap-2" href="/">
          <CloudDownload className="relative size-6 text-emerald-500" />

          <span className="hidden font-semibold text-base sm:inline-block">
            {SITE_CONFIG.name}
          </span>
        </NavLink>

        <nav className="flex flex-1 items-center">
          <div className="flex items-center gap-2">
            {HEADER_LINKS.map((link) => (
              <Button asChild key={link.href} variant="link">
                <NavLink
                  className="px-2 text-muted-foreground [&.active]:text-primary"
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              </Button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <HeaderSearch />

            <ThemeToggle />

            <HeaderCart />
          </div>
        </nav>
      </div>
    </header>
  )
}
