import api from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetStore = (storeId: string) => {
  const store = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
  });

  return store;
};

export const getStore = async (storeId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await api.get<APIResponse<Store>>(`/stores/${storeId}`);
  return response.data;
};

export const getStoreProducts = async (storeId: string) => {
  if (!storeId) return;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await api.get<APIResponse<Product[]>>(`/stores/${storeId}/products`);
  return response.data;
};

export const getStoreProductById = async (productId: string) => {
  const response = await api.get<APIResponse<ProductDetail>>(`/products/${productId}`);
  return response.data;
};

export const useSearchStores = () => {
  const stores = useMutation({
    mutationFn: searchStores,
  });

  return stores;
};

const searchStores = async (query: string) => {
  const response = await api.post<APIResponse<Store[]>>(`/stores/search`, { query });
  return response.data;
};
