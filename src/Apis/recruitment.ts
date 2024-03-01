import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  convertPopularRecruitmentsToStudyCardProps,
  convertRecruitmentDetailRawDataToRecruitmentDetail,
} from '@/Utils/propertyConverter';
import { RECRUITMENT } from '@/Constants/queryString';
import { FilterOptionsType } from '@/Types/study';

export const getPopularRecruitments = async () => httpClient.get('/');

export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: [...RECRUITMENT.popular],
    queryFn: () => getPopularRecruitments(),
    select: (data) => convertPopularRecruitmentsToStudyCardProps(data?.data.data),
  });
};

interface GetRecruitmentsParams {
  pageParam: number;
  filterOptions: FilterOptionsType;
  recruitmentsPerPage: number;
}

export const getRecruitments = async ({ pageParam, filterOptions, recruitmentsPerPage }: GetRecruitmentsParams) => {
  const fitlerOptionsQueryString = Object.entries(filterOptions)
    .map((filterOption) => {
      const [categoryProperty, categoryItems] = filterOption;
      return `${categoryProperty}=${categoryItems.join(',')}`;
    })
    .join('&');

  const response = await httpClient.get(`/recruitments?${fitlerOptionsQueryString}`, {
    params: { pageParam, recruitmentsPerPage },
  });
  return response.data;
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

export const getRecruitmentDetail = (recruitmentId: number) => httpClient.get(`/recruitments/${recruitmentId}`);

export const useRecruitmentDetail = (recruitmentId: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.recruitment(recruitmentId)],
    queryFn: () => getRecruitmentDetail(recruitmentId),
    select: (data) => convertRecruitmentDetailRawDataToRecruitmentDetail(data?.data.data),
  });
};
