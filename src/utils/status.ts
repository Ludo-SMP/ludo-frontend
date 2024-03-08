import { RecruitStatus, StudyStatus } from '@/Types/study';
import { isCompleted, isNotStart } from './date';

export const getStudyState = (startDate: string, endDate: string, recruitStatus: RecruitStatus): StudyStatus => {
  if (isCompleted(endDate)) return 'COMPLETED';
  if (isNotStart(startDate)) return recruitStatus;
  return 'PROGRESS';
};
