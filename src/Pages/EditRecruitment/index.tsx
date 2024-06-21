import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';

import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitFormWithSelect, RecruitmentDetail } from '@/Types/study';
import Layout from '../CreateRecruitment/layout';

export interface RecruitmentProps {
  recruitment: RecruitFormWithSelect;
  study: RecruitmentDetail['study'];
}
export const EditRecruitmentPage = () => {
  const recruitmentId = Number(useParams().recruitmentId);
  const studyId = Number(useParams().studyId);

  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);

  const { mutate } = useEditRecruitmentMutation(studyId);

  const recruitmentData = recruitmentDetail?.recruitment;

  const recruitmentProps: RecruitmentProps = {
    recruitment: {
      title: recruitmentData?.title,
      applicantLimit: recruitmentData?.applicantLimit,
      contact: recruitmentData?.contact,
      callUrl: recruitmentData?.callUrl,
      content: recruitmentData?.content,
      recruitmentEndDateTime: recruitmentData?.endDateTime,
      positionIds: recruitmentData?.positions?.map((position) => position?.id),
      stackIds: recruitmentData?.stacks,
    },
    study: recruitmentDetail?.study,
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout initValue={recruitmentProps.recruitment} studyDetail={recruitmentDetail?.study} mutate={mutate} />
      )}
    </>
  );
};
