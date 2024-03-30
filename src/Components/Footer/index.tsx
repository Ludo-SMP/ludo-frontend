import styled from 'styled-components';
import { FooterLogo } from '@/Assets';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { useLoginStore } from '@/store/auth';
import { media } from '@/Styles/theme';

const Footer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginStore();
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <NavigationSectionWrapper>
          <div className="navigate" onClick={() => navigate(ROUTES.MAIN)}>
            메인 페이지
          </div>
          <div className="navigate" onClick={() => navigate(ROUTES.RECRUITMENT.RECRUITMENTS)}>
            스터디 모집 공고 모아보기
          </div>
          {isLoggedIn && (
            <div className="navigate" onClick={() => navigate(ROUTES.MYPAGE)}>
              마이 페이지
            </div>
          )}
        </NavigationSectionWrapper>
        <DescriptionSectionWrapper>
          <DescriptionContentWrapper>
            <img src={FooterLogo} alt="logo" />
            <ServiceMainContentWrapper>
              <div className="slogan">함께 하는 가능성, 기회의 연결!</div>
              <div className="copyright">Copyright ⓒ Ludo All rights reserved.</div>
              <div className="member">[BE] 빽, 아카, 휴 | [FE] 타로, 현 | [DE] 포키</div>
            </ServiceMainContentWrapper>
          </DescriptionContentWrapper>
          <ServiceRuleContentWrapper>
            <div className="navigate" onClick={() => {}}>
              소개
            </div>
            <div className="navigate" onClick={() => {}}>
              이용약관
            </div>
            <div className="navigate" onClick={() => {}}>
              개인정보 처리방침
            </div>
          </ServiceRuleContentWrapper>
        </DescriptionSectionWrapper>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;

  max-width: 1920px;
  padding: 24px 40px;
  margin: 80px auto 0 auto;
  background-color: ${({ theme }) => theme.color.gray1};

  ${media.custom(800)} {
    width: 400px;
    margin: 20px auto 0 auto;
  }
`;

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 32px;
  width: 1224px;
  justify-content: flex-start;

  ${media.custom(1224)} {
    width: 100%;
    justify-content: flex-start;
  }

  .navigate {
    &:hover {
      cursor: pointer;
    }
    color: ${({ theme }) => theme.color.black4};
    text-align: center;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xsmall};
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;

const NavigationSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const DescriptionSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    padding-bottom: 9px;
  }
`;

const DescriptionContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const ServiceMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  gap: 4px;

  ${media.custom(1000)} {
    display: none;
  }

  .slogan {
    color: ${({ theme }) => theme.color.black5};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }

  .copyright,
  .member {
    color: ${({ theme }) => theme.color.black2};
    text-align: center;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xsmall};
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

const ServiceRuleContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-left: 15rem;

  ${media.custom(800)} {
    display: none;
  }
`;

export default Footer;
