import { FilterOptionParams } from '@/Types/study';
import { useInfiniteQuery } from '@tanstack/react-query';
import { RECRUITMENT } from '@/Constants/queryString';
import { getRecruitments } from '@/Apis/recruitment';

export const useRecruitments = ({
  filterOptions,
  count,
}: {
  last?: number;
  count: number;
  filterOptions: Pick<FilterOptionParams, 'categoryId' | 'positionId' | 'progressMethod' | 'stackIds'>;
}) => {
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: [...RECRUITMENT.RECRUITMENTS(filterOptions)],
    queryFn: ({ pageParam }) => getRecruitments(filterOptions, count, pageParam),
    getNextPageParam: (lastPage) => {
      const recruitments = lastPage?.data?.data?.recruitments;
      if (recruitments?.length !== count) return undefined;
      return recruitments[recruitments.length - 1].id;
    },
    initialPageParam: undefined,
  });
  return { data, hasNextPage, fetchNextPage, isLoading };
};
