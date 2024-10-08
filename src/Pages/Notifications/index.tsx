import { Stack } from '@/Components/Common/Stack';
import { Divider } from '../CreateRecruitment/layout';
import styled from 'styled-components';
import { useNotifications } from '@/Hooks/notifications/useNotifications';
import { Notification } from '@/Components/Notification';
import { NotificationSSEType } from '@/Types/notifications';
import { Loading, SignUpFail } from '@/Assets';
import ChipMenu from '@/Components/Common/ChipMenu';
import { useState } from 'react';
import { media } from '@/Styles/theme';

const Notifications = () => {
  const { data: notifications, isLoading } = useNotifications();

  const [selectedNotificationType, setSelectedNotificationType] = useState<'REVIEW' | 'RECRUITMENT' | 'STUDY'>('STUDY');

  return (
    <NotificationsLayout>
      <NotificationTypeChipsBox>
        <ChipMenu checked={selectedNotificationType === 'STUDY'} onClick={() => setSelectedNotificationType('STUDY')}>
          스터디 (모집, 지원, 탈퇴, 마감임박)
        </ChipMenu>
        <ChipMenu checked={selectedNotificationType === 'REVIEW'} onClick={() => setSelectedNotificationType('REVIEW')}>
          스터디원 (리뷰, 신고)
        </ChipMenu>
        <ChipMenu
          checked={selectedNotificationType === 'RECRUITMENT'}
          onClick={() => setSelectedNotificationType('RECRUITMENT')}
        >
          모집공고
        </ChipMenu>
        {/* 기타 알림 */}
        {/* <ChipMenu checked={false} onClick={() => {}}>
          기타
        </ChipMenu> */}
      </NotificationTypeChipsBox>
      {notifications.length === 0 ? (
        <PlaceHolder>
          <PlaceHolderTitle>아직 받은 알림이 없습니다.</PlaceHolderTitle>
          <img src={SignUpFail} width={392} height={240} alt="no saved items" />
        </PlaceHolder>
      ) : (
        <NotificationList>
          {isLoading ? (
            <Loading />
          ) : (
            <Stack divider={<Divider $height={2} $dividerColor="#e5e6e8" />} gap={'0px'}>
              {notifications
                ?.filter((notification: NotificationSSEType) => {
                  if (selectedNotificationType === 'STUDY')
                    return !notification.type.includes('REVIEW') && !notification.type.includes('RECRUITMENT');
                  return notification.type.includes(selectedNotificationType);
                })
                ?.map((notification: NotificationSSEType) => (
                  <Notification {...notification} key={notification.notificationId} />
                ))}
            </Stack>
          )}
        </NotificationList>
      )}
    </NotificationsLayout>
  );
};

const NotificationsLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  gap: 24px;
  flex: 1 0 0;
`;

const NotificationTypeChipsBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  overflow: scroll;
`;

const NotificationList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white};
  max-height: 1400px;
  overflow: auto;

  ${media.mobile} {
    padding: 0 0 24px 0;
  }
`;

const PlaceHolder = styled.div`
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
`;

const PlaceHolderTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.ListLabel};
`;

export default Notifications;
