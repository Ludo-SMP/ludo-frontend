import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { RECRUITMENT } from '@/Constants/queryString';
import { PopularRecruitments, Recruitments, FilterOptionParams, RecruitmentDetail } from '@/Types/study';
import { API_END_POINT } from '@/Constants/api';
import { useNavigate } from 'react-router-dom';
import { getFilterOptions } from '@/Utils/filter';

export const getPopularRecruitments = (count: number = 6): Promise<{ data: { data: PopularRecruitments } }> =>
  httpClient.get(API_END_POINT.POPULAR_RECRUITMENTS, { params: { count } });

export const usePopularRecruitments = (count?: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.POPULAR],
    queryFn: () => getPopularRecruitments(count),
    select: (data: { data: { data: PopularRecruitments } }) => data?.data?.data,
  });
};

export const getRecruitments = (
  filterOptions: Pick<FilterOptionParams, 'categoryId' | 'positionId' | 'progressMethod' | 'stackId'>,
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

export const useRecruitments = ({
  filterOptions,
  count,
}: {
  last?: number;
  count: number;
  filterOptions: Pick<FilterOptionParams, 'categoryId' | 'positionId' | 'progressMethod' | 'stackId'>;
}) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [...RECRUITMENT.RECRUITMENTS(filterOptions)],
    queryFn: ({ pageParam = undefined }) => getRecruitments(filterOptions, count, pageParam),
    getNextPageParam: (lastPage) => {
      const recruitments = lastPage?.data?.data?.recruitments;
      if (recruitments.length !== count) return undefined;
      return recruitments[recruitments.length - 1].id;
    },
  });
  return { data, hasNextPage, fetchNextPage };
};

export const getRecruitmentDetail = (recruitmentId: number): Promise<{ data: { data: RecruitmentDetail } }> =>
  httpClient.get(API_END_POINT.RECRUITMENT(recruitmentId));

export const useRecruitmentDetail = (recruitmentId: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.RECRUITMENT(recruitmentId)],
    queryFn: () => getRecruitmentDetail(recruitmentId),
    select: (data: { data: { data: RecruitmentDetail } }) => data?.data.data,
  });
};

export const closeRecruitment = (studyId: number) => httpClient.patch(API_END_POINT.CLOSE_RECRUITMENT(studyId));

export const useCloseRecruitmentMutation = (studyId: number, successHandler?: () => void) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [...RECRUITMENT.CLOSE_RECRUITMENT(studyId)],
    mutationFn: () => closeRecruitment(studyId),
    onSuccess: () => {
      navigate(`/studies/${studyId}`);
      // console.log('스터디원 모집 마감하기 성공');
      successHandler && successHandler();
    },
    onError: () => {
      // console.log('스터디원 모집 마감하기 실패');
    },
  });
  return { mutate };
};
