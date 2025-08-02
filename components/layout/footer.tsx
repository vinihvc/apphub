import { NavLink } from '@/components/ui/nav-link'
import { SITE_CONFIG } from '@/config/site'
import { CloudDownload } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t bg-muted py-10">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <NavLink href="/" className="mr-6 inline-flex items-center gap-2">
          <CloudDownload className="relative size-8 text-emerald-500" />

          <span className="inline-block font-semibold text-2xl">
            {SITE_CONFIG.name}
          </span>
        </NavLink>

        <p className="text-muted-foreground">
          <a
            href={SITE_CONFIG.links.vini}
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; {SITE_CONFIG.author}
          </a>
        </p>
      </div>
    </footer>
  )
}
