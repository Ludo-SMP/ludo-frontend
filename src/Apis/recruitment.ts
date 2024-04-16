import { httpClient } from '@/utils/axios';
import { PopularRecruitments, Recruitments, FilterOptionParams, RecruitmentDetail } from '@/Types/study';
import { API_END_POINT } from '@/Constants/api';
import { getFilterOptions } from '@/utils/filter';

export const getPopularRecruitments = (count: number = 6): Promise<{ data: { data: PopularRecruitments } }> =>
  httpClient.get(API_END_POINT.POPULAR_RECRUITMENTS, { params: { count } });

export const getRecruitments = (
  filterOptions: Pick<FilterOptionParams, 'categoryId' | 'positionId' | 'progressMethod' | 'stackIds'>,
  count?: number,
  last?: number,
): Promise<{ data: { data: Recruitments } }> => {
  const filterOptionsParams = getFilterOptions({ ...filterOptions, last });

  return httpClient.get(API_END_POINT.RECRUITMENTS, {
    params: {
      count,
      ...filterOptionsParams,
    },
  });
};

export const getRecruitmentDetail = (recruitmentId: number): Promise<{ data: { data: RecruitmentDetail } }> =>
  httpClient.get(API_END_POINT.RECRUITMENT(recruitmentId));

export const closeRecruitment = (studyId: number) =>
  httpClient.patch(API_END_POINT.CLOSE_RECRUITMENT(studyId), null, { params: { status: 'RECRUITED' } });
