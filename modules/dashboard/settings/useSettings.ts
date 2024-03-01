import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const USER_STORE_QUERY_KEY = "user-store";
export const useUpdateStore = () => {
  const { invalidateQueries } = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateStore,
    onSuccess: () => invalidateQueries({ queryKey: [USER_STORE_QUERY_KEY] }),
  });
  return mutation;
};

const updateStore = async (data: { name: string; description: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await api.put<APIResponse<any>>("/users/store", data);
  return response.data;
};

export const useCreateStore = () => {
  const mutation = useMutation({ mutationFn: createStore });
  return mutation;
};

const createStore = async (data: { name: string; description: string }) => {
  const response = await api.post<APIResponse<Store>>("/users/store", data);
  return response.data;
};

export const useGetUserStore = () => {
  const query = useQuery({ queryKey: [USER_STORE_QUERY_KEY], queryFn: getUserStore });
  return query;
};

const getUserStore = async () => {
  const response = await api.get<APIResponse<Store>>("users/store");
  return response.data;
};
