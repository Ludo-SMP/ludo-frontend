import { useQuery } from '@tanstack/react-query';
import { getStudyDetail } from '@/Apis/study';
import { STUDY } from '@/Constants/queryString';
import { StudyDetail } from '@/Types/study';

export const useStudyDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.STUDY(studyId)],
    queryFn: () => getStudyDetail(studyId),
    select: (data: { data: { data: StudyDetail } }) => data?.data?.data,
  });
};
