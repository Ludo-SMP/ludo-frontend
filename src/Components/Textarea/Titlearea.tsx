import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
// import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  // onChange?: (event: string) => void;
  setForm: (any: OptionalCreates) => void;
  useForm: Creates;
  value?: string;
  type?: string;
  name?: string;
  maxlength?: number;
  id?: string;
  formData?: number | string;
  ref?: string;
};

//작성

export const Titlearea = ({ setForm, useForm }: Props) => {
  // const [inputValue, setForms] = useState('');
  const onValueHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ title: event.target.value });
  };
  // 글자수제한
  const [inputsCount, setInputsCount] = useState(0);

  const onInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputsCount(event.target.value.length);
  };
  return (
    <InputContainer>
      <Input
        id="title"
        name="title"
        value={useForm.title}
        onChange={(event) => [onValueHandler(event), onInputHandler(event)]}
        maxLength={50}
        placeholder="제목을 기입해주세요"
      />
      <InputText>{inputsCount}/50</InputText>
    </InputContainer>
  );
};

const InputContainer = styled.section`
  width: 1224px;
  height: 44px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  align-items: center;
  align-self: stretch;
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  align-items: left;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.black2};
  padding-right: 16px;
`;

const Input = styled.textarea`
  width: 1153px;
  height: 24px;
  background-color: ${(props) => props.theme.color.gray3};
  align-items: center;
  align-self: stretch;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: ${(props) => props.theme.color.gray1};
  resize: none;
  flex: 1 0 0;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  padding-left: 16px;
`;
