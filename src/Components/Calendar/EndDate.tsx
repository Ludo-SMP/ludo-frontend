// react-datepicker를 사용해서 마감날짜 구현 328px, 44px, ex) 24.01.23
import React, { useState } from 'react';
import DatePicker, { ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { ControllerRenderProps } from 'react-hook-form';

interface IFormValues {
  recruitmentEndDateTime: string;
}
export const EndDate = React.forwardRef<ReactDatePicker<string, boolean>, ControllerRenderProps<IFormValues>>(
  ({ onChange, name }, ref) => {
    const [startDate, setStartDate] = useState<any>(new Date());

    return (
      <DateContainer
        name={name}
        selected={new Date(startDate)}
        dateFormat="yy.MM.dd"
        onChange={(date) => onChange(date)}
        placeholderText="ex)24.01.07"
        isClearable={false}
        ref={ref}
        shouldCloseOnSelect // 날짜를 선택하면 자동으로 닫힌다
      />
    );
  },
);

const DateContainer = styled(DatePicker)`
  width: 328px;
  height: 24px;
  align-items: center;
  align-self: stretch;
  resize: none;
  flex: 1 0 0;
`;
