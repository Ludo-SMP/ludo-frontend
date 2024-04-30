// react-datepicker를 사용해서 진행기간 구현 328px, 24px, ex) 24.01.23 - 24.03.23
import DatePicker from 'react-datepicker';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { DateRange } from '@/Types/atoms';
import { ControllerRenderProps } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

export interface ProgressPeriodProps {
  /** input 요소가 가질 폼 필드 이름 속성 */
  name?: string;
}

interface IProgressPeriodForm {
  progressPeriod: DateRange;
}

/**
 * 특정한 범위의 기간을 입력받는 데 사용되는 컴포넌트입니다.
 *
 * 사용처는 다음과 같습니다:
 * - 스터디 기간 설정
 * - 기간으로 스터디 조회 등
 */
export const ProgressPeriod = forwardRef<
  DatePicker,
  ProgressPeriodProps & Partial<ControllerRenderProps<IProgressPeriodForm, 'progressPeriod'>>
>(({ name, onChange, onBlur }, ref) => {
  const now = new Date();

  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(null);

  return (
    <DateContainer
      ref={ref}
      name={name}
      locale="ko"
      // 기본값은 오늘부터 시작하는 것으로 가정
      selected={startDate}
      onBlur={onBlur}
      onChange={([start, end]: [Date, Date]) => {
        setStartDate(start);
        setEndDate(end);
        onChange([start, end]);
      }}
      // 시작일은 오늘 이후로 선택할 수 없다
      minDate={now}
      startDate={startDate}
      endDate={endDate}
      placeholderText="ex) 24.01.23 - 24.03.23"
      // 범위 선택
      selectsRange
      shouldCloseOnSelect
      showDisabledMonthNavigation
      // 한국인에게 익숙한 날짜 순서
      dateFormat="yy.MM.dd"
    />
  );
});

// TODO: ./EndDate.tsx 랑 똑같은 Styled Component인데 한쪽으로 빼서 공용 컴포넌트로 사용하기
const DateContainer = styled(DatePicker)`
  width: 328px;
  height: 24px;
  align-items: center;
  align-self: stretch;
  resize: none;
  flex: 1 0 0;

  &::placeholder {
    color: ${(props) => props.theme.color.black2};
  }
`;
