import axios, { AxiosInstance } from 'axios';
import { HttpStatus } from '@/Constants/StatusCodes';

export const apiRequester: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

interface ErrorResponse extends Response {
  data?: string;
}

interface HttpError extends Error {
  status: number;
  response: ErrorResponse;
}

export const handleHttpError = (error: HttpError) => {
  console.log(error.response.data);

  switch (error.response.status) {
    case HttpStatus.UNAUTHORIZED:
      // moveTo('/login');
      break;
    case HttpStatus.PRECONDITION_FAILED:
      // handleExpiredToken();
      break;
    case HttpStatus.NOT_FOUND:
      // moveTo('/404');
      break;
    default:
      break;
  }
};

const fetchWrapper = async ({
  method,
  url,
  params,
  body,
}: {
  method: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  params?: object;
  body?: object;
}) => {
  try {
    const { data } =
      (method === 'get' && (await apiRequester.get(url))) ||
      (method === 'post' && (await apiRequester.post(url, body))) ||
      (method === 'patch' && (await apiRequester.patch(url, body))) ||
      (method === 'delete' && (await apiRequester.delete(url))) ||
      {};

    return data;
  } catch (error) {
    handleHttpError(error);
  }
};

export const GET = (url: string, params?: object) => fetchWrapper({ method: 'get', url, params });

export const POST = (url: string, body?: object, params?: object) =>
  fetchWrapper({ method: 'post', url, body, params });

export const PATCH = (url: string, body?: object) => fetchWrapper({ method: 'patch', url, body });

export const DELETE = (url: string) => fetchWrapper({ method: 'delete', url });
