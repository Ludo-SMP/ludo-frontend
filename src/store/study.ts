import { StudyApplyStatus, StudyProgressStatus } from '@/Types/study';
import { create } from 'zustand';

export interface SelectedMyStudyStatus {
  selectedMyStudyStatus: StudyProgressStatus | StudyApplyStatus;
}

export interface SelectedMyStudyStatusAction {
  setSelectedMyStudyStatus: (newStatus: StudyProgressStatus | StudyApplyStatus) => void;
}

export const useSelectedMyStudyStore = create<SelectedMyStudyStatus & SelectedMyStudyStatusAction>((set) => ({
  selectedMyStudyStatus: '진행 중',
  setSelectedMyStudyStatus: (newStatus: StudyProgressStatus | StudyApplyStatus) =>
    set({ selectedMyStudyStatus: newStatus }),
}));
