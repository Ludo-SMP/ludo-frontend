import { useModalStore } from '@/store/modal';
import { STUDY } from '@/Constants/queryString';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { acceptApply } from '@/Apis/study';

export const useAcceptApplyMutation = (studyId: number, applicantId: number, successHandler: () => void) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_ACCEPT(studyId, applicantId)],
    mutationFn: () => acceptApply(studyId, applicantId),
    onSuccess: () => {
      successHandler();
      openModal();
      queryClient.invalidateQueries({ queryKey: [...STUDY.APPLICNATS(studyId)] });
    },
    onError: () => {},
  });
  return { mutate };
};
