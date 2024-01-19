import styled from 'styled-components';

export type StudyProps = {
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClick: () => void;
  children?: React.ReactNode;
};

export const StudyButton = ({ children, onClick }: StudyProps) => {
  return (
    <StudyContainer onClick={onClick}>
      <StudyText>{children}</StudyText>
    </StudyContainer>
  );
};

const StudyContainer = styled.button`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.white1};
  text-align: center;
  width: 148px;
  height: 46px;
`;

const StudyText = styled.text`
  text-align: center;
  font-size: ${({ theme }) => theme.font.xsmall};
  color: ${({ theme }) => theme.color.gray3};
  padding: 4px 12px;
`;
