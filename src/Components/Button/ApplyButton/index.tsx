import styled from 'styled-components';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const ApplyButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
`;

export default ApplyButton;
