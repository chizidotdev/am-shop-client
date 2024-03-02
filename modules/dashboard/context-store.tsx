"use client";
import { useContext, createContext } from "react";
import { useGetUserStore } from "./settings/useSettings";

type DashboardContextType = {
  store: Store | null;
  isLoading: boolean;
  refetch: {
    store: () => void;
  };
};
const DashboardContext = createContext({} as DashboardContextType);

export const useDashboard = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: storeResponse,
    isLoading: isFetchingStore,
    refetch: refetchStore,
  } = useGetUserStore();
  const store = storeResponse?.data || null;
  const isLoading = isFetchingStore;

  const refetch = {
    store: refetchStore,
  };

  return (
    <DashboardContext.Provider value={{ store, isLoading, refetch }}>
      {children}
    </DashboardContext.Provider>
  );
};
