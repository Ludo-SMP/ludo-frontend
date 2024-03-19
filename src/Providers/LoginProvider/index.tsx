import { getUser } from '@/Apis/auth';
import { useLoginStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
import { useEffect } from 'react';

interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const { setIsLoggedIn, setIsLoggedOut } = useLoginStore();
  const { setUser, resetUser } = useUserStore();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { data } = await getUser();
        setIsLoggedIn();
        setUser(data?.user);
      } catch (e) {
        setIsLoggedOut();
        resetUser();
      }
    };
    checkLoggedIn();
  }, [setIsLoggedIn, setIsLoggedOut, resetUser, setUser]);

  return <>{children}</>;
};

export default LoginProvider;
