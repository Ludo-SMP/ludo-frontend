import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';

// TODO: 명세보고 any 타입 수정 필요
export const useNotifications = () => {
  return useQuery({
    queryKey: [...NOTIFICATIONS.NOTIFICATIONS],
    queryFn: () => getNotifications(),
    select: (data: { data: { data: any } }) => data?.data?.data,
  });
};
