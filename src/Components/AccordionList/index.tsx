import { styled } from 'styled-components';

interface AccordionListProps {
  /** 아코디언 리스트 제목 */
  title?: string;

  /** 제목 아래 들어갈 노드 (ex. 아코디언) */
  children?: React.ReactNode;
}

/** 아코디언 목록 */
const AccordionList = ({ title, children }: AccordionListProps) => {
  return (
    <Container>
      <Title>{title ?? '루도가 알려요'}</Title>
      {children}
    </Container>
  );
};

export { AccordionList };

/** 사용법 */
//   <AccordionList title="루도가 알려요">
//     <Stack gap="0px" divider={<Divider width={912} height={3} />}>
//       {dummy.map((item) => (
//         <Accordion title={item.title} key={item.id}>
//           {item.content}
//         </Accordion>
//       ))}
//     </Stack>
//   </AccordionList>

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
