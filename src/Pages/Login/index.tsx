import SocialLogin from '@/Components/SocialLogin';
import { media } from '@/Styles/theme';
import styled from 'styled-components';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginGuideWrapper />
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
  gap: 72px;
`;
const LoginGuideWrapper = styled.div`
  height: 320px;
  width: 600px;
  margin: 0 auto;
  align-self: stretch;
  background-color: ${(props) => props.theme.color.gray5};

  ${media.custom(600)} {
    width: 400px;
  }
`;

const LoginBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default Login;
