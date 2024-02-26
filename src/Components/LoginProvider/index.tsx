import { verifyToken } from '@/Apis/auth';
import { useLoginStore } from '@/Store/auth';
import { useEffect } from 'react';

interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const { isLoggedIn, setIsLoggedIn, setIsLoggedOut } = useLoginStore();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        await verifyToken();
        console.log(isLoggedIn);
        setIsLoggedIn();
      } catch (e) {
        console.log(e);
        setIsLoggedOut();
      }
    };
    checkLoggedIn();
  }, [setIsLoggedIn, setIsLoggedOut]);

  return <>{children}</>;
};

export default LoginProvider;
