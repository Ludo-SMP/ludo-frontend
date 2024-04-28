import { ComponentProps, ForwardedRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'member';
  currentLength?: number;
  maxLength?: number;
  label?: string;
}

const InputText = forwardRef<HTMLInputElement, ComponentProps<'input'> & InputTextProps>(
  (
    { name, placeholder, defaultValue, inputType, onChange, maxLength, currentLength, label, ...props }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box>
        {label && <Label>{label}</Label>}
        <InputWrapper
          placeholder={placeholder}
          name={name}
          ref={ref}
          type={inputType ?? 'text'}
          onChange={onChange}
          {...props}
        />
        {maxLength && (
          <LengthIndicator>
            {currentLength} / {maxLength}
          </LengthIndicator>
        )}
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
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;

  ::placeholder {
    color: ${({ theme }) => theme.color.black2};
    font-family: 'Pretendard400';
    font-size: ${({ theme }) => theme.font.medium};
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
