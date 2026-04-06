import { cn } from "@/lib/cn";

interface ListViewProps extends React.ComponentProps<"div"> {
  /**
   * The type of the list view
   *
   * @default 'grid'
   */
  type?: "list" | "grid";
}

export const ListView = (props: ListViewProps) => {
  const { type = "grid", className, ...rest } = props;

  return (
    <div className={cn("grid gap-4", className)} {...rest}>
      <h1>ListView</h1>
    </div>
  );
};
