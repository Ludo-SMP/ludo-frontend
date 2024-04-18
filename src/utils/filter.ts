import { FilterOptionParams } from '@/Types/study';

export const getFilterOptions = ({
  last,
  stackIds,
  positionId,
  progressMethod: way,
  categoryId,
}: Pick<FilterOptionParams, 'last' | 'categoryId' | 'stackIds' | 'positionId' | 'progressMethod'>) => {
  const filterOptions = { last, stacks: stackIds.join(','), way, category: categoryId, position: positionId };
  if (stackIds.length === 0) delete filterOptions.stacks;
  if (!positionId) delete filterOptions.position;
  if (!way) delete filterOptions.way;
  if (!categoryId) delete filterOptions.category;
  if (!last) delete filterOptions.last;
  return filterOptions;
};
