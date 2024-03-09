import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { OptionalCreates } from '@/Pages/Studies/GatherStudy';
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

export const GatherButton = ({ setForm, useForm }: Props) => {
  const GatherHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ recruitmentLimit: event.target.selectedIndex });
  };
  return (
    <ButtonConTainer
      name="recruitmentLimit"
      className="select"
      value={useForm.recruitmentLimit}
      onChange={GatherHandler}
    >
      <Textwrapper>모집인원</Textwrapper>
      <Textwrapper value={1}>1명</Textwrapper>
      <Textwrapper value={2}>2명</Textwrapper>
      <Textwrapper value={3}>3명</Textwrapper>
      <Textwrapper value={4}>4명</Textwrapper>
      <Textwrapper value={5}>5명</Textwrapper>
      <Textwrapper value={6}>6명</Textwrapper>
      <Textwrapper value={7}>7명</Textwrapper>
      <Textwrapper value={8}>8명</Textwrapper>
      <Textwrapper value={9}>9명</Textwrapper>
      <Textwrapper value={10}>10명</Textwrapper>
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
