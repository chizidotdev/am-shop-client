import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_REST_URL } from "./constants";

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
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return client;
};

export const client = createAxiosClient({
  options: {
    baseURL: BASE_REST_URL,
    timeout: 30000,
  },
});

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) => client.get<T>(url, config),
  post: <T>(url: string, data: object, config?: AxiosRequestConfig) =>
    client.post<T>(url, data, config),
  put: <T>(url: string, data: any, config?: AxiosRequestConfig) => client.put<T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig) => client.delete<T>(url, config),
};
