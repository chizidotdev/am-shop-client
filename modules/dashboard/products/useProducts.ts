import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateProduct = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess();
    },
  });
};

export const createProduct = async ({ data }: { data: FormData }) => {
  const response = await api.post(`/products`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useGetProducts = (store: Store | null) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(store?.id),
    enabled: !!store?.id,
  });
};

export const getProducts = async (
  storeId: string | undefined,
): Promise<APIResponse<Product[]> | undefined> => {
  if (!storeId) return;
  const response = await api.get(`stores/${storeId}/products`);
  return response.data;
};
