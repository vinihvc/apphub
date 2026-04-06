import { Globe } from "lucide-react";
import { notFound } from "next/navigation";
import { SimilarAppsBlock } from "@/components/blocks/similar-apps";
import { Button } from "@/components/primitives/button";
import { ButtonGroup } from "@/components/primitives/button-group";
import { Separator } from "@/components/primitives/separator";
import { CartButton } from "@/components/ui/cart-button";
import { CopyCommand } from "@/components/ui/copy-command";
import { ShareLink } from "@/components/ui/share-link";
import { VisitStore } from "@/components/ui/visit-store";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { getAppBySlug, getApps } from "@/services/queries";
import { withUtmSource } from "@/utils/utm";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

export const generateMetadata = async ({
  params,
}: PageProps<"/apps/[slug]">) => {
  const { slug } = await params;

  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const title = app.name;

  return createMetadata({
    title,
    description: app.description,
    url: `/apps/${slug}`,
    imageUrl: createOgImageUrl({
      title,
      description: app.description,
    }),
    keywords: app.category,
  });
};

export const generateStaticParams = () => {
  return getApps().map((app) => ({
    slug: app.slug,
  }));
};

const AppDetailPage = async (props: PageProps<"/apps/[slug]">) => {
  const { slug } = await props.params;

  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <main>
      <div className="container flex flex-col gap-4 py-12">
        <div className="grid items-start justify-between gap-8 sm:grid-cols-2">
          <HeroSection app={app} />

          <div className="flex gap-2 justify-self-end max-sm:hidden">
            <Button asChild size="icon-md" variant="outline">
              <a
                href={withUtmSource(app.website)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Globe />
                <span className="sr-only">Visit Website</span>
              </a>
            </Button>

            <ShareLink size="icon-md" variant="outline" />

            <CopyCommand data={app} size="icon-md" variant="outline" />

            <CartButton data={app} size="icon-md" />
          </div>
        </div>

        <p className="text-muted-foreground">{app.description}</p>

        <ButtonGroup className="w-full sm:hidden">
          <Button asChild className="w-1/3" size="md" variant="outline">
            <a
              href={withUtmSource(app.website)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Globe />
              Website
            </a>
          </Button>

          <ShareLink className="w-1/3" size="md" variant="outline">
            Share
          </ShareLink>

          <VisitStore app={app} className="w-1/3" size="md" variant="outline" />
        </ButtonGroup>

        <Separator className="my-6" />

        <SimilarAppsBlock data={app} />
      </div>
    </main>
  );
};

export default AppDetailPage;
