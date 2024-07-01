// react-datepicker를 사용해서 진행기간 구현 328px, 24px, ex) 24.01.23 - 24.03.23
import DatePicker, { registerLocale } from 'react-datepicker';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { DateRange } from '@/Types/atoms';
import { ControllerRenderProps } from 'react-hook-form';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

export interface ProgressPeriodProps {
  /** input 요소가 가질 폼 필드 이름 속성 */
  name?: string;

  /** 초기값으로 설정될 기간 범위 */
  defaultValue?: [string, string];
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
>(({ name, defaultValue, onChange, onBlur }, ref) => {
  const now = new Date();
  const [defStartDate, defEndDate] = defaultValue;
  const [startDate, setStartDate] = useState(defStartDate && new Date(defStartDate));
  const [endDate, setEndDate] = useState(defEndDate && new Date(defEndDate));

  return (
    <DateContainer
      ref={ref}
      name={name}
      locale="ko"
      // 기본값은 초기값이 있는 경우 초기값으로 시작하는 것으로 가정
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
