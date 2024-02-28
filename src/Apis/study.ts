import { httpClient } from '@/Utils/axios';

export const applyStudy = (studyId: number, recruitmentId: number, data: object) =>
  httpClient.post(`/studies/${studyId}/${recruitmentId}/apply`, data);

export const getStudyDetail = (studyId: number) => httpClient.get(`studies/${studyId}/`);
