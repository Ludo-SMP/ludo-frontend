import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { editRecruitment } from '@/Apis/recruitment';
import { RECRUITMENT } from '@/Constants/queryString';
import { RecruitmentForm } from '@/Types/study';

export const useEditRecruitmentMutation = (studyId: number, recruitmentId: number, successHandler?: () => void) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [...RECRUITMENT.EDIT_RECRUITMENT(studyId)],
    mutationFn: (body: RecruitmentForm) => editRecruitment(studyId, recruitmentId, body),
    onSuccess: () => {
      navigate(`/studies/${studyId}`);
      successHandler && successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
