import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'member';
}

const InputText = React.forwardRef(
  ({ placeholder, inputType, onChange, ...props }: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputWrapper placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props} />;
  },
);

const InputWrapper = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};

  ::placeholder {
    color: ${({ theme }) => theme.color.black2};
    font-family: 'Pretendard400';
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

export default InputText;
