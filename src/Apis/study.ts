import axios, { AxiosInstance } from 'axios';
import { useQuery } from '@tanstack/react-query';
const apiRequester: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const getPopularRecruitments = () => apiRequester.get('/').then((res) => res.data);
export const usePopularRecruitments = () => {
  return useQuery({
    queryKey: ['popularRecruitments'],
    queryFn: () => getPopularRecruitments(),
  });
};

export const getRecruitments = (filterOptionQueryString: string) =>
  apiRequester.get(`/recruitments?${filterOptionQueryString}`).then((res) => res.data);

export const useRecruitments = (filterOptions = []) => {
  const fitlerOptionsQueryString = Object.entries(filterOptions)
    .map((filterOption) => {
      const [categoryProperty, categoryItems] = filterOption;
      return `${categoryProperty}=${categoryItems.join(',')}`;
    })
    .join('&');

  return useQuery({
    queryKey: ['Recruitments', filterOptions],
    queryFn: () => getRecruitments(fitlerOptionsQueryString),
  });
};

export const getRecruitmentDetail = (studyId: number) =>
  apiRequester.get(`/recruitments/${studyId}`).then((res) => res.data);

export const useRecruitmentDetail = (studyId: number) => {
  return useQuery({
    queryKey: ['recruitmentDetail', studyId],
    queryFn: () => getRecruitmentDetail(studyId),
  });
};
