"use client";
import { useContext, createContext } from "react";
import { useGetUserStore } from "./settings/useSettings";
import { useGetProducts } from "./products/useProducts";

type DashboardContextType = {
  store: Store | null;
  isFetchingStore: boolean;
  products: Product[];
  isFetchingProducts: boolean;
  refetch: {
    store: () => void;
    products: () => void;
  };
};
const DashboardContext = createContext({} as DashboardContextType);

export const useDashboard = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  // Store data
  const {
    data: storeResponse,
    isLoading: isFetchingStore,
    refetch: refetchStore,
  } = useGetUserStore();
  const store = storeResponse?.data || null;

  // Products data
  const {
    data: productsResponse,
    isLoading: isFetchingProducts,
    refetch: refetchProducts,
  } = useGetProducts(store);
  const products = productsResponse?.data || [];

  const refetch = {
    store: refetchStore,
    products: refetchProducts,
  };

  return (
    <DashboardContext.Provider
      value={{ store, isFetchingStore, products, isFetchingProducts, refetch }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
