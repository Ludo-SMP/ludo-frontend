import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';

import EditRecruitmentPage from '.';
import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitFormWithSelect, RecruitmentDetail } from '@/Types/study';

export interface RecruitmentProps {
  recruitment: RecruitFormWithSelect;
  study: RecruitmentDetail['study'];
}
export const EditRecruitmentFetcher = () => {
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
        <EditRecruitmentPage
          recruitment={recruitmentProps.recruitment}
          study={recruitmentProps.study}
          mutate={mutate}
        />
      )}
    </>
  );
};
