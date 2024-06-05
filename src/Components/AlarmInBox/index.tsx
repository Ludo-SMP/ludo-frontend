import { useRef } from 'react';
import { AlarmPreview } from './AlarmPreview';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import styled from 'styled-components';
import { Close } from '@/Assets';
import { NotificationSSEType } from '@/Types/notifications';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';

interface AlarmInboxProps {
  isOpen?: boolean;
  handleOpen?: (prev: boolean) => void;
  alarmPreviews?: {
    notification: NotificationSSEType[];
  };
}

export const AlarmInbox = ({ alarmPreviews, handleOpen }: AlarmInboxProps) => {
  const { notification } = alarmPreviews ?? {};

  const inboxRef = useRef<HTMLDivElement>(null);

  useOutSideClick(inboxRef, () => {
    handleOpen && handleOpen(false);
  });

  return (
    <AlarmInboxWrapper ref={inboxRef}>
      <AlarmPreviewsWrapper>
        <TopBar $alarmLength={notification?.length}>
          <Title>알림</Title>
          <Close onClick={() => handleOpen(false)} />
        </TopBar>
        <TopBar $alarmLength={notification?.length}>
          <Title>루도가 알려요</Title>
        </TopBar>
        <PreviewList>
          {notification?.map((alarmPreview: NotificationSSEType) => (
            <AlarmPreview key={`${alarmPreview?.notificationId}`} {...alarmPreview} />
          ))}
        </PreviewList>
        <BottomBar>
          {notification?.length !== 0 && <button>전체 읽음</button>}
          <Link to={ROUTES.MYPAGE.NOTIFICATIONS}>알림페이지 이동</Link>
        </BottomBar>
      </AlarmPreviewsWrapper>
    </AlarmInboxWrapper>
  );
};

const AlarmInboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 350px;
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.white};

  position: absolute;
  top: 60px;
  right: -40px;
  z-index: 100;
`;

const TopBar = styled.div<{ $alarmLength: number }>`
  display: flex;
  height: 40px;
  min-width: 348px;
  max-width: 600px;
  padding: 4px 24px;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: ${({ theme, $alarmLength }) => $alarmLength === 0 && theme.borderRadius.small};
  border-top-right-radius: ${({ theme, $alarmLength }) => $alarmLength === 0 && theme.borderRadius.small};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.black1}`};

  svg {
    cursor: pointer;
  }
`;

// TODO: 디자인 반영 후 수정
const BottomBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  gap: 20px;
  padding: 2px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

const AlarmPreviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.black0};
`;

const PreviewList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: auto;

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.color.black1};
  }

  & > div:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
    border-bottom: none;
  }
`;
