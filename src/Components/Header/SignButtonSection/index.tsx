import { apiRequester } from '@/Apis/auth';
import Button from '@/Components/Common/Button';
import { ROUTER_PATH } from '@/Constants/Router_Path';
import { media } from '@/Styles/theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface SignButtonSectionProps {
  isLoggedIn: boolean;
}

const SignButtonSection = ({ isLoggedIn }: SignButtonSectionProps) => {
  const navigate = useNavigate();
  return (
    <SignButtonSectionWrapper {...{ isLoggedIn }}>
      {isLoggedIn ? (
        <Button
          className="logout"
          type="button"
          onClick={() => {
            apiRequester.post(`/auth/logout`);
          }}
        >
          로그아웃
        </Button>
      ) : (
        <>
          <Button
            className="login"
            type="button"
            onClick={() => {
              navigate(ROUTER_PATH.login);
            }}
          >
            로그인
          </Button>
          <Button
            className="signup"
            type="button"
            onClick={() => {
              navigate(ROUTER_PATH.signup);
            }}
          >
            회원가입
          </Button>
        </>
      )}
    </SignButtonSectionWrapper>
  );
};

const SignButtonSectionWrapper = styled.div<{ isLoggedIn: boolean }>`
  display: flex;
  gap: ${(props) => (props.isLoggedIn ? '8px' : '12px')};
  ${media.tablet} {
    display: none;
  }

  .logout {
    padding: 0 12px 0 16px;
    color: ${(props) => props.theme.color.black2};
    border-radius: ${(props) => props.theme.borderRadius.xlarge};
    background: ${(props) => props.theme.color.white};

    &:hover {
      color: ${(props) => props.theme.color.black4};
    }

    &:active {
      color: ${(props) => props.theme.color.purple1};
      border: 1px solid ${(props) => props.theme.color.purple5};
      background: ${(props) => props.theme.color.white};
    }
  }

  .login {
    color: ${(props) => props.theme.color.purple1};
    padding: 0 16px;
    border-radius: ${(props) => props.theme.borderRadius.xlarge};
    background: ${(props) => props.theme.color.white};

    &:hover,
    &:active {
      color: ${(props) => props.theme.color.white};
      border: 1px solid ${(props) => props.theme.color.purple5};
      background: ${(props) => props.theme.color.purple3};
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.25);
      border: 1px solid ${(props) => props.theme.color.purple2};
      background: ${(props) => props.theme.color.white};
    }
  }

  .signup {
    color: ${(props) => props.theme.color.black3};
    padding: 0 16px;
    border-radius: ${(props) => props.theme.borderRadius.xlarge};
    background: ${(props) => props.theme.color.white};

    &:hover,
    &:active {
      color: ${(props) => props.theme.color.black4};
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;
export default SignButtonSection;
