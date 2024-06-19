import { useState } from 'react';

export interface AttendanceType {
  id: number;
  name: string;
}

/** 출석일 모달 관련 훅 */
const useAttendanceModal = () => {
  const [attendanceDay, setAttendanceDay] = useState<AttendanceType[] | null>(null);
  const [content, setContent] = useState('ex) 화요일, 목요일');

  const toggleAttendanceDay = (checked: AttendanceType) => {
    const dayIdx = (attendanceDay ?? []).findIndex((day) => day.id === checked.id);
    const newAttendanceDay =
      dayIdx !== -1
        ? (attendanceDay ?? []).filter((day) => day.id !== checked.id)
        : [...(attendanceDay ?? []), checked];
    setAttendanceDay(newAttendanceDay);
    setContent(newAttendanceDay.map((day) => day.name).join(', '));
  };

  const isValidAttendanceDay = (): boolean => {
    if (!attendanceDay || attendanceDay?.length === 0) {
      setAttendanceDay([]);
      return false;
    }
    return true;
  };

  return { attendanceDay, content, setContent, toggleAttendanceDay, isValidAttendanceDay };
};

export { useAttendanceModal };
