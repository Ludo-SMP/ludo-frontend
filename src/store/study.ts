import { create } from 'zustand';

export interface Study {
  id: number;
  title: string;
  status: string;
}

export interface StudyParticipated extends Study {
  startDateTime: string;
  endDateTime: string;
}

export interface myStudyListState {
  studiesParticipated: StudyParticipated[];
  studiesApplied: Study[];
  studiesCreated: Study[];
}

export interface myStudyState {
  myStudyList: myStudyListState;
  updateMyStudySTate: () => void;
  initializeState: () => void;
}

export const useStudyStore = create<myStudyState>((set) => ({
  myStudyList: { studiesParticipated: [], studiesApplied: [], studiesCreated: [] },
  updateMyStudySTate: () => set(() => ({})),
  initializeState: () => set(() => ({})),
}));
