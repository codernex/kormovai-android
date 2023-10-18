import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export interface IApiError {
  message: string;
  success: boolean;
}

export interface IApiResponse<T> {
  data?: T extends IApiError ? IApiError : T;
}

const api = axios.create({ baseURL: "http://localhost:9000/api/v1" });

type DT = IApiResponse<IApiError>;

export const apiPost = async <TBody, TResponse>(url: string, data: TBody) => {
  return new Promise<IApiResponse<TResponse>>((resolve, reject) => {
    api
      .post<IApiResponse<TResponse>>(url, data)
      .then((res) => {
        if (res.data.data) {
          resolve(res.data.data);
        }
      })
      .catch((err: AxiosError<DT>) => {
        reject(err?.response?.data.data?.message);
      });
  });
};

export default api;
