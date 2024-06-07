import { SelectArrow } from '@/Assets/SelectArrow';
import { textEllipsis } from '@/Styles/theme';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export interface AccordionProps {
  /** 아코디언 Summary 영역의 Title */
  title: string;

  /** 아코디언 Summary 영역의 이미지의 URL */
  imgUrl: string;

  /** 아코디언을 펼쳤을 때 나타날 내용 */
  children?: React.ReactNode;
}

/** 마이페이지 아코디언 */
const Accordion = (props: AccordionProps) => {
  const { title, imgUrl, children } = props;

  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentHeight(contentRef?.current?.clientHeight ?? 0);
    setIsOpen(null);
  }, []);

  return (
    <AccordionBox>
      <AccordionSummaryBox onClick={() => setIsOpen((prev) => !prev)}>
        <SummaryContentBox>
          <SummaryImg src={imgUrl} />
          <SummaryTitle>{title}</SummaryTitle>
        </SummaryContentBox>
        <SelectArrow isOpen={isOpen} />
      </AccordionSummaryBox>
      <AccordionDetailBox ref={contentRef} $isOpen={isOpen} $contentHeight={contentHeight}>
        {children}
      </AccordionDetailBox>
    </AccordionBox>
  );
};

const AccordionBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 912px;
  padding: 16px 0px;
`;

const AccordionSummaryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  min-height: 40px;
  cursor: pointer;
`;

const SummaryContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const SummaryImg = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
`;

const SummaryTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  ${textEllipsis}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;

const AccordionDetailBox = styled.p<{ $isOpen?: null | boolean; $contentHeight: number }>`
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
