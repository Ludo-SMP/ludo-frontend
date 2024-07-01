import styled from 'styled-components';
import { FooterLogo } from '@/Assets';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { useLoginStore } from '@/store/auth';
import { media } from '@/Styles/theme';
import Button from '../Common/Button';
import { RowDivider } from '../Common/Divider/RowDivider';
import { NOTION_URL } from '@/Constants/common';

const Footer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginStore();
  return (
    <FooterSection>
      <ContentBox>
        <NavBtnList>
          <NavBtn scheme="text" onClick={() => navigate(ROUTES.MAIN)}>
            메인 페이지
          </NavBtn>
          <NavBtn scheme="text" onClick={() => navigate(ROUTES.RECRUITMENT.RECRUITMENTS)}>
            스터디 모집 공고 모아보기
          </NavBtn>
          {isLoggedIn && (
            <Button scheme="text" onClick={() => navigate(ROUTES.MYPAGE.HOME)}>
              마이 페이지
            </Button>
          )}
        </NavBtnList>
        <ServiceIntroBox>
          <SummaryBox>
            <img src={FooterLogo} alt="logo" width={112} height={40} />
            <SloganText>함께 발견하는 가능성, 기회의 연결!</SloganText>
          </SummaryBox>
          <DescriptionBox>
            <DescText>Copyright ⓒ Ludo All rights reserved.</DescText>
            <MemberTextList>
              <DescText>[BE] 빽, 아카, 휴</DescText>
              <DescText>[FE] 아비리아, 클레어, 현, 타로</DescText>
              <DescText>[UXUI] 포키</DescText>
            </MemberTextList>
          </DescriptionBox>
        </ServiceIntroBox>
        <RowDivider />
        <ServiceDetailBtnList>
          <NavBtn scheme="text" onClick={() => window.open(NOTION_URL)}>
            서비스 소개
          </NavBtn>
          <NavBtn scheme="text" onClick={() => window.open(NOTION_URL)}>
            문의하기
          </NavBtn>
          <NavBtn scheme="text" onClick={() => window.open(NOTION_URL)}>
            자주하는 질문
          </NavBtn>
          <NavBtn scheme="text" onClick={() => window.open(NOTION_URL)}>
            이용약관
          </NavBtn>
          <NavBtn scheme="text" onClick={() => window.open(NOTION_URL)}>
            개인정보 처리방침
          </NavBtn>
        </ServiceDetailBtnList>
      </ContentBox>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  padding: 0px 24px;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  max-width: 1224px;
  padding: 24px 0 40px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const NavBtnList = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const ServiceIntroBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;

  ${media.custom(600)} {
    flex-direction: column;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  width: 300px;
  min-width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex: 1 0 0;
`;

const MemberTextList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2px 12px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const ServiceDetailBtnList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  gap: 4px 12px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const SloganText = styled.p`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const DescText = styled.p`
  color: ${({ theme }) => theme.color.black2};
  text-align: center;
  font-family: 'Pretendard500';
  font-size: ${({ theme }) => theme.font.xsmall};
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const NavBtn = styled(Button)`
  padding: 12px 0;
`;

export default Footer;
