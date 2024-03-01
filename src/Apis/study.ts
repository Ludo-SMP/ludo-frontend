import { httpClient } from '@/Utils/axios';
import { useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import {
  convertApplicantsRawDataToApplicants,
  convertStudyDetailRawDataToStudyDetail,
} from '@/Utils/propertyConverter';

// usemutation 처리
export const applyStudy = async (studyId: number, recruitmentId: number, data: object) => {
  const response = await httpClient.post(`/studies/${studyId}/${recruitmentId}/apply`, data);
  return response;
};

export const getStudyDetail = (studyId: number) => httpClient.get(`/studies/${studyId}`);

export const useStudyDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.study(studyId)],
    queryFn: () => getStudyDetail(studyId),
    select: (data) => convertStudyDetailRawDataToStudyDetail(data?.data.data),
  });
};

export const getApplicants = (studyId: number) => httpClient.get(`/studies/${studyId}/recruitments/users`);

export const useApplicants = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.applicants(studyId)],
    queryFn: () => getApplicants(studyId),
    select: (data) => convertApplicantsRawDataToApplicants(data?.data.data),
  });
};

export const getMyStudies = () => httpClient.get(`/users/mypage`);

export const useMyStudies = () => {
  return useQuery({
    queryKey: [...STUDY.myStudies()],
    queryFn: () => getMyStudies(),
    select: (data) => data?.data.data,
  });
};
