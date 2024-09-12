import { httpClient } from '@/utils/axios';
import {
  PopularRecruitments,
  Recruitments,
  FilterOptionParams,
  RecruitmentDetail,
  RecruitmentForm,
} from '@/Types/study';
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

// 모집공고 생성
export const createRecruitment = (
  studyId: number,
  body: RecruitmentForm,
): Promise<{ data: { data: RecruitmentDetail } }> => httpClient.post(API_END_POINT.CREATE_RECRUITMENT(studyId), body);

export const editRecruitment = (
  studyId: number,
  recruitmentId: number,
  body: RecruitmentForm,
): Promise<{ data: { data: RecruitmentDetail } }> =>
  httpClient.put(API_END_POINT.EDIT_RECRUITMENT(studyId, recruitmentId), body);

// 모집공고 조회
export const getRecruitmentDetail = (recruitmentId: number): Promise<{ data: { data: RecruitmentDetail } }> =>
  httpClient.get(API_END_POINT.RECRUITMENT(recruitmentId));

// 모집공고 삭제
export const deleteRecruitment = (studyId: number): Promise<{ data: { data: RecruitmentDetail } }> =>
  httpClient.get(API_END_POINT.DELETE_RECRUITMENT(studyId));

// 모집공고 마감
export const closeRecruitment = (studyId: number) =>
  httpClient.patch(API_END_POINT.CLOSE_RECRUITMENT(studyId), null, { params: { status: 'RECRUITED' } });
