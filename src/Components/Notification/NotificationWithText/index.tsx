import { RecruitmentNotification, ReviewNotification } from '@/Types/notifications';
import { getElapsedTime } from '@/utils/date';
import Button from '@/Components/Common/Button';
import styled from 'styled-components';
import { textEllipsis } from '@/Styles/theme';

interface NotificationWithTextProps<T extends RecruitmentNotification | ReviewNotification> {
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

export const NotificationWithText = <T extends RecruitmentNotification | ReviewNotification>({
  type,
  notificationId,
  title,
  content,
  read,
  params,
  createdAt,
}: NotificationWithTextProps<T>) => {
  return (
    <NotificationWithTextBox>
      <NotificationWithTextInnerBox>
        <Item>
          <Title>{title}</Title>
          <ElapsedTimeText>{getElapsedTime(createdAt)}</ElapsedTimeText>
        </Item>
        {type?.includes('RECRUITMENT') && (
          <Button type="button" scheme="secondary">
            페이지로 이동
          </Button>
        )}
      </NotificationWithTextInnerBox>
    </NotificationWithTextBox>
  );
};

const NotificationWithTextBox = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  padding: 16px 0px;
`;

const NotificationWithTextInnerBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 24px);
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

const ElapsedTimeText = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;
