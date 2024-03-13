import styled from 'styled-components';
import { ModalItem } from '../Modalitem/Modalitem';
export const StackContent = () => {
  return (
    <StackContainer>
      <ModalItem item={[]} />
    </StackContainer>
  );
};

const StackContainer = styled.section`
  width: 1200px;
  height: 500px;
  grid-template-columns: repeat(10, 48px);
  grid-template-rows: repeat(6, 190px);
  padding-bottom: 60px;
`;
