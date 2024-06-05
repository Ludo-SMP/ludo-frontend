import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editNotificationsKeywords } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationKeywords } from '@/Types/notifications';

export const useEditNotificationsKeywords = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [...NOTIFICATIONS.EDIT_NOTIFICATIONS_KEYWORDS],
    mutationFn: ({ categoryIds, stackIds, positionIds }: NotificationKeywords) =>
      editNotificationsKeywords({ categoryIds, stackIds, positionIds }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] }),
  });
};
