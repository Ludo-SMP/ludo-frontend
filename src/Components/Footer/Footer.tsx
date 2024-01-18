import styled from 'styled-components';
export const Footer = () => {
  return <FooterContainer>푸터</FooterContainer>;
};

export const FooterContainer = styled.section`
  height: 308px;
  background-color: ${({ theme }) => theme.color.gray1};
`;
