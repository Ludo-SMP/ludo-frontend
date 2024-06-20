import { useEditStudyMutation } from '@/Hooks/study/useEditStudy';
import Layout from './Layout';
import { useParams } from 'react-router-dom';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';

export default () => {
  const { studyId } = useParams();

  const id = parseInt(studyId);

  const query = useStudyDetail(id);
  const mutation = useEditStudyMutation(id);

  return <Layout query={query} mutation={mutation} type="EDIT" />;
};
