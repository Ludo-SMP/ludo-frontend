import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { attendStudy } from '@/Apis/study';
import { StudyDetail } from '@/Types/study';
import { Participant } from '@/Types/study';

export const useAttendStudyMutation = (studyId: number, userId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [...STUDY.STUDY(studyId)],
    mutationFn: () => attendStudy(studyId),
    onSuccess: () => {
      queryClient.setQueryData([...STUDY.STUDY(studyId)], (prev: { data: { data: StudyDetail } }) => {
        const newvStudyDetailData: { data: { data: StudyDetail } } = JSON.parse(JSON.stringify(prev));
        newvStudyDetailData.data.data.study.participants = newvStudyDetailData?.data?.data?.study?.participants
          ? newvStudyDetailData?.data?.data?.study?.participants.map((participant: Participant) => {
              return participant.id === userId
                ? { ...participant, recentAttendanceDate: new Date().toISOString() }
                : { ...participant };
            })
          : [];
        return newvStudyDetailData;
      });
    },
  });
};
