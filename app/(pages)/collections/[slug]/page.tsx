import { notFound } from "next/navigation";
import { Separator } from "@/components/primitives/separator";
import { AppCard } from "@/components/ui/app-card";
import { CopyCommand } from "@/components/ui/copy-command";
import { SITE_CONFIG } from "@/config/site";
import { getCollectionBySlug, getCollections } from "@/services/queries";
import { HeroSection } from "./_sections/hero";

export const revalidate = false;
export const dynamic = "force-static";

export const generateMetadata = async ({
  params,
}: PageProps<"/collections/[slug]">) => {
  const { slug } = await params;

  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return {
    title: `${collection.title} - ${SITE_CONFIG.name}`,
    description: collection.description,
    keywords: collection.tags,
    openGraph: {
      title: `${collection.title} - ${SITE_CONFIG.name}`,
      description: collection.description,
    },
  };
};

export const generateStaticParams = () => {
  return getCollections().map((collection) => ({
    slug: collection.slug,
  }));
};

const AppDetailPage = async (props: PageProps<"/collections/[slug]">) => {
  const { slug } = await props.params;

  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="container gap-4 py-12">
      <HeroSection collection={collection} />

      <Separator className="my-6" />

      <div className="grid gap-4">
        <div className="grid gap-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-lg">Apps in this collection</h3>

            <div className="flex justify-end">
              <CopyCommand data={collection.apps}>Copy script</CopyCommand>
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {collection.apps.map((app) => (
              <AppCard data={app} key={app.slug} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetailPage;
