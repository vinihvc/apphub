import { pages } from "collections/server";
import { loader } from "fumadocs-core/source";

export const pagesSource = loader({
  baseUrl: "/docs",
  source: pages.toFumadocsSource(),
});
