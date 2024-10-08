import { logOut } from '@/Apis/auth';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 5000,
    ...config,
  });
  axiosInstance.interceptors.request.use((request) => {
    return request;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error.response?.status === 400) {
        () => {};
      }

      // 토큰이 만료된 경우
      else if (error.response?.status === 401) {
        try {
          const data = await logOut();
          if (data) window.location.href = '/';
        } catch (e) {
          () => {};
        }
      }
      // Login Provider에서 에러 핸들링하도록 reject
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();
