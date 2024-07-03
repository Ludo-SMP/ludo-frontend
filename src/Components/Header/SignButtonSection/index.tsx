import Button from '@/Components/Common/Button';
import { ROUTES } from '@/Constants/route';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import { useLoginStore } from '@/store/auth';

/** 로그인, 회원가입 버튼 */
const SignButtonSection = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginStore();
  const { mutate: logoutMutate } = useLogOutMutation();

  return (
    <SignButtonSectionWrapper $isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <Button className="logout" type="button" onClick={() => logoutMutate()}>
          로그아웃
        </Button>
      ) : (
        <>
          <Button
            className="login"
            type="button"
            onClick={() => {
              navigate(ROUTES.AUTH.LOGIN);
            }}
          >
            로그인
          </Button>
          <Button
            className="signup"
            type="button"
            onClick={() => {
              navigate(ROUTES.AUTH.SIGNUP);
            }}
          >
            회원가입
          </Button>
        </>
      )}
    </SignButtonSectionWrapper>
  );
};

const SignButtonSectionWrapper = styled.div<{ $isLoggedIn: boolean }>`
  display: flex;
  gap: ${({ $isLoggedIn }) => ($isLoggedIn ? '8px' : '12px')};

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
