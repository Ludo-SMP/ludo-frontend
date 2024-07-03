import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { attendStudy } from '@/Apis/study';

export const useAttendStudyMutation = (studyId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...STUDY.STUDY(studyId)],
    mutationFn: () => attendStudy(studyId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...STUDY.STUDY(studyId)] }),
  });
};
