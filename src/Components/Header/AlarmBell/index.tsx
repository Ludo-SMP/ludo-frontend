import { Alarm } from '@/Assets';
import { flexCenter } from '@/Styles/theme';
import { useState } from 'react';
import styled from 'styled-components';

/** 알림 종 */
const AlarmBell = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box>
      <Alarm width={40} height={40} onClick={() => setIsOpen((prev) => !prev)} />
      <AlarmCnt>
        <Inner>1</Inner>
      </AlarmCnt>
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
`;

const Inner = styled.div`
  font-size: 8px;
  font-family: 'Pretendard500';
  color: white;
`;
