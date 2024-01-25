import styled from 'styled-components';
import { LeftArrow } from '../../Assets/LeftArrow';
export const BackHeader = () => {
  return (
    <BackHeaderContainer>
      <BackWrapper>
        <LeftArrow />
      </BackWrapper>
    </BackHeaderContainer>
  );
};

const BackHeaderContainer = styled.section`
  height: 160px;
  background-color: ${(props) => props.theme.color.gray1};
`;
const BackWrapper = styled.div`
  padding-top: 82px;
  padding-left: 348px;
`;
