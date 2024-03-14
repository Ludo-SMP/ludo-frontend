// import { Position, Recruitment, Stack } from '@/Types/study';
// import { recruitmentsMockData } from '../data/mockRecruitments';

// interface FilterOptionParams {
//   categoryId: number;
//   way: string;
//   positionId: number;
//   stackId: number;
// }

// export const getFilteredRecruitmentsMockData = ({ categoryId, way, positionId, stackId }: FilterOptionParams) => {
//   const filteredRecruitmentsMockData: Recruitment[] = recruitmentsMockData.filter((data: Recruitment) => {
//     const { category, positions, stacks, way: _way } = data;
//     return (
//       (!categoryId || category.id === categoryId) &&
//       (!way || _way === way) &&
//       (!positionId || positions.some((position: Position) => position.id === positionId)) &&
//       (!stackId || stacks.some((stack: Stack) => stack.id === stackId))
//     );
//   });

//   return filteredRecruitmentsMockData;
// };
