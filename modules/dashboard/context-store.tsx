"use client";
import { useContext, createContext, useCallback } from "react";
import { useGetUserStore } from "./settings/useSettings";
import { useGetProducts } from "./products/useProducts";
import { useGetStoreOrders } from "./orders/useOrders";

type Resource<T, F> = (filterKey?: F) => readonly [T, boolean];
type DashboardContextType = {
  store: Store | null;
  isFetchingStore: boolean;
  getProducts: Resource<Product[], ProductFilterOption>;
  isFetchingProducts: boolean;
  getOrders: Resource<VendorOrder[], OrderFilterOption>;
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
  const getProducts = useCallback(
    (filterKey?: ProductFilterOption) => {
      const result = productsResponse?.data || [];
      const hasProducts = !!result.length;

      let products: Product[] = result;

      if (filterKey === "inStock") {
        products = result.filter((p) => !p.outOfStock);
      }

      if (filterKey === "outOfStock") {
        products = result.filter((p) => p.outOfStock);
      }

      if (filterKey === "archive") {
        products = result;
      }

      return [products, hasProducts] as const;
    },
    [productsResponse],
  );

  // Orders data
  const {
    data: ordersResponse,
    isLoading: isFetchingOrders,
    refetch: refetchOrders,
  } = useGetStoreOrders(store);
  const getOrders = useCallback(
    (filterKey?: OrderFilterOption) => {
      const result = ordersResponse?.data || [];
      const hasOrders = !!result.length;

      let orders: VendorOrder[] = result;

      if (filterKey === "pending") {
        orders = result.filter((o) => o.status !== "delivered");
      }

      if (filterKey === "fulfilled") {
        orders = result.filter((o) => o.status === "delivered");
      }

      return [orders, hasOrders] as const;
    },
    [ordersResponse],
  );

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
        getProducts,
        isFetchingProducts,
        getOrders,
        isFetchingOrders,
        refetch,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
