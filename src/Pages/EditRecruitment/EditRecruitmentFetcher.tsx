import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';
import ModifyRecruitmentPage from '.';
import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitmentDetail } from '@/Types/study';
import { TempSaved } from '../CreateRecruitment/page';

export interface RecruitmentProps {
  recruitment: TempSaved;
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

  const recruitmentProps = {
    recruitment: {
      ...recruitmentForm,
      recruitmentEndDateTime: recruitmentData?.endDateTime,
      positionIds: recruitmentData?.positions,
      stackIds: recruitmentData?.stacks,
    },
    study: recruitmentDetail?.study,
  };

  return (
    <>{isLoading ? <Loading /> : <ModifyRecruitmentPage recruitmentDetail={recruitmentProps} mutate={mutate} />}</>
  );
};
