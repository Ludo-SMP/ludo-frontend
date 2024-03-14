import styled from 'styled-components';
import { Ludo_Footer } from '@/Assets';
import { media } from '@/Styles/theme';
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>메인 페이지</FooterText>
        <FooterText>스터디 모집 공고 모아보기</FooterText>
        <FooterText>마이 페이지</FooterText>
        <BorderBox />
        <FooterBottom>
          <Ludo_Footer />
          <MiddleWrapper>
            <ArticleTitles>함께 발견하는 가능성, 기회의 연결!</ArticleTitles>
            <Articles>CopyrightⓒLudo All rights reserved.</Articles>
            <Articles>[BE] 빽 , 아카 , 휴 | [FE] 타로 , 현 | [DE] 포키 </Articles>
          </MiddleWrapper>
          <LastWrapper>
            <FooterText>서비스 소개</FooterText>
            <FooterText>이용약관</FooterText>
            <FooterText>개인정보 처리방침</FooterText>
          </LastWrapper>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  width: 3000px;
  height: 308px;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.color.gray1};
  ${media.custom(500)} {
    background-color: ${({ theme }) => theme.color.gray1};
    max-width: 1920px;
  }
  ${media.custom(1024)} {
    background-color: ${({ theme }) => theme.color.gray1};
    max-width: 1920px;
  }
`;

const MiddleWrapper = styled.section`
  display: grid;
  grid-template-rows: 30px 30px 30px;
  flex-direction: row;
  grid-template-columns: 504px;
  padding-bottom: 24px;
`;

const BorderBox = styled.span`
  width: 1200px;
  height: 104px;
  border-bottom: 1px solid #444444;
  padding-bottom: 32px;
  align-items: center;
`;
const FooterWrapper = styled.div`
  padding-left: 348px;
  padding-top: 24px;
  height: 204px;
  flex-direction: row;
`;

const LastWrapper = styled.div`
  display: grid;
  grid-template-rows: 78px;
  grid-template-columns: 101px 101px 150px;
`;

const FooterBottom = styled.div`
  padding-bottom: 40px;
  padding-top: 32px;
  gap: 24px;
  display: grid;
  grid-template-rows: 78px;
  grid-template-columns: 180px 513px 513px;
`;

const ArticleTitles = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 40px;
`;
const Articles = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const FooterText = styled.span`
  font-size: 14px;
  padding-right: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
