import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        // Use primary palette for subtle shimmer
        "animate-pulse rounded-md bg-primary-100 dark:bg-primary-900 opacity-60",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
