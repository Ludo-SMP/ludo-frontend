import { ComponentProps, MouseEventHandler } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** 버튼이 form 내부에서 사용될 경우, `type`을 `submit`으로 설정합니다. */
  type?: 'button' | 'submit';

  /** 버튼의 의미를 결정합니다. */
  scheme?: 'primary' | 'secondary' | 'third' | 'normal';

  /** 버튼을 비활성화합니다. */
  disabled?: boolean;

  children: React.ReactNode;
  className?: string;

  /** `fullWidth`의 경우, 크기가 100%로 설정됩니다. */
  size?: 'normal' | 'fullWidth';
};

/** 재사용 가능한 버튼 컴포넌트입니다. */
const Button = ({
  onClick,
  type,
  scheme = 'normal',
  disabled = false,
  children,
  className,
  size = 'normal',
}: ButtonProps) => {
  return (
    <ButtonContainer {...{ onClick, type, scheme, disabled, className, size }}>
      <>{children}</>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 1;
  width: ${({ size, theme }) => (size === 'fullWidth' ? theme.buttonSize.fullWidth : theme.buttonSize.normal)};
  font-size: ${({ theme }) => theme.font.small};
  font-family: 'Pretendard600';
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
