import { Category } from '@/Types/study';
import { create } from 'zustand';

const defaultCategory: Category = { id: 2, name: '코딩 테스트' };

export interface SelectedCategoryState {
  selectedCategory: Category;
}

export interface SelectedCategoryAction {
  setSelectedCategory: (newSelectedCategory: Category) => void;
  resetSelectedCateogory: () => void;
}

export const useSelectedCategoryStore = create<SelectedCategoryState & SelectedCategoryAction>((set) => ({
  selectedCategory: { ...defaultCategory },
  setSelectedCategory: (newSelectedCategory: Category) => set({ selectedCategory: { ...newSelectedCategory } }),
  resetSelectedCateogory: () => set({ selectedCategory: { ...defaultCategory } }),
}));
