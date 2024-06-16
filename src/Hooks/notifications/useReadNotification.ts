import { useMutation, useQueryClient } from '@tanstack/react-query';
import { readNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationResponse } from './useNotifications';

/** 알림 읽음 API */
export const useReadNotification = (notificationIds: number[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...NOTIFICATIONS.READ_NOTIFICATIONS],
    mutationFn: () => readNotifications({ notificationIds: notificationIds }),
    onSuccess: () => {
      // 읽은 알림 쿼리 캐시에 반영
      queryClient.setQueryData(NOTIFICATIONS.NOTIFICATIONS, (prev: { data: { data: NotificationResponse } }) => {
        const newData = JSON.parse(JSON.stringify(prev));

        // 읽은 알림 read값 변경
        notificationIds?.map((notificationId) => {
          const alarmArrIdx = prev?.data?.data?.notification.findIndex(
            (alarm) => alarm.notificationId === notificationId,
          );
          if (alarmArrIdx !== -1) {
            newData.data.data.notification[alarmArrIdx].read = true;
          }
        });
        return newData;
      });
    },
  });
};
