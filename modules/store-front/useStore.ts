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
  const response = await api.get<APIResponse<Store>>(`/stores/${storeId}`);
  return response.data;
};

export const getStoreProducts = async (storeId: string) => {
  if (!storeId) return;

  const response = await api.get<APIResponse<Product[]>>(`/stores/${storeId}/products`);
  return response.data;
};

export const getStoreProductById = async (productId: string) => {
  const response = await api.get<APIResponse<ProductDetail>>(`/products/${productId}`);
  return response.data;
};

export const useGetCart = () => {
  const cart = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return cart;
};

export const getCart = async () => {
  const response = await api.get<APIResponse<Cart[]>>(`/users/cart`);
  return response.data;
};

export const useAddToCart = () => {
  const mutation = useMutation({
    mutationFn: addToCart,
  });

  return mutation;
};

const addToCart = async (data: { productId: string; quantity: number }) => {
  const response = await api.post<APIResponse<Cart>>(`/users/cart`, data);
  return response.data;
};

export const useUpdateCart = (cb: () => void) => {
  const mutation = useMutation({
    mutationFn: updateCart,
    onSuccess: cb,
  });

  return mutation;
};

const updateCart = async (data: { id: string; quantity: number }) => {
  const response = await api.patch<APIResponse<Cart>>(`/users/cart/${data.id}`, data);
  return response.data;
};

export const useRemoveFromCart = (cb: () => void) => {
  const mutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: cb,
  });

  return mutation;
};

const removeFromCart = async (id: string) => {
  const response = await api.delete<APIResponse<Cart>>(`/users/cart/${id}`);
  return response.data;
};
