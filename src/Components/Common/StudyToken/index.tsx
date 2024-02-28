import styled from 'styled-components';

export type TokenState = 'default' | 'InProgress' | 'Completed' | 'Apply';

export interface TokenStateProps {
  tokenState: TokenState;
  children: React.ReactNode;
}

const StudyToken = ({ tokenState = 'default', children }: TokenStateProps) => {
  return <StudyTokenWrapper {...{ tokenState }}>{children}</StudyTokenWrapper>;
};

const StudyTokenWrapper = styled.span<{ tokenState: TokenState }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ tokenState, theme }) =>
    tokenState === 'InProgress'
      ? theme.color.purple1
      : tokenState === 'Completed'
      ? `rgba(0, 0, 0, 0.25)`
      : theme.color.orange3};

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
