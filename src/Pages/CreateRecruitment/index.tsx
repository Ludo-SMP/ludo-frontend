import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '@/Assets';
import { useCreateRecruitmentMutation } from '@/Hooks/recruitments/useCreateRecruitment';
import Layout from './layout';
import { useTempSaved } from '@/Hooks/useTempSaved';
import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';

const CreateRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);
  const recruitmentId = Number(useParams().recruitmentId);

  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);

  const { tempSaved } = useTempSaved();

  const { mutate } = useCreateRecruitmentMutation(studyId);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout type="CREATE" mutate={mutate} study={recruitmentDetail?.study} initValue={tempSaved} />
      )}
    </>
  );
};

export default CreateRecruitmentPage;
