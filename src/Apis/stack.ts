import { API_END_POINT } from '@/Constants/api';
import { httpClient } from '@/Utils/axios';
import { useQuery } from '@tanstack/react-query';

export const getStacks = async () => httpClient.get(API_END_POINT.STACK);

export const useStacks = () => {
  return useQuery({
    queryKey: ['stack'],
    queryFn: () => getStacks(),
    select: (data) => data?.data.data.stacks,
  });
};
