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

  &:hover {
    background: ${({ primary, theme }) =>
      primary === 'primary' ? theme.color.purple6 : primary === 'secondary' ? theme.color.orange3 : theme.color.white};
    color: ${({ primary, theme }) => (primary === 'primary' ? theme.color.white : theme.color.black4)};
  }

  &:active {
    background: ${({ primary, theme }) => (primary === 'primary' ? theme.color.purple3 : theme.color.white)};
    color: ${({ primary, theme }) => (primary === 'primary' ? theme.color.white : theme.color.black4)};
  }

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.color.white};
    color: rgba(0, 0, 0, 0.25);
  }
`;

export default Button;
