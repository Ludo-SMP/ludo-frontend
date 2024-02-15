import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  primary?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Button = ({
  onClick,
  type,
  primary = 'default',
  disabled = false,
  children,
  className,
  size = 'medium',
}: ButtonProps) => (
  <ButtonContainer {...{ onClick, type, primary, disabled, className, size }}>
    <>{children}</>
  </ButtonContainer>
);

const ButtonContainer = styled.button<{ primary: 'primary' | 'secondary' | 'default'; size: string }>`
  cursor: pointer;
  box-sizing: border-box;
  opacity: 1;
  width: ${({ size }) => size === 'large' && '100%'};
  white-space: nowrap;
`;

export default Button;
