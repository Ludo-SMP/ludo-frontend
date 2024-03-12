import { create } from 'zustand';
import { ProgressMethod, Sort, FilterOption } from '@/Types/study';

export interface FilterOptions {
  categoryIds: number[];
  stackIds: number[];
  positionIds: number[];
  progressMethods: ProgressMethod[];
  sort: Sort[];
}

const defaultFilterOptions: FilterOptions = {
  categoryIds: [1, 2, 3],
  stackIds: [44, 45, 93, 137, 115],
  positionIds: [1, 2, 3, 4],
  progressMethods: ['OFFLINE', 'ONLINE'],
  sort: ['최신순'],
};

export interface SetFilterOptionsAction {
  setFilterOptions: (filterOption: FilterOption, value: number[] | ProgressMethod[] | Sort[]) => void;
  resetFilterOptions: () => void;
}

export const useFilterOptionsStore = create<FilterOptions & SetFilterOptionsAction>((set) => ({
  categoryIds: [...defaultFilterOptions.categoryIds],
  stackIds: [...defaultFilterOptions.stackIds],
  positionIds: [...defaultFilterOptions.positionIds],
  progressMethods: [...defaultFilterOptions.progressMethods],
  sort: [...defaultFilterOptions.sort],
  setFilterOptions: (filterOption: FilterOption, value: number[] | ProgressMethod[] | Sort[]) => {
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
        set({ progressMethods: [...value] });
        break;
      case 'SORT':
        set({ sort: [...value] });
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
      progressMethods: [...defaultFilterOptions.progressMethods],
      sort: [...defaultFilterOptions.sort],
    }),
}));
