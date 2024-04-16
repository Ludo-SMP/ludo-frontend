import { create } from 'zustand';
import { FilterOption } from '@/Types/study';

export interface FilterOptions {
  categoryId: number;
  stackIds: number[];
  positionId: number;
  progressMethodId: number;
  sortId: number;
}

const defaultFilterOptions: FilterOptions = {
  categoryId: 0,
  stackIds: [],
  positionId: 0,
  progressMethodId: 0,
  sortId: 0,
};

export interface SetFilterOptionsAction {
  setFilterOptions: (filterOption: FilterOption, value: number) => void;
  setStackFilterOption: (value: number[]) => void;
  resetFilterOptions: () => void;
}

export const useFilterOptionsStore = create<FilterOptions & SetFilterOptionsAction>((set) => ({
  categoryId: defaultFilterOptions.categoryId,
  stackIds: defaultFilterOptions.stackIds,
  positionId: defaultFilterOptions.positionId,
  progressMethodId: defaultFilterOptions.progressMethodId,
  sortId: defaultFilterOptions.sortId,
  setFilterOptions: (filterOption: FilterOption, value: number) => {
    switch (filterOption) {
      case 'CATEGORY':
        set({ categoryId: value });
        break;
      case 'POSITION':
        set({ positionId: value });
        break;
      case 'PROGRESS_METHOD':
        set({ progressMethodId: value });
        break;
      case 'SORT':
        set({ sortId: value });
        break;
      default:
        break;
    }
  },

  setStackFilterOption: (value: number[]) => {
    set({ stackIds: [...value] });
  },
  resetFilterOptions: () =>
    set({
      categoryId: defaultFilterOptions.categoryId,
      stackIds: defaultFilterOptions.stackIds,
      positionId: defaultFilterOptions.positionId,
      progressMethodId: defaultFilterOptions.progressMethodId,
      sortId: defaultFilterOptions.sortId,
    }),
}));
