import { cateegoryProperties } from '@/Shared/category';

export const getfilterOptions = (searchParams) => {
  const filterOptions = {};
  cateegoryProperties.forEach((categoryProperty) => {
    const filterValues = searchParams.get(categoryProperty).split(',');
    filterOptions[categoryProperty] = [...filterValues];
  });
  return filterOptions;
};
