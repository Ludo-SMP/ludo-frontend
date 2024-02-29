import { httpClient } from '@/Utils/axios';

export interface UserInfo {
  email: string;
  password: string;
}

export type SocialLoginType = 'google' | 'kakao' | 'naver';

export const login = async (loginType: SocialLoginType) => {
  const response = await httpClient.get(`/auth/login/${loginType}`);
  return response;
};
export const signUp = async (signUpType: SocialLoginType) => {
  const response = await httpClient.get(`/auth/singUp/${signUpType}`);
  return response;
};

export const logOut = async () => {
  const response = await httpClient.post(`/auth/logout`);
  return response;
};

export const getUser = async () => {
  const response = await httpClient.get(`/api/users/me`);
  return response.data;
};
