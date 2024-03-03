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

export const useGetProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};

export const getProducts = async (): Promise<APIResponse<{ products: Product[] }> | undefined> => {
  const response = await api.get(`/products`);
  return response.data;
};
