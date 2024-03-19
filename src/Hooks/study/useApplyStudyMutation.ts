import { SetStateAction } from 'react';
import { ApplyTryStatus } from '@/Types/study';
import { useModalStore } from '@/store/modal';
import { useMutation } from '@tanstack/react-query';
import { applyStudy } from '@/Apis/study';
import { STUDY } from '@/Constants/queryString';

export const useApplyStudyMutation = (
  studyId: number,
  recruitmentId: number,
  handleApplyApprove: React.Dispatch<SetStateAction<ApplyTryStatus>>,
) => {
  const { openModal } = useModalStore();
  const { mutate } = useMutation({
    mutationKey: [STUDY.APPLY(studyId, recruitmentId)],
    mutationFn: (selectedPosition: number) => applyStudy(studyId, recruitmentId, { positionId: selectedPosition }),
    onSuccess: () => {
      handleApplyApprove('SUCCESS');
      openModal();
    },
    onError: () => {
      // const message = e?.response?.data?.message;
      // if (message === '현재 모집 중인 스터디가 아닙니다.') handleApplyApprove(() => 'CLOSED');
      // if (message === '이미 지원한 모집 공고입니다.') handleApplyApprove(() => 'ALREDAY_APPLY');
      openModal();
    },
  });
  return { mutate };
};
