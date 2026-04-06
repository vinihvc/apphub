"use client";

import { ark } from "@ark-ui/react/factory";
import { cn } from "@/lib/cn";

export const Prose = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div className={cn("prose", className)} data-slot="prose" {...rest} />
  );
};
