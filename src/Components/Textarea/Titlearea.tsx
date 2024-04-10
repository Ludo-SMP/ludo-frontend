import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
// import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
// import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IFormValues {
  title: string;
}

export const Titlearea = React.forwardRef<HTMLInputElement, ReturnType<UseFormRegister<IFormValues>>>(
  ({ onChange, name }, ref) => {
    // 글자수제한
    const [inputsCount, setInputsCount] = useState<any>();

    const handler = (e: ChangeEvent<HTMLInputElement>) => {
      setInputsCount(e.target.value);
      onChange(e);
    };

    return (
      <InputContainer>
        <Input id="title" name={name} onChange={handler} maxLength={50} placeholder="제목을 기입해주세요" ref={ref} />
        <InputText>{inputsCount?.length || 0}/50</InputText>
      </InputContainer>
    );
  },
);

const InputContainer = styled.section`
  width: 1224px;
  height: 44px;
  display: flex;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  align-items: center;
`;

const InputText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.black2};
  padding-right: 16px;
`;

const Input = styled.input`
  width: 1153px;
  height: 24px;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: ${(props) => props.theme.color.white};
  resize: none;
  flex: 1 0 0;
  margin: 10px 16px;
`;
