import SocialLogin from '@/Components/SocialLogin';
import { AUTH } from '@/Constants/messages';
import { ROUTES } from '@/Constants/route';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SignUpBackground } from '@/Assets';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <SignUpWrapper>
      <SignUpGuideWrapper>
        <span className="title">{AUTH.SIGNUP.title}</span>
        <div className="content">{AUTH.SIGNUP.content}</div>
      </SignUpGuideWrapper>
      <SignUpBtnsWrapper>
        <SocialLogin socialType="naver" signType="signup" />
        <SocialLogin socialType="kakao" signType="signup" />
        <SocialLogin socialType="google" signType="signup" />
      </SignUpBtnsWrapper>
      <LoginWrapper>
        <span>이미 루도 계정이 있으신가요?</span>
        <button onClick={() => navigate(ROUTES.AUTH.LOGIN)}>로그인하기</button>
      </LoginWrapper>
    </SignUpWrapper>
  );
};
const SignUpWrapper = styled.div`
  display: flex;
  max-width: 1224px;
  margin: 40px auto 72px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;

  ${media.custom(600)} {
    margin: 0;
    padding: 40px 24px 72px 24px;
  }
`;

const SignUpGuideWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  padding-top: 28px;
  align-self: stretch;
  background-image: url(${SignUpBackground});
  background-repeat: no-repeat;

  ${media.custom(600)} {
    background-image: none;
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

const SignUpBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  color: ${(props) => props.theme.color.black3};
  text-align: center;
  font-family: 'Pretendard500';
  font-size: ${(props) => props.theme.font.medium};
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  button {
    color: ${(props) => props.theme.color.black3};
    font-size: 18px;
    margin-top: 2px;
  }
`;

export default SignUpPage;
