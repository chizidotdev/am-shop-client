"use client";
import { StoreForm } from "./store-form";
import { useGetUserStore } from "./useSettings";

export function StoreSettings() {
  const { data, isLoading } = useGetUserStore();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <StoreForm store={data?.data} />;
}
