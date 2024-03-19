import { FilterOptionParams } from '@/Types/study';

export const getFilterOptions = ({
  last,
  stackId,
  positionId,
  progressMethod: way,
  categoryId,
}: Pick<FilterOptionParams, 'last' | 'categoryId' | 'stackId' | 'positionId' | 'progressMethod'>) => {
  const filterOptions = { last, stacks: stackId, way, category: categoryId, position: positionId };
  if (!stackId) delete filterOptions.stacks;
  if (!positionId) delete filterOptions.position;
  if (!way) delete filterOptions.way;
  if (!categoryId) delete filterOptions.category;
  if (!last) delete filterOptions.last;
  return filterOptions;
};
