import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationSSEType } from '@/Types/notifications';

export const useNotifications = () => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS],
    queryFn: () => getNotifications(),
    select: (data: { data: { data: NotificationResponse } }) => data?.data?.data?.notification,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};
