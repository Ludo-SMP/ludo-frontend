import Button from '@/Components/Common/Button';
import { AUTH } from '@/Constants/messages';
import { ROUTES } from '@/Constants/route';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SignUpFail } from '@/Assets';
import styled from 'styled-components';

const SignUpFailPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SignUpFailWrapper>
      <SignUpFailGuideWrapper>
        <span className="title">{AUTH.SIGNUP_FAIL.title}</span>
        <div className="content">{AUTH.SIGNUP_FAIL.content}</div>
      </SignUpFailGuideWrapper>
      <SignUpFailImageWrapper>
        <img src={SignUpFail} />
      </SignUpFailImageWrapper>
      <SignUpFailBtnsWrapper>
        <Button scheme="primary" size="fullWidth" onClick={() => navigate(ROUTES.AUTH.LOGIN)}>
          로그인 페이지로 이동하기
        </Button>
      </SignUpFailBtnsWrapper>
    </SignUpFailWrapper>
  );
};

const SignUpFailWrapper = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  max-width: 1224px;
  gap: 40px;
  flex-shrink: 0;
`;
const SignUpFailGuideWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
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
    font-size: ${({ theme }) => theme.font.xxlarge};
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

const SignUpFailImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const SignUpFailBtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  button {
    padding: 7px 0;
  }
`;

export default SignUpFailPage;
