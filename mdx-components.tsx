import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "./lib/cn";

export const mdxComponents = (components?: MDXComponents): MDXComponents => ({
  ...defaultMdxComponents,
  ...components,
  a: ({ className, href, ...props }: React.ComponentProps<"a">) => {
    const isExternal = typeof href === "string" && href.startsWith("http");

    return (
      <Link
        className={cn(
          "font-medium text-foreground",
          "rounded-md border border-transparent",
          "underline underline-offset-4",
          "hover:underline",
          "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        href={href ?? "#"}
        {...(isExternal && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
        {...props}
      />
    );
  },
});
