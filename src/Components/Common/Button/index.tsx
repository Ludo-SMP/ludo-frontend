import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  scheme?: 'primary' | 'secondary' | 'third' | 'normal';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Button = ({
  onClick,
  type,
  scheme = 'normal',
  disabled = false,
  children,
  className,
  size = 'large',
}: ButtonProps) => (
  <ButtonContainer {...{ onClick, type, scheme, disabled, className, size }}>
    <>{children}</>
  </ButtonContainer>
);

const ButtonContainer = styled.button<{
  scheme: 'primary' | 'secondary' | 'third' | 'normal';
  size: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 1;
  width: ${({ size, theme }) =>
    size === 'medium' ? theme.buttonSize.medium : size === 'small' ? theme.buttonSize.small : theme.buttonSize.large};
  font-size: ${({ theme }) => theme.font.small};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  white-space: nowrap;
  color: ${({ scheme, theme }) => (scheme === 'primary' ? theme.color.white : theme.color.black3)};
  background: ${({ scheme, theme }) =>
    scheme === 'primary' ? theme.color.purple1 : scheme === 'secondary' ? theme.color.purple2 : theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ scheme, theme }) => (scheme === 'third' ? theme.borderRadius.xlarge : theme.borderRadius.small)};

  &:hover {
    color: ${({ scheme, theme }) => (scheme === 'normal' ? theme.color.black4 : theme.color.white)};
    background: ${({ scheme, theme }) =>
      scheme === 'third' ? theme.color.orange4 : scheme === 'normal' ? theme.color.white : theme.color.purple5};
  }

  &:active {
    color: ${({ scheme, theme }) =>
      scheme === 'normal' ? theme.color.black : scheme === 'third' ? theme.color.orange3 : theme.color.white};
    background: ${({ scheme, theme }) =>
      scheme === 'primary' ? theme.color.purple5 : scheme === 'secondary' ? theme.color.purple1 : theme.color.white};
    border: 1px solid ${({ scheme, theme }) => (scheme === 'third' ? theme.color.orange3 : theme.color.black1)};
  }

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.color.white};
    color: rgba(0, 0, 0, 0.25);
  }
`;

export default Button;
