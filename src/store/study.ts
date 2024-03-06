import { ApplyStatus, StudyStatus } from '@/Types/study';
import { create } from 'zustand';

export interface SelectedMyStudyStatus {
  selectedMyStudyStatus: StudyStatus | ApplyStatus;
}

export interface SelectedMyStudyStatusAction {
  setSelectedMyStudyStatus: (newStatus: StudyStatus | ApplyStatus) => void;
}

export const useSelectedMyStudyStore = create<SelectedMyStudyStatus & SelectedMyStudyStatusAction>((set) => ({
  selectedMyStudyStatus: 'PROGRESS',
  setSelectedMyStudyStatus: (newStatus: StudyStatus | ApplyStatus) => set({ selectedMyStudyStatus: newStatus }),
}));
