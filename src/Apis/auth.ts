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

export const useLogOutMutation = () => {
  const { setIsLoggedOut } = useLoginStore();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => logOut(),
    onSuccess: () => {
      console.log('로그아웃 성공');
      setIsLoggedOut();
      navigate('/');
    },
    onError: () => {
      console.log('로그아웃 실패');
    },
  });
  return { mutate };
};

export const getUser = async () => {
  const response = await httpClient.get(API_END_POINT.USER);
  return response.data;
};
