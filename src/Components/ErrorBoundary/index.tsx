import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import Button from '../Common/Button';
import { ERROR } from '@/Constants/messages';
const ErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundaryWrapper>
      <div className="notFound__image"></div>
      <div className="notFound__text">{ERROR.NOT_FOUND.content}</div>
      <Button scheme="primary" onClick={() => navigate(ROUTES.MAIN)}>
        <span>메인페이지로 이동하기</span>
      </Button>
    </ErrorBoundaryWrapper>
  );
};

const ErrorBoundaryWrapper = styled.div`
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;

  .notFound__image {
    margin: 0 auto;
    width: 316px;
    height: 160px;
    background-color: ${({ theme }) => theme.color.gray1};
  }

  .notFound__text {
    color: ${({ theme }) => theme.color.black4};
    text-align: center;
    font-size: ${({ theme }) => theme.font.xlarge};
    font-style: normal;
    font-weight: 500;
    white-space: pre-line;
    line-height: 40px;
  }
`;

export default ErrorBoundary;
