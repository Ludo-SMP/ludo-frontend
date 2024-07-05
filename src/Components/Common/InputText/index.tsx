import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'member';
  defaultValue?: string;
  currentLength?: number;
  maxLength?: number;
  label?: string;
  icon?: ReactNode;
}

const InputText = forwardRef<HTMLInputElement, ComponentProps<'input'> & InputTextProps>(
  (
    {
      name,
      placeholder,
      defaultValue,
      inputType,
      onChange,
      maxLength,
      currentLength,
      label,
      icon,
      disabled,
      ...props
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box>
        {label && <Label>{label}</Label>}
        <InputWrapper
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          ref={ref}
          type={inputType ?? 'text'}
          onChange={onChange}
          maxLength={maxLength}
          autoComplete="off"
          disabled={disabled}
          {...props}
        />
        {maxLength && (
          <LengthIndicator>
            {currentLength} / {maxLength}
          </LengthIndicator>
        )}
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Box>
    );
  },
);

export const Label = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #000000f2;
  margin-bottom: 12px;
`;

const InputWrapper = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.font.small};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black2};
    font-family: 'Pretendard400';
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const LengthIndicator = styled.div`
  position: absolute;
  bottom: 13px;
  right: 16px;
  color: #00000073;
  font-family: Pretendard400;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export default InputText;
