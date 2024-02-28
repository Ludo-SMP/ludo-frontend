import { PositionType } from '@/Types/study';
import { create } from 'zustand';

export interface SelectedPositionState {
  selectedPosition: PositionType | null;
}

export interface SetSelectedPositionsAction {
  setSelectedPosition: (selectedPosition: PositionType) => void;
  resetSelectedPosition: () => void;
}

export const useSelectedPositionStore = create<SelectedPositionState & SetSelectedPositionsAction>((set) => ({
  selectedPosition: null,
  setSelectedPosition: (selectedTarget: PositionType) => set({ selectedPosition: selectedTarget }),
  resetSelectedPosition: () => set({ selectedPosition: null }),
}));
