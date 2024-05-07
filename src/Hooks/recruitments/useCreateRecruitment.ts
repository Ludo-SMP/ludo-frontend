import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createRecruitment } from '@/Apis/recruitment';
import { RECRUITMENT } from '@/Constants/queryString';
import { RecruitmentForm } from '@/Types/study';

// TODO: 타입, 자식에서 확장하는 구조로 수정하기 > 보낼 때는 number[]로 보냄.

export interface RecruitmentFormRequest extends Omit<RecruitmentForm, 'stackIds'> {}
export const useCreateRecruitmentMutation = (studyId: number, successHandler?: () => void) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [...RECRUITMENT.CREATE_RECRUITMENT(studyId)],
    mutationFn: (body: any) => createRecruitment(studyId, body),
    onSuccess: () => {
      navigate(`/studies/${studyId}`);
      successHandler && successHandler();
    },
    onError: () => {},
  });
  return { mutate };
};
