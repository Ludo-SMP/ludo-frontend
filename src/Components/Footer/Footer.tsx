import styled from 'styled-components';
export const Footer = () => {
  return (
    <FooterContainer>
      <BorderBox>
        <FooterWrapper>
          <FooterText>서비스소개</FooterText>
          <FooterText>이용약관</FooterText>
          <FooterText>개인정보처리방침</FooterText>
          <FooterText>오류문의 및 신고</FooterText>
          <FooterText>더보기</FooterText>
        </FooterWrapper>
      </BorderBox>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  display: flex;
  height: 308px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const FooterWrapper = styled.div`
  padding-left: 348px;
  padding-top: 40px;
  height: 204px;
  flex-direction: row;
`;

const BorderBox = styled.span`
  width: 100%;
  height: 104px;
  border-bottom: 1px solid #444444;
  padding-bottom: 140px;
  align-items: center;
`;

const FooterText = styled.span`
  font-size: 14px;
  padding-right: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

// const LineWrapper = styled.line`
//   border-bottom: 10px solid #444444;
//   padding-bottom: 100px;
// `;
