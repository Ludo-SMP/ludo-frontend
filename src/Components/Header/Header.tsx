import styled from 'styled-components';
import { FilterButton } from '../Button/FilterButton';
import { StudyButton } from '../Button/StudyButton';
import { Alarm } from '../../Assets/Alarm';
import { Hamberger } from '../../Assets/Hamberger';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeadBorderBox>가나다</HeadBorderBox>
      <HeadWrapper>가나다</HeadWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  height: 230px;
  background-color: ${({ theme }) => theme.color.gray1};
  display: flex;
  flex-direction: column;
`;

const HeadBorderBox = styled.span`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #444444;
  padding-bottom: 140px;
  align-items: center;
`;
const HeadWrapper = styled.div`
  width: 100%;
  height: 72px;
`;
