import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { convertPopularRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';
import { RECRUITMENT } from '@/Constants/queryString';
import { FilterOptionsType } from '@/Types/study';

export const getPopularRecruitments = () =>
  httpClient.get('/').then((res) => convertPopularRecruitmentsToStudyCardProps(res.data.data));

export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: [...RECRUITMENT.popular],
    queryFn: () => getPopularRecruitments(),
  });
};

interface GetRecruitmentsParams {
  pageParam: number;
  filterOptions: FilterOptionsType;
  recruitmentsPerPage: number;
}

export const getRecruitments = ({ pageParam, filterOptions, recruitmentsPerPage }: GetRecruitmentsParams) => {
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

export const useRecruitments = ({ filterOptions, recruitmentsPerPage }) =>
  useInfiniteQuery({
    queryKey: [...RECRUITMENT.recruitments(filterOptions)],
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
