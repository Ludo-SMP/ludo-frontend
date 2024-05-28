import { useMutation } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsType } from '@/Types/notifications';

export const useOnOffNotifications = ({ type }: { type: NotificationsType | 'ALL' }) => {
  return useMutation({
    mutationKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    mutationFn: ({ on }: { on: boolean }) => onOffNotifications({ type, on }),
  });
};
