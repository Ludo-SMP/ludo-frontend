import styled from 'styled-components';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

/** 지원하기 버튼 */
const ApplyButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
`;

export default ApplyButton;
