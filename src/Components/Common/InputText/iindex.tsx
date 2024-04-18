import { ComponentProps, ForwardedRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'member';
  currentLength?: number;
  maxLength?: number;
}

const InputText = forwardRef<HTMLInputElement, ComponentProps<'input'> & InputTextProps>(
  (
    { name, placeholder, inputType, onChange, maxLength, currentLength, ...props }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box>
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

const InputWrapper = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.font.small};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};

  ::placeholder {
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
`;

const LengthIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  color: #00000073;
  font-family: Pretendard400;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export default InputText;
