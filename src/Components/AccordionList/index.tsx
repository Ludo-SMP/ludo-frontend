import { styled } from 'styled-components';

export interface AccordionListProps {
  /** 아코디언 리스트 제목 */
  title?: string;

  /** 제목 아래 들어갈 노드 (ex. 아코디언) */
  children: React.ReactNode;
}

/** 아코디언 목록 */
const AccordionList = ({ title, children }: AccordionListProps) => {
  return (
    <Box>
      <Title>{title ?? '루도가 알려요'}</Title>
      <ul>{children}</ul>
    </Box>
  );
};

export { AccordionList };

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 912px;
  padding: 24px 32px;

  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white};
`;

/** TODO: 타이포 적용 */
const Title = styled.h1`
  margin-bottom: 10px;
`;
