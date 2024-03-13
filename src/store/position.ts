import { Position } from '@/Types/study';
import { create } from 'zustand';

export const POSITION = Object.freeze({
  백엔드: 1,
  프론트엔드: 2,
  디자이너: 3,
  데브옵스: 4,
});

export interface SelectedPositionState {
  selectedPosition: number | null;
}

export interface SetSelectedPositionsAction {
  setSelectedPosition: (selectedPosition: Position) => void;
  resetSelectedPosition: () => void;
}

export const useSelectedPositionStore = create<SelectedPositionState & SetSelectedPositionsAction>((set) => ({
  selectedPosition: null,
  setSelectedPosition: (selectedTarget: Position) => set({ selectedPosition: selectedTarget.id }),
  resetSelectedPosition: () => set({ selectedPosition: null }),
}));
