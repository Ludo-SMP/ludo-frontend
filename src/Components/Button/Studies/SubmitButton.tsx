import styled from 'styled-components';

export type SubmitProps = {
  children?: React.ReactNode;
};

export const SubmitButton = ({ children }: SubmitProps) => {
  return (
    <StudyContainer>
      <StudyText>{children}</StudyText>
    </StudyContainer>
  );
};

const StudyContainer = styled.button`
  border-radius: 8px;
  background-color: #cbcdd1;
  text-align: center;
  width: 600px;
  height: 44px;
`;

const StudyText = styled.text`
  text-align: center;
  font-size: 14px;
  padding: 4px 12px;
`;
