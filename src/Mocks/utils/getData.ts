import { FilterOptionsType, StudyCategory } from '@/Types/study';
import { recruitmentsMockData } from '../data/mockRecruitments';

export const getFilteredRecruitmentsMockData = (filteredOptions: FilterOptionsType) => {
  const { category, way, positions, stacks } = filteredOptions;

  const filteredRecruitmentsMockData = recruitmentsMockData.filter((data) => {
    const {
      category: recruitmentCategory,
      way: recruitmentWay,
      positions: recruitmentPositions,
      stacks: recruitmentStacks,
    } = data;
    return (
      category.some((studyCategory: StudyCategory) => recruitmentCategory.includes(studyCategory)) &&
      way.some((progressMethod) => recruitmentWay.includes(progressMethod)) &&
      positions.some((position) => recruitmentPositions.includes(position)) &&
      stacks.some((stack) => recruitmentStacks.includes(stack))
    );
  });

  return filteredRecruitmentsMockData;
};
