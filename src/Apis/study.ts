import { apiRequester } from '@/utils/axios';
// import { Creates } from '@/Types/studies';

export const applyStudy = (studyId: number, recruitmentId: number) =>
  apiRequester.post(`/studies/${studyId}/${recruitmentId}/apply`);

export const createStudy = () => apiRequester.post(`/studies`);

export const ModifyStudy = (studyId: number) => apiRequester.put(`/studies/${studyId}/recruitments`);

export const stack = () => apiRequester.get(`/api/stacks`).then((res) => res);
