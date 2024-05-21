import { useMutation } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsType } from '@/Types/notifications';

export const useOnOffNotifications = () => {
  return useMutation({
    mutationKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    mutationFn: (data: { type: NotificationsType; on: boolean }) => onOffNotifications(data),
  });
};
