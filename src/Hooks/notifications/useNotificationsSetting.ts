import { useQuery } from '@tanstack/react-query';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { getNotificationsSetting } from '@/Apis/notification';
import { NotificationsSetting } from '@/Types/notifications';

export const useNotificationsSetting = () => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING],
    queryFn: () => getNotificationsSetting(),
    select: (data: { data: { data: NotificationsSetting } }) => data?.data?.data,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};
