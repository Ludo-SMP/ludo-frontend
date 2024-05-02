import { useEditStudyMutation } from '@/Hooks/study/useEditStudy';
import Layout from './Layout';
import { useParams } from 'react-router-dom';

export const EditStudy = () => {
  const { studyId } = useParams();

  return <Layout {...useEditStudyMutation(parseInt(studyId))} />;
};
