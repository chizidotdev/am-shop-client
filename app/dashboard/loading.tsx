import { Skeleton } from "@/ui/skeleton";
import React from "react";

export default function LoadingDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="w-96 h-8" />
      <Skeleton className="w-full max-w-2xl h-80" />
    </div>
  );
}
