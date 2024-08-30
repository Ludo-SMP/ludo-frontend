import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitFormWithSelect } from '@/Types/study';
import Layout from '../CreateRecruitment/layout';
import { useEffect } from 'react';

const EditRecruitmentPage = () => {
  const recruitmentId = Number(useParams().recruitmentId);
  const studyId = Number(useParams().studyId);

  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);

  const { mutate } = useEditRecruitmentMutation(studyId, recruitmentId);

  const recruitment = recruitmentDetail?.recruitment;

  const recruitmentProps: RecruitFormWithSelect = {
    applicantLimit: recruitment?.applicantLimit,
    contact: recruitment?.contact,
    callUrl: recruitment?.callUrl,
    title: recruitment?.title,
    content: recruitment?.content,
    recruitmentEndDateTime: recruitment?.endDateTime,
    positionIds: recruitment?.positions?.map((position) => position?.id),
    stackIds: recruitment?.stacks,
  };

  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout type="EDIT" initValue={recruitmentProps} study={recruitmentDetail?.study} mutate={mutate} />
      )}
    </>
  );
};

export default EditRecruitmentPage;
