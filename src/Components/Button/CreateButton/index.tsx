import styled from 'styled-components';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const CreateButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
  padding: 0;
  background-color: none;
  align-items: flex-start;
`;

export default CreateButton;
