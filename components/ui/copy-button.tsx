import { Button } from "@/components/primitives/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/components/primitives/clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/primitives/tooltip";
import { cn } from "@/lib/cn";

export const CopyButton = (props: React.ComponentProps<typeof Clipboard>) => {
  const { className, children, ...rest } = props;

  return (
    <Tooltip openDelay={400}>
      <Clipboard rootClassName={cn("z-10", className)} {...rest}>
        <ClipboardTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              className="opacity-64 hover:opacity-100 focus-visible:opacity-100"
              size="icon-sm"
              variant="ghost"
            >
              <ClipboardIndicator />
              {children}
            </Button>
          </TooltipTrigger>
        </ClipboardTrigger>
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Clipboard>
    </Tooltip>
  );
};
