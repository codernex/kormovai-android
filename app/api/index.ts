import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface IApiError {
  message: string;
  success: boolean;
}

const api = axios.create({ baseURL: "http://192.168.1.38:9000/api/v1" });

export default api;
