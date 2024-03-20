import { useModalStore } from '@/store/modal';
import { STUDY } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { acceptApply } from '@/Apis/study';

export const useAcceptApplyMutation = (studyId: number, applicantId: number, successHandler: () => void) => {
  const { openModal } = useModalStore();

  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_ACCEPT(studyId, applicantId)],
    mutationFn: () => acceptApply(studyId, applicantId),
    onSuccess: () => {
      successHandler();
      openModal();
    },
    onError: () => {},
  });
  return { mutate };
};
