import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  checked?: boolean;
  children?: React.ReactNode;
};

export const CancelButton = ({ onClick, children }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 220px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  color: var(--Font-text-disabled, rgba(0, 0, 0, 0.25));
  text-align: center;
`;
