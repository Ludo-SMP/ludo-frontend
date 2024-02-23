import { create } from 'zustand';

export interface LoginState {
  isLoggedIn: boolean;
}

export interface LoginAction {
  setIsLoggedIn: () => void;
  setIsLoggedOut: () => void;
}

export const useLoginStore = create<LoginState & LoginAction>((set) => ({
  isLoggedIn: true,
  setIsLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setIsLoggedOut: () => set(() => ({ isLoggedIn: false })),
}));
