"use client";
import { useDashboard } from "../context-store";
import { StoreForm } from "./store-form";

export function StoreSettings() {
  const { store, isFetchingStore: isLoading } = useDashboard();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <StoreForm store={store} />;
}
