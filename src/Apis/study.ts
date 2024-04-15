import { httpClient } from '@/utils/axios';
import { API_END_POINT } from '@/Constants/api';
import { ApplicantsDetail, MyPageInfo, StudyCreate, StudyDetail } from '@/Types/study';

export const getStudyDetail = (studyId: number): Promise<{ data: { data: StudyDetail } }> =>
  httpClient.get(API_END_POINT.STUDY(studyId));

export const getMyPageInfo = (): Promise<{ data: { data: MyPageInfo } }> => httpClient.get(API_END_POINT.MYPAGE);

export const getApplicantsDetail = (studyId: number): Promise<{ data: { data: ApplicantsDetail } }> =>
  httpClient.get(API_END_POINT.APPLICANTS(studyId));

export const createStudy = async (data: StudyCreate) => httpClient.post(API_END_POINT.CREATE_STUDY, { ...data });

export const applyStudy = async (studyId: number, recruitmentId: number, data: { positionId: number }) =>
  httpClient.post(API_END_POINT.APPLY(studyId, recruitmentId), { ...data });

export const refuseApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_REFUSE(studyId, applicantId));

export const acceptApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_ACCEPT(studyId, applicantId));

export const cancelApply = (studyId: number, recruitmentId: number) =>
  httpClient.post(API_END_POINT.APPLY_CANCEL(studyId, recruitmentId));

export const deleteStudy = (studyId: number) => httpClient.delete(API_END_POINT.DELETE_STUDY(studyId));

export const leaveStudy = (studyId: number) => httpClient.delete(API_END_POINT.LEAVE_STUDY(studyId));
