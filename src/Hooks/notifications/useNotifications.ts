import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';

export const useNotifications = () => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS],
    queryFn: () => getNotifications(),
    select: (data) => data?.data,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};
