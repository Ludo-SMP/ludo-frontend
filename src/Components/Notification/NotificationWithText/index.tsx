import { RecruitmentNotification, ReviewNotification } from '@/Types/notifications';
import { getElapsedTime } from '@/utils/date';
import Button from '@/Components/Common/Button';
import styled from 'styled-components';
import { textEllipsis } from '@/Styles/theme';
import { useReadNotification } from '@/Hooks/notifications/useReadNotification';
import { useQueryClient } from '@tanstack/react-query';
import { MouseEvent } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationResponse } from '@/Hooks/notifications/useNotifications';
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

const moveToDestPage = (
  {
    type,
    params,
  }:
    | { type: RecruitmentNotification['type']; params: RecruitmentNotification['params'] }
    | { type: ReviewNotification['type']; params: ReviewNotification['params'] },
  navigate: NavigateFunction,
) => {
  let destPagePath = null;

  switch (type) {
    /** 모집공고 알림 => 모집공고 페이지 */
    case 'RECRUITMENT':
      destPagePath = `/studies/${params.recruitmentId}/recruitment`;
      break;
    /** 리뷰 받았을 때 => 스터디 리뷰 페이지 */
    case 'REVIEW_RECEIVE':
      destPagePath = `/studies/${params.studyId}/${params.userId}/review`;
      break;
    /** 상호 리뷰 완료 => 마이페이지의 리뷰 페이지 */
    case 'REVIEW_PEER_FINISH':
      destPagePath = '/mypage/reviews';
      break;
    /** 상호 리뷰 시작 => 스터디 상세 페이지 */
    case 'REVIEW_START':
      destPagePath = `/studies/${params.studyId}`;
      break;
  }
  navigate(destPagePath);
};

export const NotificationWithText = <T extends RecruitmentNotification | ReviewNotification>({
  type,
  notificationId,
  title,
  read,
  params,
  createdAt,
}: NotificationWithTextProps<T>) => {
  const { mutate: readMutate } = useReadNotification(notificationId);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const readNotification = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();

    /** 클릭한 요소의 태그 */
    const isButtonElement = e.target.toString().includes('ButtonElement');

    /** 모집공고 관련 알림일 때, 버튼을 누르지 않은 경우 읽음 처리 X, 페이지 이동 X */
    if (type === 'RECRUITMENT' && !isButtonElement) return;

    // 관련 페이지로 이동
    moveToDestPage({ type: type, params: params }, navigate);

    /** 이미 읽은 경우, 읽음 처리 X */
    if (read) return;

    readMutate(notificationId);

    // 얼람 앍움 처리 캐시 반영
    queryClient.setQueryData(NOTIFICATIONS.NOTIFICATIONS, (prev: { data: { data: NotificationResponse } }) => {
      const newData = JSON.parse(JSON.stringify(prev));

      const alarmArrIdx = prev?.data?.data?.notification.findIndex(
        (notification) => notification.notificationId === notificationId,
      );

      if (alarmArrIdx !== -1) {
        newData.data.data.notification[alarmArrIdx].read = true;
      }
      return newData;
    });
  };

  return (
    <NotificationWithTextBox onClick={readNotification}>
      <NotificationWithTextInnerBox $read={read}>
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

const NotificationWithTextInnerBox = styled.div<{ $read: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
  /** opacitiy 추후 수정 반영 */
  opacity: ${({ $read }) => ($read ? 0.5 : 1)};
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
