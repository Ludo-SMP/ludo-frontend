import { useCreateStudyMutation } from '@/Hooks/study/useCreateStudy';
import Layout from './Layout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout mutation={useCreateStudyMutation()} />;
};
