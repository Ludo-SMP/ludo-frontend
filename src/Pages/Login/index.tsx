import SocialLogin from '@/Components/SocialLogin';
import { AUTH } from '@/Constants/messages';
import { useOnOFFNotifications } from '@/Hooks/notifications/useOnOffNotifications';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  const { pathname } = useLocation();
  useOnOFFNotifications({ type: 'STUDY_APPLICANT', on: true });

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
  margin: 40px auto 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const LoginGuideWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  gap: 24px;
  margin: 0 auto;
  align-self: stretch;

  ${media.custom(600)} {
    width: 400px;
  }
  .title {
    color: ${({ theme }) => theme.color.black5};
    text-align: center;
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.xxxxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
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
  }
`;

const LoginBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default LoginPage;
