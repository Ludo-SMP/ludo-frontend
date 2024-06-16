import styled from 'styled-components';
import { Logo, DefaultStudyThumbnail } from '@/Assets';
import { getElapsedTime } from '@/utils/date';
import { NotificationSSEType, NotificationsType } from '@/Types/notifications';
import { useReadNotification } from '@/Hooks/notifications/useReadNotification';
import { moveToDest } from '@/utils/moveToDest';
import { useNavigate } from 'react-router-dom';

export interface AlarmPreviewProps {
  /** 알림 id */
  notificationId: number;

  /** 알람 타입 */
  type: NotificationsType;

  /** 알림 내용 */
  content: string;

  /** 알람 제목*/
  title: string;

  /** 알림 생성 시간 */
  createdAt: string;

  /** 라우트 param */
  params: NotificationSSEType['params'];
}

export const AlarmPreview = ({ notificationId, type, content, title, createdAt, params }: AlarmPreviewProps) => {
  const { mutate } = useReadNotification([notificationId]);

  const navigate = useNavigate();

  const readAlarm = () => {
    mutate();

    // 알림 종류별 페이지 이동
    const destPage = moveToDest(type, params);
    if (destPage) navigate(destPage);
  };

  return (
    <AlarmPreviewItem onClick={readAlarm}>
      <ImageWrapper $alarmType={type}>
        {/* 모집공고 알림만 루도 로고, 나머지는 기본 스터디 이미지 */}
        <img
          src={type?.includes('RECRUITMENT') ? Logo : DefaultStudyThumbnail}
          width={32}
          height={32}
          alt="alarm-image"
        />
      </ImageWrapper>
      <SummaryWrapper>
        <Title>{title}</Title>
        <Description>{content}</Description>
        <ElapsedTime>{getElapsedTime(createdAt)}</ElapsedTime>
      </SummaryWrapper>
    </AlarmPreviewItem>
  );
};

const AlarmPreviewItem = styled.li`
  display: flex;
  width: 100%;
  min-width: 348px;
  max-width: 600px;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 16px;
  background: ${({ theme }) => theme.color.white};

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div<{ $alarmType: NotificationsType }>`
  img {
    border: 1px solid
      ${({ theme, $alarmType }) => ($alarmType?.includes('RECRUITMENT') ? theme.color.black1 : theme.color.gray5)};
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    object-fit: contain;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  align-self: stretch;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color.black4};
  font-family: 'Pretendard400';
  font-size: ${({ theme }) => theme.font.medium};
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  align-self: stretch;
`;

const ElapsedTime = styled.p`
  color: ${({ theme }) => theme.color.black2};
  font-family: 'Pretendard500';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  align-self: stretch;
`;
