import { makeAutoObservable } from 'mobx';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IResponse<T> {
  status: number;
  code: string;
  message: string;
  data: T;
}

export type THttpStore = {
  get<T>(url: string, params?: object): Promise<IResponse<T>>;
  post<T>(url: string, data?: object): Promise<IResponse<T>>;
  put<T>(url: string, data?: object): Promise<IResponse<T>>;
  delete<T>(url: string, data?: object): Promise<IResponse<T>>;
};

/**
 * axios 공통 처리
 * request, response interceptor 구현
 * 네트워크 상태 메롱인 경우 처리로직 구현
 */
class HttpStore implements THttpStore {
  private axiosInstance: AxiosInstance;

  constructor() {
    makeAutoObservable(this);

    this.axiosInstance = Axios.create({
      baseURL: process.env.API_URL,
      timeout: 5000,
    });

    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      // 요청 보내기 전에 수행 로직
      (config) => {
        return config;
      },

      // 요청 에러 시 수행 로직
      (err) => {
        return Promise.reject(err);
      }
    );

    // 응답 인터셉터
    this.axiosInstance.interceptors.response.use(
      // 응답에 대한 로직
      (response) => {
        const res = response.data;
        return res;
      },

      // 응답에 대한 로직
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  async get<T = unknown>(url: string, params?: object): Promise<IResponse<T>> {
    const response: AxiosResponse<IResponse<T>> = await this.axiosInstance.get<
      IResponse<T>
    >(url, { params });
    return response.data;
  }

  async post<T = unknown>(url: string, data: object): Promise<IResponse<T>> {
    const response: AxiosResponse<IResponse<T>> = await this.axiosInstance.post<
      IResponse<T>
    >(url, data);
    return response.data;
  }

  async put<T = unknown>(url: string, data: object): Promise<IResponse<T>> {
    const response: AxiosResponse<IResponse<T>> = await this.axiosInstance.put<
      IResponse<T>
    >(url, data);
    return response.data;
  }

  async delete<T = unknown>(url: string, data: object): Promise<IResponse<T>> {
    const response: AxiosResponse<IResponse<T>> = await this.axiosInstance.delete<
      IResponse<T>
    >(url, { data });
    return response.data;
  }
}

export default HttpStore;
