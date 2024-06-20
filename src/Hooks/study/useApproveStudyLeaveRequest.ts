import { STUDY } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { approveStudyLeaveRequest } from '@/Apis/study';

export const useApproveStudyLeaveRequest = (studyId: number, successHandler?: () => void) =>
  useMutation({
    mutationKey: [...STUDY.LEAVE_REQUEST_APPROVE(studyId)],
    mutationFn: () => approveStudyLeaveRequest(studyId),
    onSuccess: successHandler,
    onError: () => {},
  });
