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

// 임시저장된 글 카드
export const useSelectedCardStore = create<SelectedCard & SetSelectedCardAction>((set) => ({
  selectedCard: 'STUDY',
  setSelectedCard: (newSelectedCard: Card) => set({ selectedCard: newSelectedCard }),
}));

export interface SavedKeyState {
  savedKey: string;
  setSavedKey: (newKey: string) => void;
}

// 선택된 카드 키
export const useSavedKeyStore = create<SavedKeyState>((set) => ({
  savedKey: '',
  setSavedKey: (newKey: string) => set(() => ({ savedKey: newKey })),
}));
