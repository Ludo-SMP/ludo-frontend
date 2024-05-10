import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createStudy } from '@/Apis/study';
import { BASE_KEY } from '@/Constants/queryString';
import { StudyDetail } from '@/Types/study';

export const useCreateStudyMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [...BASE_KEY.STUDY],
    mutationFn: createStudy,
    onSuccess(data) {
      // 스터디가 생성되면 서버에서 전달한 스터디 ID를 사용해 스터디 상세 페이지로 이동
      navigate(`/studies/${(data.data.data as StudyDetail).study.id}`);
    },
  });
};
