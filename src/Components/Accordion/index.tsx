import { SelectArrow } from '@/Assets/SelectArrow';
import { textEllipsis } from '@/Styles/theme';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export interface AccordionProps {
  /** 아코디언 써머리 영역에 나타날 제목 */
  title: string;

  /** 아코디언 제목 아래의 설명 */
  description?: string;

  /** 아코디언을 펼쳤을 때 나타날 내용 */
  children?: React.ReactNode;
}

/** 마이페이지 아코디언 */
const Accordion = (props: AccordionProps) => {
  const { title, description, children } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentHeight(contentRef?.current?.clientHeight ?? 0);
  });

  return (
    <Container>
      <AccordionSummary onClick={() => setIsOpen((prev) => !prev)}>
        <SummaryWrap>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </SummaryWrap>
        <SelectArrow isOpen={isOpen} />
      </AccordionSummary>

      <AccordionDetail ref={contentRef} isOpen={isOpen} contentHeight={contentHeight}>
        {children}
      </AccordionDetail>
    </Container>
  );
};

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 24px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 808px;
  padding: 16px 0px;
  gap: 10px;
`;

const AccordionSummary = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;

const AccordionDetail = styled.p<{ isOpen?: boolean; contentHeight: number }>`
  min-width: 300px;
  padding: 8px 64px 8px 0px;
  gap: 16px;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: 0;

  margin-top: -${({ contentHeight }) => contentHeight}px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          margin-top: 0;
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.7s ease-in-out,
            visibility 0.4s ease-in-out;
        `
      : css`
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.3s ease-in-out;
        `}
`;

export { Accordion };
