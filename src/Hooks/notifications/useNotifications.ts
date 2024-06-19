import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationSSEType } from '@/Types/notifications';

export interface NotificationResponse {
  notification: NotificationSSEType[];
}

export const useNotifications = () => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS],
    queryFn: () => getNotifications(),
    select: (data: { data: { data: NotificationSSEType[] } }) => data?.data?.data,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};
