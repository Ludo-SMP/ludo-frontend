import { create } from 'zustand';

export interface User {
  id: number;
  nickname: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (userInfo) => set({ user: { ...userInfo } }),
  resetUser: () => set({ user: null }),
}));
