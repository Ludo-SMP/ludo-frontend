import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
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

export const ContactButton = ({ setForm, useForm }: Props) => {
  const [contactValue, setForms] = useState<string>('');
  const submitHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ contact: event.target.value });
  };
  return (
    <ButtonConTainer name="contact" className="select" value={useForm.contact} onChange={submitHandler}>
      <Textwrapper>연락방법</Textwrapper>
      <Textwrapper value="EMAIL">이메일</Textwrapper>
      <Textwrapper value="KAKAO">카카오톡</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
