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

  // const handleStop = async () => {
  //   console.log('stop');
  //   eventSource.current?.close();
  //   await fetch('http://localhost:8080/sse/streaming/stop');
  // };

  // const handleStart = async () => {
  //   console.log('start');
  //   // 새로운 이벤트 소스 객체 생성 후 연결
  //   fetchSSE();
  // };

  return (
    <>
      {/* <div onClick={handleStop}>stop</div>
      <div onClick={handleStart}>start</div> */}
      <Box onClick={() => setIsOpen((prev) => !prev)}>
        <Alarm width={40} height={40} />
        <AlarmCnt>
          <Inner>{data?.notification?.length ?? 0}</Inner>
        </AlarmCnt>
        {isOpen && <AlarmInbox alarmPreviews={data} isOpen={isOpen} handleOpen={handleOpen} />}
      </Box>
    </>
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
