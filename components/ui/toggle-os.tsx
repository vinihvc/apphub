"use client";

import type React from "react";
import { usePlatform } from "@/context/platform";
import { getPlatforms } from "@/services/queries";
import { capitalize } from "@/utils/formatter";
import { Button } from "../primitives/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "../primitives/menu";
import { Icon } from "./icons";

const HIDDEN_PLATFORMS = ["ios", "android"];

export const ToggleOS = (props: React.ComponentProps<typeof Button>) => {
  const { size = "icon-md", variant = "outline", ...rest } = props;

  const platforms = getPlatforms();

  const { platform, setPlatform } = usePlatform();

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button size={size} variant={variant} {...rest}>
          <Icon data={platform} />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          {platforms
            .filter((item) => !HIDDEN_PLATFORMS.includes(item))
            .map((item) => (
              <MenuItem
                key={item}
                onSelect={() => setPlatform(item)}
                value={item}
              >
                <Icon data={item} />
                {capitalize(item)}
              </MenuItem>
            ))}
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};
