import { SelectArrow } from '@/Assets/SelectArrow';
import { textEllipsis } from '@/Styles/theme';
import { StudyNotification } from '@/Types/notifications';
import { getElapsedTime } from '@/utils/date';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export interface AccordionProps<T extends StudyNotification> {
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

  /** 아코디언을 펼쳤을 때 나타날 내용 */
  children?: React.ReactNode;
}

/** 마이페이지 아코디언 */
const Accordion = <T extends StudyNotification>(props: AccordionProps<T>) => {
  const { title, createdAt, children } = props;

  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentHeight(contentRef?.current?.clientHeight ?? 0);
    setIsOpen(null);
  }, []);

  return (
    <List>
      <Box onClick={() => setIsOpen((prev) => !prev)}>
        <Item>
          <Title>{title}</Title>
          <ElapsedTime>{getElapsedTime(createdAt)}</ElapsedTime>
        </Item>
        <SelectArrow isOpen={isOpen} />
      </Box>

      <AccordionDetail ref={contentRef} $isOpen={isOpen} $contentHeight={contentHeight}>
        {children}
      </AccordionDetail>
    </List>
  );
};

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 24px);
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  padding: 16px 0px;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

export const ElapsedTime = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;

const AccordionDetail = styled.p<{ $isOpen?: null | boolean; $contentHeight: number }>`
  min-width: 300px;
  padding: 8px 64px 8px 0px;
  gap: 16px;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: 0;

  margin-top: -${({ $contentHeight }) => $contentHeight}px;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          opacity: 1;
          margin-top: 0;
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.7s ease-in-out,
            visibility 0.4s ease-in-out;
        `
      : typeof $isOpen === 'boolean' &&
        css`
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.3s ease-in-out;
        `}
`;

export { Accordion };
