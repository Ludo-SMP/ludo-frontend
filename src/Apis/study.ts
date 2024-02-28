import { httpClient } from '@/Utils/axios';

export const applyStudy = (studyId: number, recruitmentId: number, data: object) =>
  httpClient.post(`/studies/${studyId}/${recruitmentId}/apply`, data);

interface Study {
  id: number;
  title: string;
  way: string;
  category: string;
  startDateTime: string;
  endDateTime: string;
  dDay: number;
}

interface Participant {
  id: number;
  name: string;
  email: string;
  role: 'Owner' | 'Member';
}

interface StudyDeatilResposne {
  study: Study;
  participants: Participant[];
  participantsCount: number;
  participantsLimit: number;
}

export const getStudyDetail = async (studyId: number) => {
  const response = await httpClient.get<StudyDeatilResposne>(`studies/${studyId}/`);
  return response.data;
};
