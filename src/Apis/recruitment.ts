import { httpClient } from '@/Utils/axios';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import {
  convertPopularRecruitmentsToRecruitmentCardProps,
  convertRecruitmentDetailRawDataToRecruitmentDetail,
} from '@/Utils/propertyConverter';
import { RECRUITMENT } from '@/Constants/queryString';
import { FilterOptionsType } from '@/Types/study';
import { API_END_POINT } from '@/Constants/api';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const getPopularRecruitments = async () => httpClient.get(API_END_POINT.POPULAR_RECRUITMENTS);

export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: [...RECRUITMENT.POPULAR],
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
    queryKey: [...RECRUITMENT.RECRUITMENTS(filterOptions)],
    queryFn: ({ pageParam = 0 }) => getRecruitments({ pageParam, filterOptions, recruitmentsPerPage }),
    getNextPageParam: (result) => {
      if (!result.isLastPage) return result.pageNum;
      return null;
    },
  });

export const getRecruitmentDetail = (recruitmentId: number) => httpClient.get(API_END_POINT.RECRUITMENT(recruitmentId));

export const useRecruitmentDetail = (recruitmentId: number) => {
  return useQuery({
    queryKey: [...RECRUITMENT.RECRUITMENT(recruitmentId)],
    queryFn: () => getRecruitmentDetail(recruitmentId),
    select: (data) => convertRecruitmentDetailRawDataToRecruitmentDetail(data?.data.data),
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
      console.log('스터디원 모집 마감하기 성공');
      successHandler && successHandler();
    },
    onError: () => {
      console.log('스터디원 모집 마감하기 실패');
    },
  });
  return { mutate };
};
