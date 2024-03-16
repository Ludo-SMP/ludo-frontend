import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { closeRecruitment } from '@/Apis/recruitment';
import { RECRUITMENT } from '@/Constants/queryString';

export const useCloseRecruitmentMutation = (studyId: number, successHandler?: () => void) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [...RECRUITMENT.CLOSE_RECRUITMENT(studyId)],
    mutationFn: () => closeRecruitment(studyId),
    onSuccess: () => {
      navigate(`/studies/${studyId}`);
      successHandler && successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
