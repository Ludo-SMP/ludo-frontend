import { useQuery } from '@tanstack/react-query';
import { RECRUITMENT } from '@/Constants/queryString';
import { getRecruitmentDetail } from '@/Apis/recruitment';
import { RecruitmentDetail } from '@/Types/study';

export const useRecruitmentDetail = (recruitmentId: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.RECRUITMENT(recruitmentId)],
    queryFn: () => getRecruitmentDetail(recruitmentId),
    select: (data: { data: { data: RecruitmentDetail } }) => data?.data.data,
  });
};
