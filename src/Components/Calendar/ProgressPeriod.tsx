// react-datepicker를 사용해서 진행기간 구현 328px, 24px, ex) 24.01.23 - 24.03.23
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export const ProgressPeriod = () => {
<<<<<<< HEAD
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;
  // <DateContainer
  //   name="period"
  //   className="select"
  //   selectsRange={true}
  //   startDate={startDate}
  //   endDate={endDate}
  //   dateFormat="yy.MM.dd"
  //   onChange={(update: any) => {
  //     setDateRange(update);
  //   }}
  //   isClearable={true}
  // />
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <>
      <DateContainer
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yy.MM.dd"
      />
      <Slash>-</Slash>
      <DateContainer
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yy.MM.dd"
      />
    </>
=======
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DateContainer
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      dateFormat="yy.MM.dd"
      onChange={(update: any) => {
        setDateRange(update);
      }}
      isClearable={true}
    />
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  );
};

const DateContainer = styled(DatePicker)`
<<<<<<< HEAD
  width: 145px;
=======
  width: 328px;
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD

const Slash = styled.p`
  padding-right: 20px;
`;
=======
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
