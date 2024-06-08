import { RightArrow } from '@/Assets/RightArrow';
import { NotificationSSEType } from '@/Types/notifications';
import { getElapsedTime } from '@/utils/date';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface NotificationProps<T extends NotificationSSEType> {
  /** 알림 타입 */
  type: T['type'];

  /** 알림 id */
  notificationId: number;

  /** 알림 Title */
  title: string;

  /** 알림 상세 내용 */
  content?: string;

  /** 읽은 기록  */
  read: boolean;

  /** 페이지 이동에 필요한 params */
  params: T['params'];

  /** 알림 생성 시간 */
  createdAt: string;
}

export const Notification = <T extends NotificationSSEType>(props: NotificationProps<T>) => {
  const { type, notificationId, title, content, read, params, createdAt } = props;
  return (
    <NotificationBox>
      <TopBar>
        <SummaryBox>
          <Title>{title}</Title>
          <ElapsedTimeText>{getElapsedTime(createdAt)}</ElapsedTimeText>
        </SummaryBox>
        <LinkBox to={'/'}>
          <LinkText>해당 페이지 이동</LinkText>
          <RightArrow width={20} height={20} />
        </LinkBox>
      </TopBar>
      <DescBox>{content}</DescBox>
    </NotificationBox>
  );
};

const NotificationBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 912px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const SummaryBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black5};

  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

const ElapsedTimeText = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const LinkBox = styled(Link)`
  display: flex;
  width: 173px;
  padding: 12px 16px 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const LinkText = styled.span`
  width: 105px;
  color: ${({ theme }) => theme.color.black3};
  text-align: center;

  /* Button/Button-SemiBold */
  font-family: 'Pretendard600';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
`;

const DescBox = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.black4};

  /* Page/Body-Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  align-self: stretch;
`;
