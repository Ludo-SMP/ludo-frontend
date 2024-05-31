import { useCallback, useEffect, useState } from 'react';
import { AlarmInbox } from '@/Components/AlarmInBox';
import { useNotifications } from '@/Hooks/notifications/useNotifications';
import { useSSE } from '@/Hooks/useSSE';
import styled from 'styled-components';
import { flexCenter } from '@/Styles/theme';
import { Alarm } from '@/Assets';

/** 알림 종 */
const AlarmBell = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useNotifications();

  const { fetchSSE, eventSource } = useSSE();

  useEffect(() => {
    fetchSSE();

    return () => {
      eventSource.current.close();
    };
  }, []);

  const handleOpen = useCallback((isOpen: boolean) => setIsOpen(isOpen), []);

  return (
    <Box onClick={() => setIsOpen((prev) => !prev)}>
      <Alarm width={40} height={40} />
      <AlarmCnt>
        <Inner>{data?.notification?.length ?? 0}</Inner>
      </AlarmCnt>
      {isOpen && <AlarmInbox alarmPreviews={data} isOpen={isOpen} handleOpen={handleOpen} />}
    </Box>
  );
};

export { AlarmBell };

const Box = styled.div`
  display: flex;
  position: relative;
`;

const AlarmCnt = styled.div`
  ${flexCenter};
  width: 12px;
  height: 12px;
  position: absolute;
  top: 6px;
  right: 8px;
  background-color: ${({ theme }) => theme.color.buttonHoverSecondary};
  border-radius: 50%;
  cursor: pointer;
`;

const Inner = styled.div`
  font-size: 8px;
  font-family: 'Pretendard500';
  color: white;
`;
