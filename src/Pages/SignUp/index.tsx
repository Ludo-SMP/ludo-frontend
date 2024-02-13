import LoginButton from '@/Components/Button/LoginButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpGuideWrapper />
      <LoginBtnsWrapper>
        <LoginButton type="네이버" />
        <LoginButton type="카카오" />
        <LoginButton type="구글" />
      </LoginBtnsWrapper>
      <LoginWrapper>
        <span>이미 ㅇㅇ 계정이 있으신가요?</span>
        <Link to={`/login`}>
          <button>로그인하기</button>
        </Link>
      </LoginWrapper>
    </SignUpWrapper>
  );
};

const SignUpGuideWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${(props) => props.theme.color.gray5};
`;

const SignUpWrapper = styled.div`
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

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  color: ${(props) => props.theme.color.black3};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  button {
    color: ${(props) => props.theme.color.black3};
    font-size: 18px;
  }
`;

export default SignUp;
