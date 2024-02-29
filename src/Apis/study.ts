import { httpClient } from '@/Utils/axios';
import { useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { convertStudyDetailRawDataToStydtDetail } from '@/Utils/propertyConverter';

// usemutation 처리
export const applyStudy = async (studyId: number, recruitmentId: number, data: object) => {
  const response = await httpClient.post(`/studies/${studyId}/${recruitmentId}/apply`, data);
  return response;
};

export const getStudyDetail = async (studyId: number) => {
  const response = await httpClient.get(`/studies/${studyId}`);
  return convertStudyDetailRawDataToStydtDetail(response.data.data);
};

export const useStudyDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.study(studyId)],
    queryFn: () => getStudyDetail(studyId),
  });
};
