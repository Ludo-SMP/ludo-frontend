import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const getPopularRecruitments = () => httpClient.get('/').then((res) => res.data);

export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: ['popularRecruitments'],
    queryFn: () => getPopularRecruitments(),
  });
};

export const getRecruitments = ({ pageParam, filterOptions, recruitmentsPerPage }) => {
  const fitlerOptionsQueryString = Object.entries(filterOptions)
    .map((filterOption) => {
      const [categoryProperty, categoryItems] = filterOption;
      return `${categoryProperty}=${categoryItems.join(',')}`;
    })
    .join('&');
  return httpClient
    .get(`/recruitments?${fitlerOptionsQueryString}`, { params: { pageParam, recruitmentsPerPage } })
    .then((res) => res.data);
};

export const useRecruitments = (filterOptions, recruitmentsPerPage) =>
  useInfiniteQuery({
    queryKey: ['Recruitments', filterOptions],
    queryFn: ({ pageParam = 0 }) => getRecruitments({ pageParam, filterOptions, recruitmentsPerPage }),
    getNextPageParam: (result) => {
      if (!result.isLastPage) return result.pageNum;
      return null;
    },
  });
export const getRecruitmentDetail = (studyId: number) =>
  httpClient.get(`/recruitments/${studyId}`).then((res) => res.data);

export const useRecruitmentDetail = (studyId: number) => {
  return useQuery({
    queryKey: ['recruitmentDetail', studyId],
    queryFn: () => getRecruitmentDetail(studyId),
  });
};
