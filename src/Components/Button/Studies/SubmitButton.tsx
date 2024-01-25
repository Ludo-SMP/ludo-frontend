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
  background-color: ${(props) => props.theme.color.gray1};
  text-align: center;
  width: 600px;
  height: 44px;
`;

const StudyText = styled.text`
  text-align: center;
  font-size: ${(props) => props.theme.font.small1};
  padding: 4px 12px;
`;
