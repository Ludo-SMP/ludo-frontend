import { STUDY } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { rejectStudyLeaveRequest } from '@/Apis/study';

export const useRejectStudyLeaveMutation = (studyId: number, successHandler: () => void) =>
  useMutation({
    mutationKey: [...STUDY.LEAVE_REQUEST_REJECT(studyId)],
    mutationFn: () => rejectStudyLeaveRequest(studyId),
    onSuccess: successHandler,
    onError: () => {},
  });
