import { httpClient } from '@/Utils/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { API_END_POINT } from '@/Constants/api';
import { SetStateAction } from 'react';
import { useModalStore } from '@/Store/modal';
import { ApplicantsDetail, MyPageInfo, StudyDetail } from '@/Types/study';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/Constants/Router_Path';

export const getStudyDetail = (studyId: number): Promise<{ data: { data: StudyDetail } }> =>
  httpClient.get(API_END_POINT.STUDY(studyId));

export const useStudyDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.STUDY(studyId)],
    queryFn: () => getStudyDetail(studyId),
    select: (data: { data: { data: StudyDetail } }) => data?.data?.data,
  });
};

export const getMyPageInfo = (): Promise<{ data: { data: MyPageInfo } }> => httpClient.get(API_END_POINT.MYPAGE);

export const useMyPageInfo = () => {
  return useQuery({
    queryKey: [...STUDY.MYPAGE_INFO()],
    queryFn: () => getMyPageInfo(),
    select: (data: { data: { data: MyPageInfo } }) => data?.data?.data,
  });
};

export const getApplicantsDetail = (studyId: number): Promise<{ data: { data: ApplicantsDetail } }> =>
  httpClient.get(API_END_POINT.APPLICANTS(studyId));

export const useApplicantsDetail = (studyId: number) => {
  return useQuery({
    queryKey: [...STUDY.APPLICNATS(studyId)],
    queryFn: () => getApplicantsDetail(studyId),
    select: (data: { data: { data: ApplicantsDetail } }) => data?.data?.data,
  });
};

export const applyStudy = async (recruitmentId: number, data: object) =>
  httpClient.post(API_END_POINT.APPLY(recruitmentId), { ...data });

export const useApplyStudyMutation = (
  recruitmentId: number,
  data: object,
  handleApplyApprove: React.Dispatch<SetStateAction<ApplyState>>,
) => {
  const { openModal } = useModalStore();
  const { mutate } = useMutation({
    mutationKey: [STUDY.APPLY(recruitmentId)],
    mutationFn: () => applyStudy(recruitmentId, data),
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

export const refuseApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_REFUSE(studyId, applicantId));

export const useRefuseApplyMutation = (studyId: number, applicantId: number, successHandler: () => void) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_REFUSE(studyId, applicantId)],
    mutationFn: () => refuseApply(studyId, applicantId),
    onSuccess: () => {
      successHandler();
      openModal();
      queryClient.invalidateQueries({ queryKey: [...STUDY.APPLICNATS(studyId)] });
      console.log('지원 거절 성공');
    },
    onError: () => {
      console.log('지원 거절 실패');
    },
  });
  return { mutate };
};

export const acceptApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_ACCEPT(studyId, applicantId));

export const useAcceptApplyMutation = (studyId: number, applicantId: number, successHandler: () => void) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_ACCEPT(studyId, applicantId)],
    mutationFn: () => acceptApply(studyId, applicantId),
    onSuccess: () => {
      successHandler();
      openModal();
      queryClient.invalidateQueries({ queryKey: [...STUDY.APPLICNATS(studyId)] });

      console.log('지원 수락 성공');
    },
    onError: () => {
      console.log('지원 수락 실패');
    },
  });
  return { mutate };
};

export const cancelApply = (recruitmentId: number) => httpClient.post(API_END_POINT.APPLY_CANCEL(recruitmentId));

export const useCancelAppyMutation = (recruitmentId: number, successHandler: () => void) => {
  const { mutate } = useMutation({
    mutationKey: [...STUDY.APPLY_CANCEL(recruitmentId)],
    mutationFn: () => cancelApply(recruitmentId),
    onSuccess: () => {
      successHandler();
      console.log('지원 취소 성공');
    },
    onError: () => {
      console.log('지원 취소 실패');
    },
  });
  return { mutate };
};

export const deleteStudy = (studyId: number) => httpClient.delete(API_END_POINT.DELETE_STUDY(studyId));

export const useDeleteStudyMutation = (studyId: number) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.DELETE(studyId)],
    mutationFn: () => deleteStudy(studyId),
    onSuccess: () => {
      console.log('스터디 삭제 성공');
      navigate(ROUTER_PATH.mypage);
    },
    onError: () => {
      console.log('스터디 삭제 실패');
    },
  });
  return { mutate };
};

export const leaveStudy = (studyId: number) => httpClient.delete(API_END_POINT.LEAVE_STUDY(studyId));

export const useLeaveStudyMutation = (studyId: number) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: [...STUDY.LEAVE(studyId)],
    mutationFn: () => leaveStudy(studyId),
    onSuccess: () => {
      console.log('스터디 탈퇴 성공');
      navigate(ROUTER_PATH.mypage);
    },
    onError: () => {
      console.log('스터디 탈퇴 실패');
    },
  });
  return { mutate };
};
