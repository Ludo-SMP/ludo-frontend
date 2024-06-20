import { STUDY } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { forceLeaveStudy } from '@/Apis/study';

export const useStudyForceLeaveMutation = (studyId: number, successHandler: () => void) =>
  useMutation({
    mutationKey: [...STUDY.FORCE_LEAVE(studyId)],
    mutationFn: () => forceLeaveStudy(studyId),
    onSuccess: successHandler,
    onError: () => {},
  });
