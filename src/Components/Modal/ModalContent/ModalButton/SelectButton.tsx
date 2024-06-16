import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  checked?: boolean;
  children?: React.ReactNode;
};

export const SelectButton = ({ onClick, children }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 468px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.strokeDividerThick};
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
`;
