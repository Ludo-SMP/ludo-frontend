import styled from 'styled-components';

export type SubmitProps = {
  children?: React.ReactNode;
<<<<<<< HEAD
  type?: any;
};

export const SubmitButton = ({ children, type }: SubmitProps) => {
=======
};

export const SubmitButton = ({ children }: SubmitProps) => {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD
  font-size: ${(props) => props.theme.font.small};
=======
  font-size: ${(props) => props.theme.font.small1};
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  padding: 4px 12px;
`;
