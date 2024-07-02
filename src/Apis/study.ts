import { httpClient } from '@/utils/axios';
import { API_END_POINT } from '@/Constants/api';
import { ApplicantsDetail, StudyCreate, StudyDetail } from '@/Types/study';

export const getStudyDetail = (studyId: number): Promise<{ data: { data: StudyDetail } }> =>
  httpClient.get(API_END_POINT.STUDY(studyId));

export const getApplicantsDetail = (studyId: number): Promise<{ data: { data: ApplicantsDetail } }> =>
  httpClient.get(API_END_POINT.APPLICANTS(studyId));

export const createStudy = async (data: StudyCreate) => httpClient.post(API_END_POINT.CREATE_STUDY, { ...data });

export const editStudy = async (studyId: number, data: Partial<StudyCreate>) =>
  httpClient.put(API_END_POINT.EDIT_STUDY(studyId), { ...data });

export const applyStudy = async (studyId: number, recruitmentId: number, data: { positionId: number }) =>
  httpClient.post(API_END_POINT.APPLY(studyId, recruitmentId), { ...data });

export const refuseApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_REFUSE(studyId, applicantId));

export const acceptApply = (studyId: number, applicantId: number) =>
  httpClient.post(API_END_POINT.APPLY_ACCEPT(studyId, applicantId));

export const cancelApply = (studyId: number, recruitmentId: number) =>
  httpClient.post(API_END_POINT.APPLY_CANCEL(studyId, recruitmentId));

export const deleteStudy = (studyId: number) => httpClient.delete(API_END_POINT.DELETE_STUDY(studyId));

export const forceLeaveStudy = (studyId: number) => httpClient.delete(API_END_POINT.STUDY_FORCE_LEAVE(studyId));
export const requestLeaveStudy = (studyId: number) => httpClient.post(API_END_POINT.STUDY_LEAVE_REQUEST(studyId));
export const approveStudyLeaveRequest = (studyId: number) =>
  httpClient.delete(API_END_POINT.STUDY_LEAVE_REQUEST_APPROVE(studyId));
export const rejectStudyLeaveRequest = (studyId: number) =>
  httpClient.delete(API_END_POINT.STUDY_LEAVE_REQUEST_REJECT(studyId));

// 스터디 출석 체크 API
export const attendStudy = (studyId: number) => httpClient.post(API_END_POINT.ATTEND_STUDY(studyId));
