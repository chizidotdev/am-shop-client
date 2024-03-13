import api from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetOrders = () => {
  const cart = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return cart;
};

export const getOrders = async () => {
  const response = await api.get<APIResponse<Order[]>>(`/orders`);
  return response.data;
};
