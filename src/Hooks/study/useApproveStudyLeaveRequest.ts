import { STUDY } from '@/Constants/queryString';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { approveStudyLeaveRequest } from '@/Apis/study';

export const useApproveStudyLeaveRequest = (studyId: number, userId: number, successHandler?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...STUDY.LEAVE_REQUEST_APPROVE(studyId)],
    mutationFn: () => approveStudyLeaveRequest(studyId, userId),
    onSuccess: (queryClient.invalidateQueries({ queryKey: [STUDY.STUDY(studyId)] }), successHandler),
    onError: () => {},
  });
};
