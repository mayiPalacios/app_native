import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Alert } from "react-native";

async function http<T>(
  path: string,
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.request<T>({ url: path, ...config });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error; 
  }
}
export async function get<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const requestConfig: AxiosRequestConfig = { method: "get", ...config };
  const response = await http<T>(path, requestConfig);
  return response;
}

export async function post<T, U>(
  path: string,
  data: U,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const requestConfig: AxiosRequestConfig = { method: "post", data, ...config };
  const response = await http<T>(path, requestConfig);
  return response;
}

export async function put<T, U>(
  path: string,
  data: U,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const requestConfig: AxiosRequestConfig = { method: "put", data, ...config };
  const response = await http<T>(path, requestConfig);
  return response;
}

export async function del<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const requestConfig: AxiosRequestConfig = { method: "delete", ...config };
  const response = await http<T>(path, requestConfig);
  return response;
}