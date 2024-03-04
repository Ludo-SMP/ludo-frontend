import { create } from 'zustand';
import { stackId, Position } from '@/Types/studies';

export interface stackCategoryState {
  Ids: stackId | number;
}

export interface PositionState {
  setPosition: (Ids: Position) => void;
  resetPosition: () => void;
}
//   export const StackStore = create<PositionState>((set) => ({}));
