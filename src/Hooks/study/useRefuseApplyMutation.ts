import { useModalStore } from '@/store/modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { refuseApply } from '@/Apis/study';

export const useRefuseApplyMutation = (studyId: number, applicantId: number, successHandler: () => void) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_REFUSE(studyId, applicantId)],
    mutationFn: () => refuseApply(studyId, applicantId),
    onSuccess: () => {
      successHandler();
      openModal();
      queryClient.invalidateQueries({ queryKey: [...STUDY.APPLICNATS(studyId)] });
    },
    onError: () => {},
  });
  return { mutate };
};
