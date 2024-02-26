import { verifyToken } from '@/Apis/auth';
import { useLoginStore } from '@/Store/auth';
import { useEffect } from 'react';

interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const { setIsLoggedIn, setIsLoggedOut } = useLoginStore();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        await verifyToken();
        setIsLoggedIn();
      } catch (e) {
        setIsLoggedOut();
      }
    };
    checkLoggedIn();
  }, [setIsLoggedIn, setIsLoggedOut]);

  return <>{children}</>;
};

export default LoginProvider;
