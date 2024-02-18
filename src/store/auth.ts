import { create } from 'zustand';

export interface LoginState {
  isLoggedIn: boolean;
}

export interface LoginAction {
  login: () => void;
  logout: () => void;
}

export const useLoginStore = create<LoginState & LoginAction>((set) => ({
  isLoggedIn: true,
  login: () => set(() => ({ isLoggedIn: true })),
  logout: () => set(() => ({ isLoggedIn: false })),
}));
