import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetStore = (storeId: string) => {
  const store = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
  });

  return store;
};

export const getStore = async (storeId: string) => {
  const response = await api.get<APIResponse<Store>>(`/stores/${storeId}`);
  return response.data;
};

export const getStoreProducts = async (storeId: string) => {
  if (!storeId) return;

  const response = await api.get<APIResponse<Product[]>>(`/stores/${storeId}/products`);
  return response.data;
};
