"use client";

import { createListCollection } from "@ark-ui/react/combobox";
import { FilterIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import type React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/select";
import { Separator } from "@/components/primitives/separator";
import { Icon } from "@/components/ui/icons";
import { CATEGORY_QUERY_KEY } from "@/config/globals";
import { getCategories } from "@/services/queries";
import { capitalize, deslugify } from "@/utils/formatter";

interface CategoriesFilterBlockProps
  extends React.ComponentProps<typeof SelectTrigger> {}

export const CategoriesFilterBlock = (props: CategoriesFilterBlockProps) => {
  const [category, setCategory] = useQueryState(CATEGORY_QUERY_KEY, {
    defaultValue: "all",
  });

  const collection = createListCollection({
    items: [
      { value: "all", label: "All Categories" },
      ...getCategories().map((slug) => ({
        value: slug,
        label: capitalize(deslugify(slug)),
      })),
    ] as const,
  });

  return (
    <Select
      collection={collection}
      onValueChange={({ value }) => setCategory(value[0])}
      value={[category]}
    >
      <SelectTrigger showIndicator={false} size="lg" {...props}>
        <FilterIcon className="text-muted-foreground" />

        <Separator className="h-4" orientation="vertical" />

        <SelectValue placeholder="Category" />
      </SelectTrigger>

      <SelectContent className="min-w-56">
        {collection.items.map((item) => (
          <SelectItem
            aria-label={item.value}
            item={item.value}
            key={item.value}
          >
            <Icon data={item.value} />
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
