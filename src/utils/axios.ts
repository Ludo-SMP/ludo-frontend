import axios, { AxiosRequestConfig } from 'axios';

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.MOCK_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      // console.log(response);
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
