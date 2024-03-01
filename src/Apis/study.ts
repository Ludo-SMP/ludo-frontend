import { apiRequester } from '@/utils/axios';
// import { Creates } from '@/Types/studies';

export const createStudy = () => apiRequester.post(`/studies`);

export const ModifyStudy = (studyId: number) => apiRequester.put(`/studies/${studyId}/recruitments`);

export const stack = () => apiRequester.get(`/api/stacks`).then((res) => res);
import { POST } from '@/Utils/axios';
import { PositionType } from '@/Types/study';
export const applyStudy = (studyId: number, recruitmentId: number, position: PositionType | null) => {
  POST(`/studies/${studyId}/recruitments/${recruitmentId}/apply`, { position });
};
