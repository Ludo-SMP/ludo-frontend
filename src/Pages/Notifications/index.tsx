import { NotificationList } from '@/Components/NotificationList';
import { Stack } from '@/Components/Common/Stack';
import { Divider } from '../CreateRecruitment/page';
import styled from 'styled-components';
import { useNotifications } from '@/Hooks/notifications/useNotifications';
import { Notification } from '@/Components/Notification';
import { NotificationSSEType } from '@/Types/notifications';
import { Loading } from '@/Assets';

const Notifications = () => {
  const { data, isLoading } = useNotifications();

  return (
    <NotificationsLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <NotificationList>
          <Stack divider={<Divider height={3} />} gap={'0px'}>
            {data?.notification.map((notification: NotificationSSEType) => <Notification {...notification} />)}
          </Stack>
        </NotificationList>
      )}
    </NotificationsLayout>
  );
};

export { Notifications };

const NotificationsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 912px;
  padding: 24px 32px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white};
  max-height: 1400px;
  overflow: auto;
`;
