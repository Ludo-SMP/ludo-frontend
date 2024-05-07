import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';

import EditRecruitmentPage from '.';
import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitFormWithSelect, RecruitmentDetail } from '@/Types/study';
import { useSelectDefaultValue } from '@/Hooks/recruitments/useSelectDefaultValue';

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
  const { createdDateTime, endDateTime, updatedDateTime, positions, stacks, ...recruitmentForm } =
    recruitmentData ?? {};

  const parseSelectValue = useSelectDefaultValue('api', recruitmentDetail?.recruitment ?? {});

  const recruitmentProps: RecruitmentProps = {
    recruitment: {
      title: recruitmentData?.title,
      applicantCount: parseSelectValue('applicantCount'),
      contact: parseSelectValue('contact'),
      callUrl: recruitmentData?.callUrl,
      content: recruitmentData?.content,
      recruitmentEndDateTime: recruitmentData?.endDateTime,
      positionIds: parseSelectValue('positionIds'),
      stackIds: recruitmentData?.stacks,
    },
    study: recruitmentDetail?.study,
  };

  return <>{isLoading ? <Loading /> : <EditRecruitmentPage recruitmentDetail={recruitmentProps} mutate={mutate} />}</>;
};
