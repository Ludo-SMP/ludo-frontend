import { useCreateStudyMutation } from '@/Hooks/study/useCreateStudy';
import Layout, { StudyCreateForm } from './Layout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTempSaved } from '@/Hooks/useTempSaved';

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { tempSaved } = useTempSaved();

  return <Layout mutation={useCreateStudyMutation()} type="CREATE" initValue={tempSaved as StudyCreateForm} />;
};
