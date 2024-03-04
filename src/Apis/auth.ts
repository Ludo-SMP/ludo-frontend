import { API_END_POINT } from '@/Constants/api';
import { useLoginStore } from '@/Store/auth';
import { httpClient } from '@/Utils/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export interface UserInfo {
  email: string;
  password: string;
}

export const logOut = async () => httpClient.post(API_END_POINT.LOGOUT);

<<<<<<< HEAD
export const login = async (loginType: SocialLoginType) => {
  const response = await httpClient.get(`api/auth/login/${loginType}`);
  return response;
};
export const signUp = async (signUpType: SocialLoginType) => {
  const response = await httpClient.get(`/auth/singUp/${signUpType}`);
  return response;
};

export const logOut = async () => {
  const response = await httpClient.post(`/auth/logout`);
  return response;
=======
export const useLogOutMutation = () => {
  const { setIsLoggedOut } = useLoginStore();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logOut,
    onSuccess: () => {
      console.log('성공');
      setIsLoggedOut();
      navigate('/');
    },
    onError: () => {
      console.log('error');
    },
  });
  return { logoutMutate: mutate };
>>>>>>> 13bfd44f73995db4ace6c0219c5424b370daf9d2
};

export const getUser = async () => {
  const response = await httpClient.get(API_END_POINT.USER);
  return response.data;
};
