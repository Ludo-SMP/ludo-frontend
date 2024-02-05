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

export const getRecruitments = () => apiRequester.get('/recruitments').then((res) => res.data);
export const useRecruitments = () => {
  return useQuery({
    queryKey: ['Recruitments'],
    queryFn: () => getRecruitments(),
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
