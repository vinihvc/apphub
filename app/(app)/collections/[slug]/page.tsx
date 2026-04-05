import { notFound } from "next/navigation";
import { Separator } from "@/components/primitives/separator";
import { AppCard } from "@/components/ui/app-card";
import { CopyCommand } from "@/components/ui/copy-command";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
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

  const title = collection.title;

  return createMetadata({
    title,
    description: collection.description,
    url: `/collections/${slug}`,
    imageUrl: createOgImageUrl({
      title,
      description: collection.description,
    }),
    keywords: collection.tags,
  });
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
            <h3 className="font-semibold text-lg">Included apps</h3>

            <div className="flex justify-end">
              <CopyCommand data={collection.apps}>Copy commands</CopyCommand>
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
