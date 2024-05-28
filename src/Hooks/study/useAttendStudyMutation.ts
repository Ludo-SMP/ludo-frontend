import { useMutation } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { attendStudy } from '@/Apis/study';

export const useAttendStudyMutation = (studyId: number) =>
  useMutation({
    mutationKey: [...STUDY.STUDY(studyId)],
    mutationFn: () => attendStudy(studyId),
  });
