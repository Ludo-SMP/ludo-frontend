import { useCreateStudyMutation } from '@/Hooks/study/useCreateStudy';
import Layout from './Layout';

export default () => {
  return <Layout {...useCreateStudyMutation()} />;
};
