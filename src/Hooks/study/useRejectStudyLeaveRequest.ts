import { STUDY } from '@/Constants/queryString';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { rejectStudyLeaveRequest } from '@/Apis/study';

export const useRejectStudyLeaveMutation = (studyId: number, userId: number, successHandler?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...STUDY.LEAVE_REQUEST_REJECT(studyId)],
    mutationFn: () => rejectStudyLeaveRequest(studyId, userId),
    onSuccess: (queryClient.invalidateQueries({ queryKey: [STUDY.STUDY(studyId)] }), successHandler),
    onError: () => {},
  });
};
