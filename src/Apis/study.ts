import { apiRequester } from '@/Utils/axios';

export const applyStudy = (studyId: number, recruitmentId: number) =>
  apiRequester.post(`/studies/${studyId}/${recruitmentId}/apply`);
