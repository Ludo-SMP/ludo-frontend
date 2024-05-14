import { useMutation } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { leaveStudy } from '@/Apis/study';
import { ROUTES } from '@/Constants/route';
import { useNavigate } from 'react-router-dom';

export const useLeaveStudyMutation = (studyId: number) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.LEAVE(studyId)],
    mutationFn: () => leaveStudy(studyId),
    onSuccess: () => {
      navigate(ROUTES.MYPAGE.HOME);
    },
    onError: () => {},
  });
  return { mutate };
};
