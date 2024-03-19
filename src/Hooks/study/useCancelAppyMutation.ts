import { useMutation } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { cancelApply } from '@/Apis/study';

export const useCancelAppyMutation = (recruitmentId: number, successHandler: () => void) => {
  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_CANCEL(recruitmentId)],
    mutationFn: () => cancelApply(recruitmentId),
    onSuccess: () => {
      successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
