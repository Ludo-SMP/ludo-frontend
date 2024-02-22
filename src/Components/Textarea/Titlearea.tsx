import { useState, useRef, useCallback } from 'react';
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';
// import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { FieldErrors, FieldValues, UseFormRegister, FormState } from 'react-hook-form';
import { Validation } from '../../Constants/Validation';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  onChange?: (event: any) => void;
  value?: any;
  type?: string;
  name?: string;
  maxlength?: any;
  id?: string;
  formData?: any;
  ref?: any;
};

type InputProps = {
  id?: any;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  errors?: FieldErrors;
  defaultValue?: string;
  onErrorMsg?: boolean;
  smallLabel?: boolean;
  validation?: RegisterOptions;
  register?: any;
  formState?: any;

  // register: UseFormRegisterReturn;
  [key: string]: any;
};

//작성

// export const Titles = atom('');

// {
//   id,
//   type,
//   required,
//   errors,
//   placeholder,
//   defaultValue,
//   register,
//   formstate,
// }: InputProps
export const Titlearea = (Props: any) => {
  const useInput = (defaultValue: string) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
      const { value } = target;
      setValue(value);
    };
    return { value, onChange, setValue };
  };

  const newTitle = useInput('');
  // 글자수제한
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };
  return (
    <InputContainer id="title" className="input">
      <Input
        onChange={(event) => [newTitle.setValue(event.target.value), onInputHandler(event)]}
        // id={id} placeholder={placeholder} defaultValue={defaultValue} maxLength={50}
        placeholder="제목을 입력하시오"
        // type="text"
        // id={id}
        // {...register('title', {
        //   required: '제목을 입력하세요',
        //   errors: '제목을 입력해주세요',
        // })}
        // required={true}
        // placeholder="제목을 입력하세요"
      />
      {/* {id.value < 0 && <span>"제목을 입력하세요"</span>} */}
      <InputText>{inputCount}/50</InputText>
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
