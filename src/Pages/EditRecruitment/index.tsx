import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useParams } from 'react-router-dom';

import { Loading } from '@/Assets';
import { useEditRecruitmentMutation } from '@/Hooks/recruitments/useEditRecruitment';
import { RecruitFormWithSelect } from '@/Types/study';
import Layout from '../CreateRecruitment/layout';

export const EditRecruitmentPage = () => {
  const recruitmentId = Number(useParams().recruitmentId);
  const studyId = Number(useParams().studyId);

  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);

  const { mutate } = useEditRecruitmentMutation(studyId);

  const recruitment = recruitmentDetail?.recruitment;

  const recruitmentProps: RecruitFormWithSelect = {
    ...recruitment,
    recruitmentEndDateTime: recruitment?.endDateTime,
    positionIds: recruitment?.positions?.map((position) => position?.id),
    stackIds: recruitment?.stacks,
  };

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
