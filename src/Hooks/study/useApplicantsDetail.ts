import { useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { getApplicantsDetail } from '@/Apis/study';
import { ApplicantsDetail } from '@/Types/study';

export const useApplicantsDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.APPLICNATS(studyId)],
    queryFn: () => getApplicantsDetail(studyId),
    select: (data: { data: { data: ApplicantsDetail } }) => data?.data?.data,
  });
};
