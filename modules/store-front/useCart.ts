import api from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetCart = () => {
  const cart = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return cart;
};

const getCart = async () => {
  const response = await api.get<APIResponse<Cart[]>>(`/cart`);
  return response.data;
};

export const useAddToCart = () => {
  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
      }
    },
  });

  return mutation;
};

const addToCart = async (data: { productId: string; quantity: number }) => {
  const response = await api.post<APIResponse<Cart>>(`/cart`, data);
  return response.data;
};

export const useUpdateCart = (cb: () => void) => {
  const mutation = useMutation({
    mutationFn: updateCart,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        cb();
      }
    },
  });

  return mutation;
};

const updateCart = async (data: { id: string; quantity: number }) => {
  const response = await api.patch<APIResponse<Cart>>(`/cart/${data.id}`, data);
  return response.data;
};

export const useRemoveFromCart = (cb: () => void) => {
  const mutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        cb();
      }
    },
  });

  return mutation;
};

const removeFromCart = async (id: string) => {
  const response = await api.delete<APIResponse<Cart>>(`/cart/${id}`);
  return response.data;
};

export const useCheckout = (cb: () => void) => {
  const mutation = useMutation({
    mutationFn: checkout,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        cb();
      }
    },
  });

  return mutation;
};

const checkout = async () => {
  const response = await api.post<APIResponse<Cart>>(`/orders`);
  return response.data;
};
