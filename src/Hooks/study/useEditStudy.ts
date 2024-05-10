import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { editStudy } from '@/Apis/study';
import { STUDY } from '@/Constants/queryString';
import { StudyCreate } from '@/Types/study';

export const useEditStudyMutation = (studyId: number) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [...STUDY.EDIT(studyId)],
    mutationFn: (body: StudyCreate) => editStudy(studyId, body),
    onSuccess() {
      navigate(`/studies/${studyId}`);
    },
  });
};
