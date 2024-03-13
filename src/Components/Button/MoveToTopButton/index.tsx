import styled from 'styled-components';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const MoveToTopButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
  width: 80px;
  height: 80px;
  padding: 13.333px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 1px solid ${(props) => props.theme.color.gray5};
`;

export default MoveToTopButton;
