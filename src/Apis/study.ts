import { httpClient } from '@/Utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import {
  convertApplicantsRawDataToApplicants,
  convertStudyDetailRawDataToStudyDetail,
} from '@/Utils/propertyConverter';
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

export const getApplicants = (studyId: number) => httpClient.get(API_END_POINT.APPLICANTS(studyId));

export const useApplicants = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.applicants(studyId)],
    queryFn: () => getApplicants(studyId),
    select: (data) => convertApplicantsRawDataToApplicants(data?.data.data),
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
