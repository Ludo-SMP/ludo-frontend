import { useMutation } from '@tanstack/react-query';
import { readNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';

/** 알림 읽음 API */
export const useReadNotification = (notificationId: number) => {
  return useMutation({
    mutationKey: [...NOTIFICATIONS.READ_NOTIFICATIONS(notificationId)],
    mutationFn: (notificationId: number) => readNotifications(notificationId),
  });
};
