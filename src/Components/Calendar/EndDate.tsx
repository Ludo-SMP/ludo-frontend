// react-datepicker를 사용해서 마감날짜 구현 328px, 44px, ex) 24.01.23
import React, { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

// date-picker
import DatePicker, { ReactDatePicker } from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISOString } from '@/utils/date';
import styled from 'styled-components';

registerLocale('ko', ko);

interface IFormValues {
  recruitmentEndDateTime: string;
}
export const EndDate = React.forwardRef<ReactDatePicker<string, boolean>, ControllerRenderProps<IFormValues>>(
  ({ onChange, name }, ref) => {
    const today = new Date(Date.now());
    const [startDate, setStartDate] = useState<any>(new Date(Date.now()));

    return (
      <DateContainer
        name={name}
        locale="ko"
        selected={new Date(startDate)}
        dateFormat="yy.MM.dd"
        minDate={today}
        onChange={(date) => {
          onChange(parseISOString(date));
          setStartDate(date);
        }}
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
