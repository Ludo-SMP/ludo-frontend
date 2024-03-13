import { getUser } from '@/Apis/auth';
import { useLoginStore } from '@/Store/auth';
import { useUserStore } from '@/Store/user';
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
        setUser(data);
      } catch (e) {
        // console.log(e);
        setIsLoggedOut();
        resetUser();
      }
    };
    checkLoggedIn();
  }, [setIsLoggedIn, setIsLoggedOut, resetUser, setUser]);

  return <>{children}</>;
};

export default LoginProvider;
