import { CustomObject } from '@/utils/selectUtil';
import { useState } from 'react';
import { getSharedDayObjectById } from '@/utils/date';
import { generateDropdownOption } from '@/Shared/study';
import { AttendanceDay } from '@/Types/atoms';

export type AttendanceType = CustomObject<'id', 'name'>;

/** 출석일 모달 관련 훅 */
const useAttendanceModal = () => {
  const [tmpAttendanceDay, setTmpAttendanceDay] = useState<AttendanceType[] | null>(null);
  const [savedAttendanceDay, setSavedAttendanceDay] = useState<AttendanceType[] | null>(null);
  const [content, setContent] = useState('ex) 화요일, 목요일');

  const toggleAttendanceDay = (checked: AttendanceType) => {
    const dayIdx = (tmpAttendanceDay ?? []).findIndex((day) => day.id === checked.id);
    const newAttendanceDay =
      dayIdx !== -1
        ? (tmpAttendanceDay ?? []).filter((day) => day.id !== checked.id)
        : [...(tmpAttendanceDay ?? []), checked];
    setTmpAttendanceDay(newAttendanceDay);
  };

  /** RHF 제출 시 값 선택했는지 확인 */
  const isValidAttendanceDay = (): boolean => {
    if (!savedAttendanceDay || savedAttendanceDay?.length === 0) {
      setSavedAttendanceDay([]);
      setTmpAttendanceDay([]);
      return false;
    }
    return true;
  };

  /** 저장 누를 경우 선택된 값 반영 */
  const saveAttendanceDay = () => {
    setSavedAttendanceDay(tmpAttendanceDay);
    setContent(tmpAttendanceDay.map((day) => day.name).join(', '));
  };

  /** 선택 취소 누를 경우 이전 값으로 복귀 */
  const resetAttendanceDay = () => {
    setTmpAttendanceDay(savedAttendanceDay);
  };

  /** API 응답값의 출석일이 있는 경우 값을 세팅 */
  const initAttendanceModal = (defAttendanceDay: AttendanceDay[]) => {
    if (defAttendanceDay?.length > 0) {
      const defAttendanceDayObject = generateDropdownOption(getSharedDayObjectById(defAttendanceDay));
      setTmpAttendanceDay(defAttendanceDayObject);
      setSavedAttendanceDay(defAttendanceDayObject);
      setContent(defAttendanceDayObject.map((day) => day.name).join(', '));
    }
  };

  return {
    saveAttendanceDay,
    savedAttendanceDay,
    tmpAttendanceDay,
    content,
    setContent,
    toggleAttendanceDay,
    isValidAttendanceDay,
    setTmpAttendanceDay,
    resetAttendanceDay,
    setSavedAttendanceDay,
    initAttendanceModal,
  };
};

export { useAttendanceModal };
