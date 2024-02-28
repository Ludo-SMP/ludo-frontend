// react-datepicker를 사용해서 진행기간 구현 328px, 24px, ex) 24.01.23 - 24.03.23
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export const ProgressPeriod = () => {
  const [startDateTime, setstartDateTime] = useState(new Date());
  // new Date(updateEvent.open).getTime() - 9 * 60 * 60 * 1000
  const [endDateTime, setendDateTime] = useState(new Date());
  console.log(startDateTime);
  console.log(endDateTime);
  return (
    <>
      <DateContainer
        selected={startDateTime}
        name="startDateTime"
        onChange={(date: any) => setstartDateTime(date)}
        selectsStart
        startDate={startDateTime}
        endDate={endDateTime}
        dateFormat="yyyy-MM-dd'T'HH:mm:ss"
      />
      <Slash>-</Slash>
      <DateContainer
        selected={endDateTime}
        name="endDateTime"
        onChange={(date: any) => setendDateTime(date)}
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
