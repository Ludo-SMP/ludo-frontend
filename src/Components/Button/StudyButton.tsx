import styled from 'styled-components';

export type StudyProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

/** 스터디 버튼 */
export const StudyButton = ({ children, onClick }: StudyProps) => {
  return (
    <StudyContainer onClick={onClick}>
      <StudyText>{children}</StudyText>
    </StudyContainer>
  );
};

const StudyContainer = styled.button`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.gray5};
  text-align: center;
  width: 153px;
  height: 46px;
`;

const StudyText = styled.text`
  text-align: center;
  font-weight: 600;
  line-height: 44px;
  font-size: ${({ theme }) => theme.font.xsmall};
  color: ${({ theme }) => theme.color.gray3};
  padding: 4px 8px;
`;
