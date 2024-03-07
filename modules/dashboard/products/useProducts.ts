import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGenerateFakeData = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: generateFakeData,
    onSuccess: (data) => {
      if (!data.error) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess();
      }
    },
  });
};

const generateFakeData = async ({ storeId }: { storeId: string }) => {
  const response = await api.post(`/stores/${storeId}/seed`);
  return response.data;
};

export const useCreateProduct = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      if (!data.error) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess();
      }
    },
  });
};

const createProduct = async ({ storeId, data }: { storeId: string; data: FormData }) => {
  const response = await api.post(`/stores/${storeId}/products`, data, {
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

const getProducts = async (
  storeId: string | undefined,
): Promise<APIResponse<Product[]> | undefined> => {
  if (!storeId) return;
  const response = await api.get(`/stores/${storeId}/products`);
  return response.data;
};

export const useDeleteProduct = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess();
    },
  });
};

const deleteProduct = async ({ id, storeId }: { id: string; storeId: string }) => {
  const response = await api.delete(`stores/${storeId}/products/${id}`);
  return response.data;
};

export const useUpdateProduct = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess && onSuccess();
    },
  });
};

const updateProduct = async ({
  id,
  storeId,
  data,
}: {
  id: string;
  storeId: string;
  data: Partial<Product>;
}) => {
  const response = await api.patch(`stores/${storeId}/products/${id}`, data);
  return response.data;
};
