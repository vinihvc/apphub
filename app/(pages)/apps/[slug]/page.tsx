import { SimilarAppsBlock } from '@/components/blocks/similar-apps'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { ScrollArea, ScrollBar } from '@/components/primitives/scroll-area'
import { Separator } from '@/components/primitives/separator'
import { CartButton } from '@/components/ui/cart-button'
import { CopyCommand } from '@/components/ui/copy-command'
import { NavLink } from '@/components/ui/nav-link'
import { ShareLink } from '@/components/ui/share-link'
import { ShimmerImage } from '@/components/ui/shimmer-image'
import { CATEGORY_QUERY_KEY } from '@/config/globals'
import { SITE_CONFIG } from '@/config/site'
import { getAppBySlug, getApps } from '@/services/queries'
import { capitalize, deslugify } from '@/utils/formatter'
import { Globe } from 'lucide-react'
import { notFound } from 'next/navigation'

interface AppDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export const generateMetadata = async ({ params }: AppDetailPageProps) => {
  const { slug } = await params

  const app = getAppBySlug(slug)

  if (!app) {
    notFound()
  }

  return {
    title: `${app.name} - ${SITE_CONFIG.name}`,
    description: app.description,
    keywords: app.category,
    openGraph: {
      title: `${app.name} - ${SITE_CONFIG.name}`,
      description: app.description,
    },
  }
}

export const generateStaticParams = async () => {
  return getApps().map((app) => ({
    slug: app.slug,
  }))
}

const AppDetailPage = async (props: AppDetailPageProps) => {
  const { slug } = await props.params

  const app = getAppBySlug(slug)

  if (!app) {
    notFound()
  }

  return (
    <main className="container gap-4 py-32">
      <div className="grid items-start justify-between gap-8 sm:grid-cols-2">
        <div className="grid gap-8">
          <div className="flex items-start gap-5">
            <div className="relative top-1 size-16 overflow-hidden rounded-lg">
              <ShimmerImage
                src={`/images/apps/${app.slug}.webp`}
                alt={`${app.name} icon`}
                fill
                className="rounded-[4px] object-contain"
              />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-bold text-3xl">{app.name}</h1>
                <p className="text-muted-foreground">{app.developer}</p>
              </div>
            </div>
          </div>

          <ScrollArea>
            <div className="flex gap-2 pb-2">
              {app.category.map((category) => (
                <Badge key={category} asChild>
                  <NavLink
                    href={{
                      pathname: '/apps',
                      query: { [CATEGORY_QUERY_KEY]: category },
                    }}
                  >
                    {capitalize(deslugify(category))}
                  </NavLink>
                </Badge>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="hidden gap-2 justify-self-end sm:flex">
          <Button variant="outline" size="icon" asChild>
            <a href={app.website} target="_blank" rel="noopener noreferrer">
              <Globe />
              <span className="sr-only">Visit Website</span>
            </a>
          </Button>

          <ShareLink variant="outline" size="icon" />

          <CopyCommand data={app} variant="outline" size="icon" />

          <CartButton variant="solid" size="icon" data={app} />
        </div>
      </div>

      <p className="text-muted-foreground">{app.description}</p>

      <Separator className="my-6" />

      <SimilarAppsBlock data={app} />
    </main>
  )
}

export default AppDetailPage
