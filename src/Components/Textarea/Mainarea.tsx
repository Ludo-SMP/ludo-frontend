import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
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

export const Mainarea = ({ setForm, useForm }: Props) => {
  // const [contentValue, setForms] = useState('');
  const onContentHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ content: event.target.value });
  };
  // 글자수제한
  const [inputCount, setInputCount] = useState(0);
  const onContentsHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(event.target.value.length);
  };

  return (
    <MainContainer>
      <Input
        id="content"
        name="content"
        value={useForm.content}
        onChange={(event) => [onContentHandler(event), onContentsHandler(event)]}
        maxLength={2000}
        placeholder="상세내용을 기입하세요"
      />
      <InputText>{inputCount}/2000</InputText>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 1224px;
  height: 354px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  padding-top: 300px;
  align-items: center;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.black2};
  padding-right: 16px;
`;
const Input = styled.textarea`
  width: 1112px;
  height: 322px;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray3};
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding-left: 16px;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: ${(props) => props.theme.color.gray1};
  resize: none;
  flex: 1 0 0;
  margin-top: 16px;

  &::placeholder {
    color: ${(props) => props.theme.color.black2};
  }
`;
