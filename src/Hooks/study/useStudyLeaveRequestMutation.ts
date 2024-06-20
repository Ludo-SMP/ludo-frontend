import { STUDY } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { requestLeaveStudy } from '@/Apis/study';

export const useStudyLeaveRequestMutation = (studyId: number, successHandler?: () => void) =>
  useMutation({
    mutationKey: [...STUDY.LEAVE_REQUEST(studyId)],
    mutationFn: () => requestLeaveStudy(studyId),
    onSuccess: successHandler,
    onError: () => {},
  });
