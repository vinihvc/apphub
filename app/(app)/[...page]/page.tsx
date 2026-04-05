import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { pagesSource } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";

export const generateStaticParams = () => {
  return pagesSource.generateParams();
};

export const generateMetadata = async (
  props: PageProps<"/[...page]">
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

const CustomPage = async (props: PageProps<"/[...page]">) => {
  const params = await props.params;

  const page = pagesSource.getPage(params.page);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <main>
      <div className="container py-12">
        <h1 className="font-semibold text-xl">{page.data.title}</h1>
        <h2 className="text-muted-foreground">{page.data.description}</h2>

        <div className="prose">
          <MDX
            components={mdxComponents({
              a: createRelativeLink(pagesSource, page),
            })}
          />
        </div>
      </div>
    </main>
  );
};

export default CustomPage;
