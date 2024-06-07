import { useRef } from 'react';
import { AlarmPreview } from './AlarmPreview';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import styled from 'styled-components';
import { Close } from '@/Assets';
import { NotificationSSEType } from '@/Types/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { RightArrow } from '@/Assets/RightArrow';
import Button from '../Common/Button';
import { flexCenter } from '@/Styles/theme';
import { RowDivider } from '../Common/Divider/RowDivider';

interface AlarmInboxProps {
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

  const isReadAll = () => notification?.filter((alarm) => !alarm.read).length === 0;

  return (
    <AlarmInboxWrapper ref={inboxRef}>
      <AlarmPreviewsWrapper>
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
        <PreviewList>
          {notification
            ?.filter((alarm: NotificationSSEType) => !alarm.read)
            ?.map((alarm) => <AlarmPreview key={`${alarm?.notificationId}`} {...alarm} />)}
        </PreviewList>
        <RowDivider rowHeight={1} />
        {!isReadAll() && (
          <BottomBar>
            <Button scheme="text">전체 읽음 처리하기</Button>
          </BottomBar>
        )}
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

const LinkBox = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ theme }) => theme.typo.ButtonButton};
  color: ${({ theme }) => theme.color.black3};
`;

const TopBar = styled.div<{ $isReadAll: boolean }>`
  display: flex;
  height: 40px;
  min-width: 348px;
  max-width: 600px;
  padding: 4px 24px;
  justify-content: space-between;
  align-items: center;
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

  /* Header에서 button box-shadow 속성 적용한 것 무효화시키기 */
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
