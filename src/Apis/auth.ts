import { API_END_POINT } from '@/Constants/api';
import { httpClient } from '@/utils/axios';

export interface UserInfo {
  email: string;
  password: string;
}

export const logOut = async () => httpClient.post(API_END_POINT.LOGOUT);

export const getUser = async () => {
  const response = await httpClient.get(API_END_POINT.USER);
  return response.data;
};
