import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '@/Assets';
import { useCreateRecruitmentMutation } from '@/Hooks/recruitments/useCreateRecruitment';
import Layout from './layout';
import { useTempSaved } from '@/Hooks/useTempSaved';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { RecruitFormWithSelect } from '@/Types/study';

const CreateRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);

  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  const { data: studyDetail, isLoading } = useStudyDetail(studyId);

  const { tempSaved } = useTempSaved();

  const { mutate } = useCreateRecruitmentMutation(studyId);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout
          type="CREATE"
          mutate={mutate}
          study={studyDetail?.study}
          initValue={tempSaved as RecruitFormWithSelect}
        />
      )}
    </>
  );
};

export default CreateRecruitmentPage;
