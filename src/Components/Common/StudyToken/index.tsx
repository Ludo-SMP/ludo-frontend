import { StudyStatus } from '@/Types/study';
import styled from 'styled-components';

export type TokenType = 'STUDY' | 'APPLICANT' | 'MEMBER';

export interface StudyTokenProps {
  tokenType: TokenType;
  status?: StudyStatus | string;
  children?: React.ReactNode;
}

const StudyToken = ({ tokenType, status, children }: StudyTokenProps) => {
  return (
    <StudyTokenWrapper tokenType={tokenType} status={status}>
      {children}
    </StudyTokenWrapper>
  );
};

const StudyTokenWrapper = styled.span<{ tokenType: TokenType; status: StudyStatus | string }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ tokenType, status, theme }) =>
    tokenType === 'MEMBER'
      ? theme.color.purple5
      : status === '진행 중'
      ? theme.color.purple1
      : status === '완료됨'
      ? `rgba(0, 0, 0, 0.25)`
      : theme.color.black3};

  background: #f2f2f2;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export default StudyToken;
