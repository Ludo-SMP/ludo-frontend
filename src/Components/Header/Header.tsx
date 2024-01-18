import styled from 'styled-components';
export const Header = () => {
  return <HeaderContainer>헤더헤더</HeaderContainer>;
};

const HeaderContainer = styled.section`
  height: 230px;
  background-color: ${({ theme }) => theme.color.gray1};
`;
