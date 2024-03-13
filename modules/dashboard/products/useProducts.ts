import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGenerateFakeData = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: generateFakeData,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess();
      }
    },
  });
};

const generateFakeData = async () => {
  const response = await api.post(`/vendor/products/seed`);
  return response.data;
};

export const useCreateProduct = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess();
      }
    },
  });
};

const createProduct = async ({ data }: { data: FormData }) => {
  const response = await api.post(`/vendor/products`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useGetProducts = (store: Store | null) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    enabled: !!store?.id,
  });
};

const getProducts = async (): Promise<APIResponse<Product[]> | undefined> => {
  const response = await api.get(`/vendor/products`);
  return response.data;
};

export const useDeleteProduct = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess();
      }
    },
  });
};

const deleteProduct = async ({ id }: { id: string }): Promise<APIResponse<Product>> => {
  const response = await api.delete(`/vendor/products/${id}`);
  return response.data;
};

export const useUpdateProduct = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onSuccess && onSuccess();
      }
    },
  });
};

const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<Product>;
}): Promise<APIResponse<Product>> => {
  const response = await api.patch(`vendor/products/${id}`, data);
  return response.data;
};
