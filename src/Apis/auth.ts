import { API_END_POINT } from '@/Constants/api';
import { httpClient } from '@/Utils/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export interface UserInfo {
  email: string;
  password: string;
}

export const logOut = async () => httpClient.post(API_END_POINT.LOGOUT);

export const useLogOutMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logOut,
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      console.log('error');
    },
  });
  return { mutate };
};

export const getUser = async () => {
  const response = await httpClient.get(API_END_POINT.USER);
  return response.data;
};
