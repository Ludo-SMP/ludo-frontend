// react-datepicker를 사용해서 마감날짜 구현 328px, 44px, ex) 24.01.23
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
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

export const EndDate = ({ setForm, useForm }: Props) => {
  const [startDateTime, setForms] = useState(new Date());
  return (
    <DateContainer
      value={(useForm.recruitmentEndDateTime = startDateTime.toISOString().slice(0, -5))}
      selected={startDateTime}
      dateFormat="yy.MM.dd"
      onChange={(date: Date) => setForms(date)}
      placeholderText="ex)24.01.07"
      isClearable={true}
    />
  );
};

const DateContainer = styled(DatePicker)`
  width: 328px;
  height: 24px;
  background-color: ${(props) => props.theme.color.gray3};
  align-items: center;
  align-self: stretch;
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
