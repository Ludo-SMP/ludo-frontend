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

// 회원가입
export const signUp = async (signUpType: SocialLoginType) => {
  await apiRequester.get(`/auth/signup/${signUpType}`).then((res) => res);
};

// 로그인
export const logIn = async (loginInfo: UserInfo, loginType: SocialLoginType) => {
  await GET(`/auth/login/${loginType}`, loginInfo);
};

// 로그이웃
export const logOut = async () => await POST('/auth/logout');

// 토큰 검증??
export const verifyToken = async () => await GET('/auth');
