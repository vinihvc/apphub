import { ScrollArea, ScrollBar } from '@/components/primitives/scroll-area'
import { Separator } from '@/components/primitives/separator'
import { CopyCommand } from '@/components/ui/copy-command'
import { NavLink } from '@/components/ui/nav-link'
import { ShareLink } from '@/components/ui/share-link'
import { ShimmerImage } from '@/components/ui/shimmer-image'
import { SITE_CONFIG } from '@/config/site'
import { getCollectionBySlug, getCollections } from '@/services/queries'
import { notFound } from 'next/navigation'

interface AppDetailPageProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: AppDetailPageProps) => {
  const { slug } = await params

  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  return {
    title: `${collection.title} - ${SITE_CONFIG.name}`,
    description: collection.description,
    keywords: collection.tags,
    openGraph: {
      title: `${collection.title} - ${SITE_CONFIG.name}`,
      description: collection.description,
    },
  }
}

export const generateStaticParams = async () => {
  return getCollections().map((collection) => ({
    slug: collection.slug,
  }))
}

const AppDetailPage = async (props: AppDetailPageProps) => {
  const { slug } = await props.params

  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  return (
    <main className="container gap-4 py-32">
      <div className="grid items-start justify-between gap-8 sm:grid-cols-2">
        <div className="grid gap-8">
          <div className="flex items-start gap-5">
            <div className="relative top-2 inline-flex size-16 shrink-0 items-center justify-center rounded-lg bg-emerald-700 p-2 text-emerald-50">
              <collection.icon className="size-6" />
            </div>

            <div>
              <h1 className="font-bold text-3xl">{collection.title}</h1>

              <p className="text-muted-foreground">{collection.description}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <ShareLink variant="outline" size="icon" />
        </div>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-4">
          <h3 className="font-semibold text-lg">Apps in this collection</h3>

          <ScrollArea>
            <nav className="flex gap-8 pb-2">
              {collection.apps.map((app) => (
                <NavLink
                  key={app.slug}
                  aria-label={`View ${app.name}`}
                  href={{ pathname: `/apps/${app.slug}` }}
                >
                  <ShimmerImage
                    src={`/images/apps/${app.slug}.webp`}
                    alt={app.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-md"
                    aria-hidden
                  />
                </NavLink>
              ))}
            </nav>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="flex justify-end">
          <CopyCommand data={collection.apps}>Copy script</CopyCommand>
        </div>
      </div>
    </main>
  )
}

export default AppDetailPage
