import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  convertPopularRecruitmentsToRecruitmentCardProps,
  convertRecruitmentDetailRawDataToRecruitmentDetail,
} from '@/Utils/propertyConverter';
import { RECRUITMENT } from '@/Constants/queryString';
import { FilterOptionsType } from '@/Types/study';
import { API_END_POINT } from '@/Constants/api';
import { AxiosError, AxiosResponse } from 'axios';

export const getPopularRecruitments = async () => httpClient.get(API_END_POINT.POPULAR_RECRUITMENTS);

export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: [...RECRUITMENT.popular],
    queryFn: () => getPopularRecruitments(),
    select: (data) => convertPopularRecruitmentsToRecruitmentCardProps(data?.data.data),
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

  const response = await httpClient.get(`${API_END_POINT.RECRUITMENTS}?${fitlerOptionsQueryString}`, {
    params: { pageParam, recruitmentsPerPage },
  });
  return response.data;
};

export const useRecruitments = ({ filterOptions, recruitmentsPerPage }) =>
  useInfiniteQuery<AxiosResponse, AxiosError>({
    queryKey: [...RECRUITMENT.recruitments(filterOptions)],
    queryFn: ({ pageParam = 0 }) => getRecruitments({ pageParam, filterOptions, recruitmentsPerPage }),
    getNextPageParam: (result) => {
      if (!result.isLastPage) return result.pageNum;
      return null;
    },
  });

export const getRecruitmentDetail = (recruitmentId: number) => httpClient.get(API_END_POINT.RECRUITMENT(recruitmentId));

export const useRecruitmentDetail = (recruitmentId: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.recruitment(recruitmentId)],
    queryFn: () => getRecruitmentDetail(recruitmentId),
    select: (data) => convertRecruitmentDetailRawDataToRecruitmentDetail(data?.data.data),
  });
};
