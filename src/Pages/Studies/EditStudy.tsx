import { useEditStudyMutation } from '@/Hooks/study/useEditStudy';
import Layout from './Layout';
import { useParams } from 'react-router-dom';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';

export default () => {
  const { studyId } = useParams();

  const id = parseInt(studyId);

  const query = useStudyDetail(id);
  const mutation = useEditStudyMutation(id);

  const {
    attendanceDay,
    category,
    startDateTime,
    endDateTime,
    participantLimit,
    platform,
    platformUrl,
    title,
    way,
    owner,
    participants,
  } = query?.data?.study ?? {};

  const studyProps = {
    attendanceDay,
    category: category?.id,
    startDateTime,
    endDateTime,
    participantLimit,
    platform,
    platformUrl,
    title,
    way,
    positionId: participants?.find((participant) => participant.id === owner.id)?.position?.id ?? 0,
  };

  return <Layout query={query} mutation={mutation} type="EDIT" initValue={studyProps} />;
};
