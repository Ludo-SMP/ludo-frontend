import LoginButton from '@/Components/Button/LoginButton';
import styled from 'styled-components';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginGuideWrapper></LoginGuideWrapper>
      <LoginBtnsWrapper>
        <LoginButton type="네이버" />
        <LoginButton type="카카오" />
        <LoginButton type="구글" />
      </LoginBtnsWrapper>
    </LoginWrapper>
  );
};

const LoginGuideWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${(props) => props.theme.color.gray5};
`;

const LoginWrapper = styled.div`
  display: flex;
  margin: 40px 348px 80px;
  padding: 312px;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
  align-self: stretch;
  display: flex;
`;

const LoginBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  display: flex;
`;

export default Login;
