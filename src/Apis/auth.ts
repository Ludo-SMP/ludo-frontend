import { GET, POST } from '@/utils/axios';
import axios, { AxiosInstance } from 'axios';

export const apiRequester: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export interface UserInfo {
  email: string;
  password: string;
}

export type SocialLoginType = 'google' | 'kakao' | 'naver';

export const signUp = async (signUpType: SocialLoginType) => {
  await apiRequester.get(`/auth/login/${signUpType}`).then((res) => res);
};
export const login = async (signUpType: SocialLoginType) => {
  await apiRequester.get(`/auth/signup/${signUpType}`).then((res) => res);
};

// 로그이웃
export const logOut = async () => await POST('/auth/logout');

// 토큰 검증
export const verifyToken = async () => await GET('/api/usrs/me');
