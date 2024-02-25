import styled from 'styled-components';

type ButtonProps = {
  children?: React.ReactNode;
  width?: string;
  size?: string;
  onClick?: () => void;
};

export const MediumButton = ({ children }: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 184px;
  height: 44px;
  padding: var(--Padding-btn-lg-vertical, 0px) var(--btn-md-horizontal-padding, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-8, 8px);
  border-radius: var(--Corner-radius-8, 8px);
  background: var(--Font-text-muted, rgba(0, 0, 0, 0.45));
`;
const ButtonText = styled.p`
  color: var(--Font-text-on-primary, rgba(255, 255, 255, 0.85));
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 44px;
`;
