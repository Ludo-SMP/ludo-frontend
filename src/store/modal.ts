import { create } from 'zustand';

const initialModalState: boolean = false;

export interface ModalState {
  isModalOpen: boolean;
}

export interface ModalAction {
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState & ModalAction>((set) => ({
  isModalOpen: initialModalState,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
