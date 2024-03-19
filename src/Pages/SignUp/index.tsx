import SocialLogin from '@/Components/SocialLogin';
import { ROUTES } from '@/Constants/route';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const SignUp = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <SignUpWrapper>
      <SignUpGuideWrapper />
      <SignUpBtnsWrapper>
        <SocialLogin socialType="naver" signType="signup" />
        <SocialLogin socialType="kakao" signType="signup" />
        <SocialLogin socialType="google" signType="signup" />
      </SignUpBtnsWrapper>
      <LoginWrapper>
        <span>이미 ㅇㅇ 계정이 있으신가요?</span>
        <button onClick={() => navigate(ROUTES.AUTH.LOGIN)}>로그인하기</button>
      </LoginWrapper>
    </SignUpWrapper>
  );
};
const SignUpWrapper = styled.div`
  display: flex;
  max-width: 1224px;
  margin: 40px auto 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;
`;

const SignUpGuideWrapper = styled.div`
  height: 320px;
  width: 600px;
  margin: 0 auto;
  align-self: stretch;
  background-color: ${(props) => props.theme.color.gray5};

  ${media.custom(600)} {
    width: 400px;
  }
`;

const SignUpBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  color: ${(props) => props.theme.color.black3};
  text-align: center;
  font-family: Pretendard;
  font-size: ${(props) => props.theme.font.medium};
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  button {
    color: ${(props) => props.theme.color.black3};
    font-size: 18px;
  }
`;

export default SignUp;
