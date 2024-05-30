import { useMutation, useQueryClient } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsSetting, NotificationsType } from '@/Types/notifications';
import { AxiosResponse } from 'axios';

export const useOnOffNotifications = ({ type }: { type: NotificationsType | 'ALL' }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    mutationFn: ({ on }: { on: boolean }) => onOffNotifications({ type, on }),
    onSuccess: () => {
      if (type === 'ALL') queryClient.invalidateQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] });
    },
    // onMutate: () => {
    //   queryClient.cancelQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] });
    //   const prevNotificationSettings: AxiosResponse<{ data: NotificationsSetting }> = queryClient.getQueryData([
    //     ...NOTIFICATIONS.NOTIFICATIONS_SETTING,
    //   ]);
    //   console.log('전', prevNotificationSettings.data.data.settings.all);

    //   const newNotificationSettings = { ...prevNotificationSettings };
    //   newNotificationSettings.data.data.settings.all = !newNotificationSettings.data.data.settings.all;
    //   console.log('후', newNotificationSettings.data.data.settings.all);

    //   queryClient.setQueryData([...NOTIFICATIONS.NOTIFICATIONS_SETTING], { ...newNotificationSettings });
    //   return { prevNotificationSettings };
    // },
  });
};
