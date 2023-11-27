import { makeAutoObservable } from 'mobx';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';

export type THttpStore = {
  get<T = unknown>(url: string, params: object): Promise<T>;
  post<T = unknown>(url: string, data: object): Promise<T>;
  put<T = unknown>(url: string, data: object): Promise<T>;
  delete<T = unknown>(url: string, data: object): Promise<T>;
};

/**
 * axios 공통 처리
 * axiosInstance
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

  get = <T = unknown>(url: string, params: object): Promise<T> => {
    return this.axiosInstance.get<T>(url, { params }).then(res => res.data);
  };

  post = <T = unknown>(url: string, data: object): Promise<T> => {
    return this.axiosInstance.post<T>(url, data).then(res => res.data);
  };

  put = <T = unknown>(url: string, data: object): Promise<T> => {
    return this.axiosInstance.put<T>(url, data).then(res => res.data);
  };
  
  delete = <T = unknown>(url: string, data: object): Promise<T> => {
    return this.axiosInstance.delete<T>(url, { data }).then(res => res.data);
  };
}

export default HttpStore;
