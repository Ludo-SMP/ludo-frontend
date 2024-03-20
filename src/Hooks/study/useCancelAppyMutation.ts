import { useMutation } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { cancelApply } from '@/Apis/study';

export const useCancelAppyMutation = (studyId: number, recruitmentId: number, successHandler: () => void) => {
  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_CANCEL(studyId, recruitmentId)],
    mutationFn: () => cancelApply(studyId, recruitmentId),
    onSuccess: () => {
      successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
