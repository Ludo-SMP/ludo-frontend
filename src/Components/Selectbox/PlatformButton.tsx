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

export const PlatformButton = ({ setForm, useForm }: Props) => {
  const [platformValue, setForms] = useState<string>('');
  const submitHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ platform: event.target.value });
  };
  return (
    <ButtonConTainer name="platform" className="select" value={useForm.platform} onChange={submitHandler}>
      <Textwrapper>플랫폼</Textwrapper>
      <Textwrapper value="GATHER">게더타운</Textwrapper>
      <Textwrapper value="GOOGLE_MEET">구글미트</Textwrapper>
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
