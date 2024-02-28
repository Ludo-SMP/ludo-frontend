import { httpClient } from '@/Utils/axios';
import { Participant, StudyDetail } from '@/Types/study';

export const applyStudy = (studyId: number, recruitmentId: number, data: object) =>
  httpClient.post(`/studies/${studyId}/${recruitmentId}/apply`, data);

interface StudyDeatilResposne {
  study: StudyDetail;
  participants: Participant[];
  participantsCount: number;
  participantsLimit: number;
}

export const getStudyDetail = async (studyId: number) => {
  const response = await httpClient.get<StudyDeatilResposne>(`studies/${studyId}/`);
  return response.data;
};
