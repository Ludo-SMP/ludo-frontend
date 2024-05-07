import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface IFormValues {
  callUrl: string;
}
export const ContactUrlInput = React.forwardRef<HTMLInputElement, ReturnType<UseFormRegister<IFormValues>>>(
  ({ onChange, name }, ref) => {
    return <InputContainer id={name} name={name} onChange={onChange} placeholder="ex)오픈 카카오톡 링크" ref={ref} />;
  },
);

const InputContainer = styled.input`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
