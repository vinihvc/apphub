import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/primitives/prose";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { pagesSource } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";

export const revalidate = false;
export const dynamic = "force-static";

export const generateStaticParams = () => pagesSource.generateParams();

export const generateMetadata = async (
  props: PageProps<"/p/[...page]">
): Promise<Metadata> => {
  const params = await props.params;

  const page = pagesSource.getPage(params.page);

  if (!page) {
    notFound();
  }

  const { title, description = "" } = page.data;

  return createMetadata({
    title,
    description,
    url: page.url,
    imageUrl: createOgImageUrl({
      title,
      description,
    }),
  });
};

const CustomPage = async (props: PageProps<"/p/[...page]">) => {
  const params = await props.params;

  const page = pagesSource.getPage(params.page);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <main className="min-w-0">
      <section className="bg-card">
        <div className="container py-8 sm:py-12">
          <h1 className="text-balance font-semibold text-lg sm:text-xl md:text-2xl">
            {page.data.title}
          </h1>
        </div>
      </section>

      <div className="container min-w-0 py-6 sm:py-8">
        <Prose className="min-w-0">
          <MDX
            components={mdxComponents({
              a: createRelativeLink(pagesSource, page),
            })}
          />
        </Prose>
      </div>
    </main>
  );
};

export default CustomPage;
