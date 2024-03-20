import { SetStateAction } from 'react';
import { ApplyTryStatus } from '@/Types/study';
import { useModalStore } from '@/store/modal';
import { useMutation } from '@tanstack/react-query';
import { applyStudy } from '@/Apis/study';
import { STUDY } from '@/Constants/queryString';
import { AxiosError } from 'axios';

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
    onError: (e: AxiosError<{ ok: boolean; message: string; data: null }>) => {
      const errorMessage = e.response.data?.message;
      if (errorMessage === '이미 지원한 모집 공고입니다.' || errorMessage === '이미 거절된 모집 공고입니다.')
        handleApplyApprove(() => 'ALREDAY_APPLY');
      if (errorMessage === '이미 수락된 모집 공고입니다.') handleApplyApprove(() => 'ALREDY_PARTICIPATED');
      if (errorMessage === '현재 모집 중인 스터디가 아닙니다.') handleApplyApprove(() => 'CLOSED');
      openModal();
    },
  });
  return { mutate };
};
