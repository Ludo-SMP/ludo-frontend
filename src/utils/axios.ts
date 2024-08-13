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
      // console.log('axios response', error, error.response, error.response?.status);

      if (error.response?.status === 400) {
        // console.log('400', error.response);
      }

      // 토큰이 만료된 경우
      else if (error.response?.status === 401) {
        // console.log('401', error.response);
        try {
          const data = await logOut();
          if (data) window.location.href = '/';
        } catch (e) {
          // console.log(e);
        }
      }
      // Login Provider에서 에러 핸들링하도록 reject
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();
