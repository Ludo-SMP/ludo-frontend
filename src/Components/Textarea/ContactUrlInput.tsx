import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { OptionalCreates } from '@/Pages/Studies/CreateRecruitment';
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

export const ContactUrlInput = ({ setForm, useForm }: Props) => {
  const [UrlValue, setForms] = useState('');
  console.log(UrlValue, setForms);
  const onUrlHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ callUrl: event.target.value });
  };
  return (
    <InputContainer
      id="callUrl"
      name="callUrl"
      value={useForm.contactUrl}
      onChange={(event) => onUrlHandler(event)}
      placeholder="ex)오픈 카카오톡 링크"
    />
  );
};

const InputContainer = styled.textarea`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
