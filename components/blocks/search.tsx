"use client";

import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";
import { SEARCH_QUERY_KEY } from "@/config/globals";
import { cn } from "@/lib/cn";
import type { Input } from "../primitives/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../primitives/input-group";
import { Kbd } from "../primitives/kbd";

interface SearchBlockProps extends React.ComponentProps<typeof Input> {}

export const SearchBlock = (props: SearchBlockProps) => {
  const { className, ...rest } = props;

  const $ref = React.useRef<HTMLInputElement>(null);

  const [query, setQuery] = useQueryState(SEARCH_QUERY_KEY, {
    defaultValue: "",
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ["INPUT", "TEXTAREA"].includes(
        document.activeElement?.tagName || ""
      );

      if (e.key === "/" && !isInput) {
        e.preventDefault();
        $ref.current?.focus();
      }

      if (e.key === "Escape" && document.activeElement === $ref.current) {
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setQuery]);

  return (
    <InputGroup className={cn(className)} size="lg">
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>

      <InputGroupInput
        onChange={(e) => setQuery(e.target.value)}
        ref={$ref}
        value={query}
        {...rest}
      />
      <InputGroupAddon align="inline-end">
        <Kbd variant="outline">
          <span className="sr-only">Press</span>
          <span>/</span>
        </Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
};
