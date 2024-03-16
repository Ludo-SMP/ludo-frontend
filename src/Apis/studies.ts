import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';

export const ID_KEY = ['StudyId'];
export const getId = (
  studyId: number,
): Promise<{
  data: {
    data: any;
  };
}> => axios.get(`https://ludoapi.store/api/api/studies/${studyId}/recruitments`);

export const useStudyId = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.STUDY(studyId)],
    queryFn: () => getId(studyId),
    select: (data: { data: any }) => data.data.data,
  });
};
