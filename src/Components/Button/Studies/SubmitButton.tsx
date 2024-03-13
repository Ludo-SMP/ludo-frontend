import styled from 'styled-components';

export type SubmitProps = {
  children?: React.ReactNode;
  type?: any;
  onClick?: any;
};

export const SubmitButton = ({ children }: SubmitProps) => {
  return (
    <StudyContainer>
      <StudyText>{children}</StudyText>
    </StudyContainer>
  );
};

const StudyContainer = styled.button`
  /* border: 1px solid var(--Stroke-Button-black, rgba(0, 0, 0, 0.10));
background: var(--Background-Button-default-primary, #EFECFF); */
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.purple2};
  text-align: center;
  width: 600px;
  height: 44px;
`;

const StudyText = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.font.small};
  padding: 4px 12px;
`;
