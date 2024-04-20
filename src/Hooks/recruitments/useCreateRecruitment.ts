import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createRecruitment } from '@/Apis/recruitment';
import { RECRUITMENT } from '@/Constants/queryString';
import { RecruitmentForm } from '@/Types/study';

export const useCreateRecruitmentMutation = (studyId: number, successHandler?: () => void) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [...RECRUITMENT.CREATE_RECRUITMENT(studyId)],
    mutationFn: (body: RecruitmentForm) => createRecruitment(studyId, body),
    onSuccess: () => {
      navigate(`/studies/${studyId}`);
      successHandler && successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
