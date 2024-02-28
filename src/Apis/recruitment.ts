import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { convertPopularRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';
import { RECRUITMENT } from '@/Constants/queryString';
import { FilterOptionsType } from '@/Types/study';

export const getPopularRecruitments = async () => {
  const response = await httpClient.get('/');
  return convertPopularRecruitmentsToStudyCardProps(response.data.data);
};

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

export const getRecruitmentDetail = async (studyId: number) => {
  const response = await httpClient.get(`/recruitments/${studyId}`);
  return response.data;
};

export const useRecruitmentDetail = (studyId: number) => {
  return useQuery({
    queryKey: ['recruitmentDetail', studyId],
    queryFn: () => getRecruitmentDetail(studyId),
  });
};
