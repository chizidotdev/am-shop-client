import { Skeleton } from "@/ui/skeleton";
import React from "react";

export default function LoadingProduct() {
  return (
    <div className="grid md:grid-cols-[3fr_2fr] gap-10">
      <Skeleton className="w-full h-80" />

      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}
