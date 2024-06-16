import { useRef } from 'react';
import { AlarmPreview } from './AlarmPreview';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import styled, { css } from 'styled-components';
import { Close } from '@/Assets';
import { NotificationSSEType } from '@/Types/notifications';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { RightArrow } from '@/Assets/RightArrow';
import { flexCenter } from '@/Styles/theme';
import { RowDivider } from '../Common/Divider/RowDivider';
import { useReadNotification } from '@/Hooks/notifications/useReadNotification';

export interface AlarmInboxProps {
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

  const notReadAlarm = notification?.filter((alarm) => !alarm.read);
  const isReadAll = () => notReadAlarm?.length === 0;
  const { mutate } = useReadNotification([...(notReadAlarm ?? []).map((alarm) => alarm.notificationId)]);

  return (
    <AlarmInboxBox ref={inboxRef}>
      <AlarmBox>
        <TopBar $isReadAll={isReadAll()}>
          <Title>알림</Title>
          <Close onClick={() => handleOpen(false)} />
        </TopBar>
        <TopBar $isReadAll={isReadAll()}>
          <Title>루도가 알려요</Title>
          <LinkBox to={ROUTES.MYPAGE.NOTIFICATIONS} onClick={() => handleOpen(false)}>
            알림페이지 이동
            <RightArrow />
          </LinkBox>
        </TopBar>
        {/* 페이지 이동 후 알림 인박스 닫기 */}
        <AlarmList onClick={() => handleOpen(false)}>
          {notification
            ?.filter((alarm: NotificationSSEType) => !alarm.read)
            ?.map((alarm) => <AlarmPreview key={`${alarm?.notificationId}`} {...alarm} />)}
        </AlarmList>
        <RowDivider rowHeight={1} />
        {!isReadAll() && (
          <BottomBar>
            <GreyTextBox onClick={() => mutate()}>전체 읽음 처리하기</GreyTextBox>
          </BottomBar>
        )}
      </AlarmBox>
    </AlarmInboxBox>
  );
};

const AlarmInboxBox = styled.div`
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

const AlarmBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.black0};
`;

/** 알림 페이지 이동, 전체 읽음 처리하기 text */
const GreyText = css`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.ButtonButton};
  color: ${({ theme }) => theme.color.black3};
  font: none !important;
`;

const LinkBox = styled(Link)`
  ${GreyText}
  gap: 8px;
`;

const GreyTextBox = styled.div`
  ${GreyText}
  cursor: pointer;
`;

const TopBar = styled.div<{ $isReadAll: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 348px;
  max-width: 600px;
  height: 40px;
  padding: 4px 24px;
  border-top-left-radius: ${({ theme, $isReadAll }) => $isReadAll && theme.borderRadius.small};
  border-top-right-radius: ${({ theme, $isReadAll }) => $isReadAll && theme.borderRadius.small};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.black1}`};

  svg {
    cursor: pointer;
  }
`;

const BottomBar = styled.div`
  ${flexCenter}
  width: 100%;
  height: 40px;
  padding: 2px;
  ${({ theme }) => theme.typo.ButtonButton};
  color: ${({ theme }) => theme.color.black3};

  /* Header에서 적용한 button box-shadow 속성 무효화시키기 */
  button {
    box-shadow: none !important;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

const AlarmList = styled.ul`
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
