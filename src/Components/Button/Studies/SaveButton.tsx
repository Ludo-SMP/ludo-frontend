import styled from 'styled-components';

export type SubmitProps = {
  children?: React.ReactNode;
  type?: any;
  onClick?: any;
};

export const SaveButton = ({ children }: SubmitProps) => {
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

const StudyText = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.font.small};
  padding: 4px 12px;
`;
