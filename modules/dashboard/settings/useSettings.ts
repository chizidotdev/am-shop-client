import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDashboard } from "../context-store";
import { toast } from "sonner";

const USER_STORE_QUERY_KEY = "vendor-store";

export const useUpdateStore = () => {
  const { invalidateQueries } = useQueryClient();
  const { refetch } = useDashboard();

  const mutation = useMutation({
    mutationFn: updateStore,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        refetch.store();
        invalidateQueries({ queryKey: [USER_STORE_QUERY_KEY] });
      }
    },
  });
  return mutation;
};

const updateStore = async (data: {
  name: string;
  description: string;
}): Promise<APIResponse<Store>> => {
  const response = await api.put<APIResponse<any>>("/vendor/stores", data);
  return response.data;
};

export const useCreateStore = () => {
  const { invalidateQueries } = useQueryClient();
  const { refetch } = useDashboard();

  const mutation = useMutation({
    mutationFn: createStore,
    onSuccess: (data) => {
      if (!data.error) {
        toast.success(data.message);
        refetch.store();
        invalidateQueries({ queryKey: [USER_STORE_QUERY_KEY] });
      }
    },
  });
  return mutation;
};

const createStore = async (data: {
  name: string;
  description: string;
}): Promise<APIResponse<Store>> => {
  const response = await api.post<APIResponse<Store>>("/vendor/stores", data);
  return response.data;
};

export const useGetUserStore = () => {
  const query = useQuery({ queryKey: [USER_STORE_QUERY_KEY], queryFn: getUserStore });
  return query;
};

const getUserStore = async () => {
  const response = await api.get<APIResponse<Store>>("vendor/stores");
  return response.data;
};
