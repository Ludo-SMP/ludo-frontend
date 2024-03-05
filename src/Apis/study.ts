import { httpClient } from '@/Utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { convertStudyDetailRawDataToStudyDetail } from '@/Utils/propertyConverter';
import { API_END_POINT } from '@/Constants/api';
import { SetStateAction } from 'react';
import { useModalStore } from '@/Store/modal';
import { ApplyState } from '@/Types/study';

export const applyStudy = async (studyId: number, recruitmentId: number, data: object) =>
  httpClient.post(API_END_POINT.APPLY(studyId, recruitmentId), { ...data });

export const useApplyStudyMutation = (
  studyId: number,
  recruitmentId: number,
  data: object,
  handleApplyApprove: React.Dispatch<SetStateAction<ApplyState>>,
) => {
  const { openModal } = useModalStore();
  const { mutate } = useMutation({
    mutationKey: ['apply'],
    mutationFn: () => applyStudy(studyId, recruitmentId, data),
    onSuccess: () => {
      console.log('success');
      handleApplyApprove(() => 'APPROVE');
      openModal();
    },
    onError: () => {
      handleApplyApprove(() => 'FAIL');
      openModal();
    },
  });
  return { mutate };
};

export const getStudyDetail = (studyId: number) => httpClient.get(API_END_POINT.STUDY(studyId));

export const useStudyDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.study(studyId)],
    queryFn: () => getStudyDetail(studyId),
    select: (data) => convertStudyDetailRawDataToStudyDetail(data?.data.data),
  });
};

export const getMyStudies = () => httpClient.get(API_END_POINT.MYPAGE);

export const useMyStudies = () => {
  return useQuery({
    queryKey: [...STUDY.myStudies()],
    queryFn: () => getMyStudies(),
    select: (data) => data?.data.data,
  });
};

export const refuseApply = (studyId: number, recruitmentId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_REFUSE(studyId, recruitmentId, applicantId));

export const useRefuseApplyMutation = (studyId: number, recruitmentId: number, applicantId: number) => {
  const { mutate } = useMutation({
    mutationKey: [...STUDY.REFUSE(studyId, recruitmentId, applicantId)],
    mutationFn: () => refuseApply(studyId, recruitmentId, applicantId),
    onSuccess: () => {
      console.log('지원 거절 성공');
    },
    onError: () => {
      console.log('지원 거절 실패');
    },
  });
  return { mutate };
};
