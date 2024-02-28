import { create } from 'zustand';

const initialLoginState: boolean = true;

export interface LoginState {
  isLoggedIn: boolean;
}

export interface LoginAction {
  setIsLoggedIn: () => void;
  setIsLoggedOut: () => void;
}

export const useLoginStore = create<LoginState & LoginAction>((set) => ({
  isLoggedIn: initialLoginState,
  setIsLoggedIn: () => set({ isLoggedIn: true }),
  setIsLoggedOut: () => set({ isLoggedIn: false }),
}));
