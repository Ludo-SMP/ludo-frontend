import axios, { AxiosRequestConfig } from 'axios';

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MOCK_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });
  axiosInstance.interceptors.request.use((request) => {
    // console.log(request);
    return request;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();
