import type React from "react";
import { AppCard } from "@/components/ui/app-card";
import type { AppType } from "@/content/apps";
import { cn } from "@/lib/cn";
import { getApps } from "@/services/queries";

interface SimilarAppsProps extends React.ComponentProps<"section"> {
  /**
   * The app to get similar apps for
   */
  data: AppType;
  /**
   * The number of similar apps to show
   */
  limit?: number;
}

export const SimilarAppsBlock = (props: SimilarAppsProps) => {
  const { data, limit = 4, className, ...rest } = props;

  const similarApps = getApps()
    .filter(
      (a) =>
        a.category.some((c) => data.category.includes(c)) &&
        a.slug !== data.slug
    )
    .slice(0, limit);

  if (similarApps.length === 0) {
    return null;
  }

  return (
    <section className={cn("grid gap-4", className)} {...rest}>
      <h2 className="font-bold text-2xl">Similar Apps</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {similarApps.map((app) => (
          <AppCard data={app} key={app.slug} />
        ))}
      </div>
    </section>
  );
};
