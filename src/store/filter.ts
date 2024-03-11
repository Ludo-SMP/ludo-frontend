import { create } from 'zustand';
import { FilterOption } from '@/Types/study';

export interface FilterOptions {
  categoryIds: number[];
  stackIds: number[];
  positionIds: number[];
  progressMethodIds: number[];
  sortIds: number[];
}

const defaultFilterOptions: FilterOptions = {
  categoryIds: [1, 2, 3],
  stackIds: [44, 45, 93, 137, 115],
  positionIds: [1, 2, 3, 4],
  progressMethodIds: [1, 2],
  sortIds: [1],
};

export interface SetFilterOptionsAction {
  setFilterOptions: (filterOption: FilterOption, value: number[]) => void;
  resetFilterOptions: () => void;
}

export const useFilterOptionsStore = create<FilterOptions & SetFilterOptionsAction>((set) => ({
  categoryIds: [...defaultFilterOptions.categoryIds],
  stackIds: [...defaultFilterOptions.stackIds],
  positionIds: [...defaultFilterOptions.positionIds],
  progressMethodIds: [...defaultFilterOptions.progressMethodIds],
  sortIds: [...defaultFilterOptions.sortIds],
  setFilterOptions: (filterOption: FilterOption, value: number[]) => {
    switch (filterOption) {
      case 'CATEGORY':
        set({ categoryIds: [...value] });
        break;
      case 'STACK':
        set({ stackIds: [...value] });
        break;
      case 'POSITION':
        set({ positionIds: [...value] });
        break;
      case 'PROGRESS_METHOD':
        set({ progressMethodIds: [...value] });
        break;
      case 'SORT':
        set({ sortIds: [...value] });
        break;
      default:
        break;
    }
  },
  resetFilterOptions: () =>
    set({
      categoryIds: [...defaultFilterOptions.categoryIds],
      stackIds: [...defaultFilterOptions.stackIds],
      positionIds: [...defaultFilterOptions.positionIds],
      progressMethodIds: [...defaultFilterOptions.progressMethodIds],
      sortIds: [...defaultFilterOptions.sortIds],
    }),
}));
