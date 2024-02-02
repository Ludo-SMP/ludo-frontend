import axios from 'axios';

const fetchWrapper = async ({
  method,
  url,
  params,
  body,
}: {
  method: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  params?: {};
  body?: {};
}) => {
  try {
    const config = {
      baseURL: import.meta.env.API_URL,
      params,
    };
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'patch' && (await axios.patch(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GET = (url: string, params?: {}) => fetchWrapper({ method: 'get', url, params });

export const POST = (url: string, body?: {}, params?: {}) => fetchWrapper({ method: 'post', url, body });

export const PATCH = (url: string, body?: {}) => fetchWrapper({ method: 'patch', url, body });

export const DELETE = (url: string) => fetchWrapper({ method: 'delete', url });
