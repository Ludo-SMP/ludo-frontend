import { useQuery } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsType } from '@/Types/notifications';

export const useOnOFFNotifications = (type: NotificationsType, on: boolean) => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    queryFn: () => onOffNotifications({ type, on }),
  });
};
