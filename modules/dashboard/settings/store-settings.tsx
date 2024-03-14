"use client";
import { Skeleton } from "@/ui/skeleton";
import { useDashboard } from "../context-store";
import { StoreForm } from "./store-form";

export function StoreSettings() {
  const { store, isFetchingStore: isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div className="max-w-lg flex flex-col gap-4">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-40" />
      </div>
    );
  }

  return <StoreForm store={store} />;
}
