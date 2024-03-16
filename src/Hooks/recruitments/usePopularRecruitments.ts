import { useQuery } from '@tanstack/react-query';
import { getPopularRecruitments } from '@/Apis/recruitment';
import { RECRUITMENT } from '@/Constants/queryString';
import { PopularRecruitments } from '@/Types/study';

export const usePopularRecruitments = (count?: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.POPULAR],
    queryFn: () => getPopularRecruitments(count),
    select: (data: { data: { data: PopularRecruitments } }) => data?.data?.data,
  });
};
