"use client";

import { createListCollection } from "@ark-ui/react/combobox";
import { useQueryState } from "nuqs";
import type React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/primitives/select";
import { Icon } from "@/components/ui/icons";
import { PLATFORM_QUERY_KEY } from "@/config/globals";
import type { PlatformType } from "@/content/platforms";
import { usePlatform } from "@/context/platform";
import { getPlatforms } from "@/services/queries";
import { capitalize } from "@/utils/formatter";

export const PlatformsFilterBlock = (
  props: React.ComponentProps<typeof SelectTrigger>
) => {
  const { platform: userPlatform } = usePlatform();

  const [platform, setPlatform] = useQueryState(PLATFORM_QUERY_KEY, {
    defaultValue: userPlatform,
  });

  const collection = createListCollection({
    items: getPlatforms(),
  });

  return (
    <Select
      aria-label="Select Platform"
      collection={collection}
      onValueChange={({ value }) => setPlatform(value[0])}
      positioning={{
        placement: "bottom-end",
      }}
      value={[platform]}
    >
      <SelectTrigger
        className="flex size-9 items-center justify-center"
        showIndicator={false}
        size="lg"
        {...props}
      >
        <Icon data={platform as PlatformType} />
      </SelectTrigger>

      <SelectContent>
        {collection.items.map((item) => (
          <SelectItem aria-label={item} item={item} key={item}>
            <Icon data={item} />
            {capitalize(item)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
