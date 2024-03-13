import { Card } from '@/Types/study';
import { create } from 'zustand';

export interface SelectedMyStudyStatus {
  selectedMyStudyStatus: 'PARTICIPATED' | 'APPLIED' | 'COMPLETED';
}

export interface SelectedMyStudyStatusAction {
  setSelectedMyStudyStatus: (newStatus: 'PARTICIPATED' | 'APPLIED' | 'COMPLETED') => void;
}

export const useSelectedMyStudyStore = create<SelectedMyStudyStatus & SelectedMyStudyStatusAction>((set) => ({
  selectedMyStudyStatus: 'PARTICIPATED',
  setSelectedMyStudyStatus: (newStatus: 'PARTICIPATED' | 'APPLIED' | 'COMPLETED') =>
    set({ selectedMyStudyStatus: newStatus }),
}));

export interface SelectedCard {
  selectedCard: Card;
}

export interface SetSelectedCardAction {
  setSelectedCard: (newSelectedCard: Card) => void;
}

export const useSelectedCardStore = create<SelectedCard & SetSelectedCardAction>((set) => ({
  selectedCard: 'STUDY',
  setSelectedCard: (newSelectedCard: Card) => set({ selectedCard: newSelectedCard }),
}));
