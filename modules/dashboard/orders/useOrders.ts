import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetStoreOrders = (store: Store | null) => {
  return useQuery({
    queryKey: ["orders", store?.id],
    queryFn: () => getStoreOrders(),
    enabled: !!store?.id,
  });
};

const getStoreOrders = async (): Promise<APIResponse<VendorOrder[]> | undefined> => {
  const response = await api.get(`/vendor/orders`);
  return response.data;
};
