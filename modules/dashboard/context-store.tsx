"use client";
import { useContext, createContext } from "react";
import { useGetUserStore } from "./settings/useSettings";
import { useGetProducts } from "./products/useProducts";
import { useGetStoreOrders } from "./orders/useOrders";

type DashboardContextType = {
  store: Store | null;
  isFetchingStore: boolean;
  products: Product[];
  isFetchingProducts: boolean;
  orders: VendorOrder[];
  isFetchingOrders: boolean;
  refetch: {
    store: () => void;
    products: () => void;
    orders: () => void;
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

  // Orders data
  const {
    data: ordersResponse,
    isLoading: isFetchingOrders,
    refetch: refetchOrders,
  } = useGetStoreOrders(store);
  const orders = ordersResponse?.data || [];

  const refetch = {
    store: refetchStore,
    products: refetchProducts,
    orders: refetchOrders,
  };

  return (
    <DashboardContext.Provider
      value={{
        store,
        isFetchingStore,
        products,
        isFetchingProducts,
        orders,
        isFetchingOrders,
        refetch,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
