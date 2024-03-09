import styled from 'styled-components';
import { Ludo_Footer } from '@/Assets';
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>메인 페이지</FooterText>
        <FooterText>스터디 모집 공고 모아보기</FooterText>
        <FooterText>마이 페이지</FooterText>
        <BorderBox />

        <FooterBottom>
          <AssetContainer>
            <Ludo_Footer />
          </AssetContainer>
          {/* <ArticleTitles>함께 발견하는 가능성, 기회의 연결!</ArticleTitles>
          <Articles>CopyrightⓒLudo All rights reserved.</Articles>
          <Articles>[BE] 빽 , 아카 , 휴 | [FE] 타로 , 현 | [DE] 포키</Articles>
          <ArticleContainer>
            <Articles></Articles>
          </ArticleContainer> */}
        </FooterBottom>
      </FooterWrapper>

      {/* <Ludo_Footer />
      <FooterBottom>
        <ArticleContainer>
          <ArticleTitles>함께 발견하는 가능성, 기회의 연결!</ArticleTitles>
          <Articles>CopyrightⓒLudo All rights reserved.</Articles>
          <Articles>[BE] 빽 , 아카 , 휴 | [FE] 타로 , 현 | [DE] 포키 </Articles>
        </ArticleContainer>
      </FooterBottom> */}
    </FooterContainer>
  );
};

const AssetContainer = styled.div`
  align-items: center;
`;

const FooterContainer = styled.section`
  display: flex;
  height: 308px;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const BorderBox = styled.span`
  width: 100%;
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

const FooterBottom = styled.div`
  flex-direction: row;
  padding-bottom: 40px;
  padding-top: 32px;
  margin: auto;
`;

const ArticleContainer = styled.div`
  flex-direction: column;
  /* height: 78px; */
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
