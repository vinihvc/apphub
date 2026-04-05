import { Globe } from "lucide-react";
import { notFound } from "next/navigation";
import { SimilarAppsBlock } from "@/components/blocks/similar-apps";
import { Button } from "@/components/primitives/button";
import { Separator } from "@/components/primitives/separator";
import { CartButton } from "@/components/ui/cart-button";
import { CopyCommand } from "@/components/ui/copy-command";
import { ShareLink } from "@/components/ui/share-link";
import { SITE_CONFIG } from "@/config/site";
import { getAppBySlug, getApps } from "@/services/queries";
import { withUtmSource } from "@/utils/url";
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

  return {
    title: `${app.name} - ${SITE_CONFIG.name}`,
    description: app.description,
    keywords: app.category,
    openGraph: {
      title: `${app.name} - ${SITE_CONFIG.name}`,
      description: app.description,
    },
  };
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
      <div className="container py-12">
        <div className="grid items-start justify-between gap-8 sm:grid-cols-2">
          <HeroSection app={app} />

          <div className="hidden gap-2 justify-self-end sm:flex">
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

            <CartButton data={app} size="icon-md" variant="default" />
          </div>
        </div>

        <p className="text-muted-foreground">{app.description}</p>

        <Separator className="my-6" />

        <SimilarAppsBlock data={app} />
      </div>
    </main>
  );
};

export default AppDetailPage;
