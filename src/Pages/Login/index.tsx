import { LoginBackground, MobileLoginBackground } from '@/Assets';
import SocialLogin from '@/Components/SocialLogin';
import { AUTH } from '@/Constants/messages';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LoginWrapper>
      <LoginGuideWrapper>
        <span className="title">{AUTH.LOGIN.title}</span>
        <div className="content">{AUTH.LOGIN.content}</div>
      </LoginGuideWrapper>
      <LoginBtnsWrapper>
        <SocialLogin socialType="naver" signType="login" />
        <SocialLogin socialType="kakao" signType="login" />
        <SocialLogin socialType="google" signType="login" />
      </LoginBtnsWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  max-width: 1224px;
  margin: 40px auto 72px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  ${media.custom(600)} {
    margin: 0;
    padding: 40px 24px 72px 24px;
  }
`;
const LoginGuideWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  gap: 24px;
  margin: 0 auto;
  align-self: stretch;
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-position: center;

  ${media.custom(600)} {
    background-image: none;
  }

  ${media.custom(500)} {
    background-image: url(${MobileLoginBackground});
    background-repeat: no-repeat;
    background-position: 60% -90%;
  }

  .title {
    color: ${({ theme }) => theme.color.black5};
    text-align: center;
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.xxxxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 48px;

    ${media.custom(500)} {
      font-size: ${({ theme }) => theme.font.medium};
      font-family: 'Pretendard600';
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    }
  }

  .content {
    color: ${({ theme }) => theme.color.black5};
    text-align: center;
    font-family: 'Pretendard500';
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    white-space: pre-line;

    ${media.custom(500)} {
      color: ${({ theme }) => theme.color.black5};
      text-align: center;
      font-family: 'Pretendard400';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

const LoginBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export default LoginPage;
