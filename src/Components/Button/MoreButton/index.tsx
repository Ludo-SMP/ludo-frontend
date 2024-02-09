import styled from 'styled-components';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const MoreButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: 0.65;
  gap: 8px;

  & > div:first-child {
    height: 100%;
    color: ${(props) => props.theme.color.black4};
    text-align: center;
    font-size: ${(props) => props.theme.font.xsmall};
    font-weight: 600;
    line-height: 44px;
  }
`;

export default MoreButton;
