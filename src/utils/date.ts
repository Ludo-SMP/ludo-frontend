import { NEW_ATTENDANCE_DAY, OriginalShared } from '@/Shared/study';
import { AttendanceDay } from '@/Types/atoms';
import { getDay } from 'date-fns';

export const dateFormatter = (date: string) => {
  const [year, month, day] = date.split('-');
  return year.slice(2) + '.' + month + '.' + day.slice(0, 2);
};

export const getDday = (endDate: string) => {
  const diff = new Date(endDate).getTime() - new Date().getTime();
  const dDay = Math.floor(diff / (60 * 60 * 24 * 1000));
  return dDay >= 0 ? dDay : 0;
};

export const getPeriod = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return '';
  const start = dateFormatter(startDate);
  const end = dateFormatter(endDate);
  return start + '~' + end;
};

const TIME_FACTORS = {
  MINUTE: 60,
  HOUR: 60 * 60,
  DAY: 60 * 60 * 24,
};

export const getElapsedTime = (createdAt: string): string => {
  const diff = new Date().getTime() - new Date(createdAt).getTime();
  const diffSec = diff / 1000;

  // 1분 이내
  if (diffSec < TIME_FACTORS.MINUTE) return `${Math.floor(diffSec)}초 전`;
  // 1시간 이내
  if (diffSec < TIME_FACTORS.HOUR) return `${Math.floor(diffSec / TIME_FACTORS.MINUTE)}분 전`;
  // 1일 이내
  if (diffSec < TIME_FACTORS.DAY) return `${Math.floor(diffSec / TIME_FACTORS.HOUR)}시간 전`;

  return `${Math.floor(diffSec / TIME_FACTORS.DAY)}일 전`;
};

export const isEdited = (createdDate: string, updatedDate: string) => {
  const updatedDateTime = new Date(updatedDate).getTime();
  const createdDateTime = new Date(createdDate).getTime();

  return updatedDateTime - createdDateTime > 0;
};

/**
 * @description Date | [Date Date] => locale ko 기준 ISOString으로 변환한다.
 */
export const parseISOString = (date: Date | [Date, Date]) => {
  let pick;
  if (date instanceof Date) pick = date;
  // 시작과 끝 날짜가 있는 경우, 끝 날짜를 선택한다.
  else pick = date[1];

  // 한국의 offset을 추가한다.
  const offset = pick.getTimezoneOffset() * 60000;
  const dateOffset = new Date(pick.getTime() - offset);
  return dateOffset.toISOString();
};

export const getTimeInt = (uuidStr: string) => {
  const uuidArr = uuidStr.split('-');
  const offset = 2;
  const timeArr = [uuidArr[2 + offset].substring(1), uuidArr[1 + offset], uuidArr[0 + offset]].join('');
  return parseInt(timeArr, 16);
};

export const getMillisec = (uuidStr: string) => {
  const intTime = getTimeInt(uuidStr) - 122192928000000000;
  const intMillisec = Math.floor(intTime / 10000);
  return intMillisec;
};

/**
 * @description 출석일에 해당하는 숫자를 요일로 변환한다.
 */
export const getDayById = (ids: AttendanceDay[]) => ids.map((id) => NEW_ATTENDANCE_DAY[id].slice(0, 1)).join(', ');

/**
 * @description 출석일 id 배열을 shared object 형태로 가공한다.
 * ex. [1, 2, 3] -> { 1: 월요일, 2: 화요일, 3: 수요일 }
 */
export const getSharedDayObjectById = (ids: AttendanceDay[]): OriginalShared => {
  return ids.reduce((acc, id) => {
    return {
      ...acc,
      [id]: NEW_ATTENDANCE_DAY[id],
    };
  }, {});
};

/**
 * 오늘이 출석일인지 확인한다.
 */
export const isTodayAttendanceDay = (attendanceDay: Array<AttendanceDay>) =>
  attendanceDay.includes(getDay(new Date()) || 7);
