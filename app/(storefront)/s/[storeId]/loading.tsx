import React from "react";
import { Skeleton } from "@/ui/skeleton";

export default function LoadingStore() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex-1 flex gap-3 items-center">
        <Skeleton className="aspect-square w-10" />
        <Skeleton className="h-7 w-40" />
      </div>

      <div className="flex flex-col gap-2 max-w-[60ch]">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </section>
  );
}
