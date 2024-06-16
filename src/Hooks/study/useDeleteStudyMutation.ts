import { useMutation } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { deleteStudy } from '@/Apis/study';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';

export const useDeleteStudyMutation = (studyId: number) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.DELETE(studyId)],
    mutationFn: () => deleteStudy(studyId),
    onSuccess: () => {
      navigate(ROUTES.MYPAGE.HOME);
    },
    onError: () => {},
  });
  return { mutate };
};
