import axios, { AxiosInstance } from "axios";
import { BASE_REST_URL } from "./constants";
import { toast } from "sonner";

interface AxiosClientOptions {
  baseURL: string;
  timeout: number;
}

interface AxiosClient {
  options: AxiosClientOptions;
}

export const createAxiosClient = ({ options }: AxiosClient) => {
  const client: AxiosInstance = axios.create(options);

  client.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      config.validateStatus = (status) => status <= 500;
      return config;
    },
    (error) => {
      return error;
    },
  );

  client.interceptors.response.use((response) => {
    toast.success(response.data.message);
    if (!!response.data.error) {
      toast.error(response.data.message);
    }
    return response;
  });

  return client;
};

export const api = createAxiosClient({
  options: {
    baseURL: BASE_REST_URL,
    timeout: 30000,
  },
});

export default api;
