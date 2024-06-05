import { SocialType } from '@/Types/auth';

const API_PREFIX = `api`;

export const API_END_POINT = {
  // AUTH
  LOGIN: (socialType: SocialType) => `${API_PREFIX}/auth/login/${socialType}`,
  LOGOUT: `${API_PREFIX}/auth/logout`,
  SIGNUP: (socialType: SocialType) => `${API_PREFIX}/auth/signup/${socialType}`,

  // USER
  USER: `${API_PREFIX}/users/me`,
  EDIT_NICKNAME: `${API_PREFIX}/users/me/nickname`,
  REVIEW: `${API_PREFIX}/users/me/review`,
  DEACTIVATE: `${API_PREFIX}/users/deactivate`,

  // RECRUITMENTS
  RECRUITMENTS: `${API_PREFIX}/recruitments`,
  POPULAR_RECRUITMENTS: `${API_PREFIX}/recruitments/popular`,
  RECRUITMENT: (recruitmentId: number) => `${API_PREFIX}/recruitments/${recruitmentId}`,
  CREATE_RECRUITMENT: (studyId: number) => `${API_PREFIX}/studies/${studyId}/recruitments`,
  EDIT_RECRUITMENT: (studyId: number) => `${API_PREFIX}/studies/${studyId}/recruitments`,
  DELETE_RECRUITMENT: (studyId: number) => `${API_PREFIX}/studies/${studyId}/recruitments`,
  CLOSE_RECRUITMENT: (studyId: number) => `${API_PREFIX}/studies/${studyId}`,

  //STUDIES
  CREATE_STUDY: `${API_PREFIX}/studies`,
  STUDY: (studyId: number) => `${API_PREFIX}/studies/${studyId}`,
  EDIT_STUDY: (studyId: number) => `${API_PREFIX}/studies/${studyId}`,
  DELETE_STUDY: (studyId: number) => `${API_PREFIX}/studies/${studyId}`,
  LEAVE_STUDY: (studyId: number) => `${API_PREFIX}/studies/${studyId}/participants`,
  APPLICANTS: (studyId: number) => `${API_PREFIX}/studies/${studyId}/applicants`,
  ATTEND_STUDY: (studyId: number) => `${API_PREFIX}/studies/${studyId}/attendance`,

  // APPLY
  APPLY: (studyId: number, recruitmentId: number) =>
    `${API_PREFIX}/studies/${studyId}/recruitments/${recruitmentId}/apply`,
  APPLY_CANCEL: (studyId: number, recruitmentId: number) =>
    `${API_PREFIX}/studies/${studyId}/recruitments/${recruitmentId}/cancel`,
  APPLY_ACCEPT: (studyId: number, applicantId: number) =>
    `${API_PREFIX}/studies/${studyId}/apply-accept/${applicantId}`,
  APPLY_REFUSE: (studyId: number, applicantId: number) =>
    `${API_PREFIX}/studies/${studyId}/apply-refuse/${applicantId}`,

  // MYPAGE
  MYPAGE: `${API_PREFIX}/users/mypage`,

  // STACK
  STACK: `${API_PREFIX}/stacks`,

  // NOTIFICATIONS
  NOTIFICATIONS: `${API_PREFIX}/notifications`,
  READ_NOTIFICATIONS: (notificationId: number) => `${API_PREFIX}/notifications/${notificationId}`,
  NOTIFICATIONS_SETTING: `${API_PREFIX}/notifications/settings`,
  EDIT_NOTIFICATIONS_KEYWORDS: `${API_PREFIX}/notifications/settings/keywords`,
};
