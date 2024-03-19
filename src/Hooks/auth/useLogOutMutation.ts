import { useLoginStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import { logOut } from '@/Apis/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogOutMutation = () => {
  const { setIsLoggedOut } = useLoginStore();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => logOut(),
    onSuccess: () => {
      setIsLoggedOut();
      navigate('/');
    },
    onError: () => {},
  });
  return { mutate };
};
