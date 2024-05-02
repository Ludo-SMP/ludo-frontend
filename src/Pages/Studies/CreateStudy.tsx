import { useCreateStudyMutation } from '@/Hooks/study/useCreateStudy';
import Layout from './Layout';

export const CreateStudy = () => {
  return <Layout {...useCreateStudyMutation()} />;
};
