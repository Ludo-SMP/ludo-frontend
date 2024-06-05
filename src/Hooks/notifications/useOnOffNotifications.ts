import { useMutation, useQueryClient } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsSettingConfigType } from '@/Types/notifications';

export const useOnOffNotifications = ({
  notificationConfigGroup,
}: {
  notificationConfigGroup: NotificationsSettingConfigType;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    mutationFn: ({ on }: { on: boolean }) => onOffNotifications({ notificationConfigGroup, on }),
    onSuccess: () => {
      if (notificationConfigGroup === 'ALL_CONFIG' || notificationConfigGroup === 'RECRUITMENT_CONFIG')
        queryClient.invalidateQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] });
    },
  });
};
