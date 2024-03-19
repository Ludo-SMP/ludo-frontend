// react-datepicker를 사용해서 진행기간 구현 328px, 24px, ex) 24.01.23 - 24.03.23
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
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

export const ProgressPeriod = ({ setForm, useForm }: Props) => {
  const [startDateTime, setForms] = useState(new Date());
  const [endDateTime, setFormss] = useState(new Date());
  // const StartHandler = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setForm({ startDateTime: event.target.value });
  // };

  return (
    <>
      <DateContainer
        selected={startDateTime}
        value={(useForm.startDateTime = startDateTime.toISOString().slice(0, -5))}
        name="startDateTime"
        onChange={(date: Date) => setForms(date)}
        // onChange={StartHandler}
        selectsStart
        startDate={startDateTime}
        // endDate={endDateTime}
        dateFormat="yyyy-MM-dd'T'HH:mm:ss"
      />
      <Slash>-</Slash>
      <DateContainer
        selected={endDateTime}
        value={(useForm.endDateTime = endDateTime.toISOString().slice(0, -5))}
        name="endDateTime"
        onChange={(date: any) => setFormss(date)}
        selectsEnd
        endDate={endDateTime}
        minDate={startDateTime}
        dateFormat="yyyy-MM-dd'T'HH:mm:ss"
      />
    </>
  );
};

const DateContainer = styled(DatePicker)`
  width: 145px;
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

const Slash = styled.p`
  padding-right: 20px;
`;
