import { FilterOptionParams } from '@/Types/study';

export const getFilterOptions = ({
  last,
  stackId,
  positionId,
  progressMethod: way,
  categoryId,
}: Pick<FilterOptionParams, 'last' | 'categoryId' | 'stackId' | 'positionId' | 'progressMethod'>) => {
  const filterOptions = { last, stackId, way, categoryId, positionId };
  if (!stackId) delete filterOptions.stackId;
  if (!positionId) delete filterOptions.positionId;
  if (!way) delete filterOptions.way;
  if (!categoryId) delete filterOptions.categoryId;
  if (!last) delete filterOptions.last;
  return filterOptions;
};
