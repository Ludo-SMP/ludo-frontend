import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import Button from '../Common/Button';
import { ErrorBoundaryImage } from '@/Assets';
import { media } from '@/Styles/theme';

/** 예외가 발생했을 때, 존재하지 않는 라우트에 접근했을 때 보여지는 페이지 */
const ErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundaryBox>
      <Title>
        <HighlightedText>잘못된 접근</HighlightedText>이예요ㅠ
      </Title>
      <ContentBox>
        <DescriptionText />
        <ErrorImage src={ErrorBoundaryImage} />
      </ContentBox>
      <MovetoMainButton scheme="primary" size="fullWidth" onClick={() => navigate(ROUTES.MAIN)}>
        메인페이지로 이동하기
      </MovetoMainButton>
    </ErrorBoundaryBox>
  );
};

const ErrorBoundaryBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0px 72px 0px;
  gap: 32px;
  align-self: stretch;
  ${media.mobile} {
    padding: 40px 10px 72px 10px;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard800';
  font-size: ${({ theme }) => theme.font.xxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.color.orange3};
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 12px;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.color.black4};
  text-align: center;
  font-family: 'Pretendard400';
  font-size: ${({ theme }) => theme.font.small};
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const ErrorImage = styled.img`
  width: 100%;
  max-width: 392px;
  ${media.mobile} {
    width: 350px;
  }
`;

const MovetoMainButton = styled(Button)`
  min-width: 300px;
  max-width: 600px;
  padding: var(--Spacing-4, 4px) var(--Spacing-24, 24px);
`;

export default ErrorBoundary;
