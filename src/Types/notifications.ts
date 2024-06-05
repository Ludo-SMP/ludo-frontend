export interface RecruitmentKeywordsForm {
  categoryIds: number[];
  stackIds: number[];
  positionIds: number[];
}

// 알림 종류 ENUM 타입
export const NOTIFICATIONS = {
  RECRUITMENT: '모집 공고 알림',
  STUDY_APPLICANT: '스터디 지원 현황 알림',
  STUDY_APPLICANT_ACCEPT: '스터디 지원 합격 알림',
  STUDY_APPLICANT_REJECT: '스터디 지원 탈락 알림',
  STUDY_END_DATE: '스터디 종료 기간 알림',
  STUDY_PARTICIPANT_LEAVE: '스터디 탈퇴자 발생 알림',
  STUDY_PARTICIPANT_LEAVE_APPLY: '스터디 탈퇴 신청 알림',
  STUDY_APPLICANT_RESULT: '스터디 지원 결과 알림',
  REVIEW_START: '리뷰 평가 시작 알림',
  REVIEW_RECEIVE: '리뷰 도착 알림',
  REVIEW_PEER_FINISH: '상호 리뷰 평가 도착 알림',
} as const;

// 알림 설정 ENUM 타입
export const NOTIFICATION_SETTINGS_CONFIG = {
  ALL_CONFIG: '전체 알림 설정',
  RECRUITMENT_CONFIG: '모집공고 알림 설정',
  STUDY_APPLICANT_CONFIG: '스터디 지원 여부 알림 설정',
  STUDY_APPLICANT_RESULT_CONFIG: '스터디 지원 결과 알림 설정',
  STUDY_END_DATE_CONFIG: '스터디 종료 기간 알림 설정',
  STUDY_PARTICIPANT_LEAVE_CONFIG: '스터디 탈퇴자 알림 설정',
  REVIEW_CONFIG: '스터디원 리뷰 평가 알림 설정',
} as const;

// 전체 알림 키
export type NotificationsType = keyof typeof NOTIFICATIONS;
export type NotificationsSettingConfigType = keyof typeof NOTIFICATION_SETTINGS_CONFIG;

/** 타입 기준 키 분류 */

// 모집공고 키
export type RECRUITMENT_NOTIFICATION_KEYS = keyof Pick<typeof NOTIFICATIONS, 'RECRUITMENT'>;

// 스터디 알림 키
export type STUDY_NOTIFICATION_KEYS = keyof Pick<
  typeof NOTIFICATIONS,
  | 'STUDY_APPLICANT'
  | 'STUDY_APPLICANT_ACCEPT'
  | 'STUDY_APPLICANT_REJECT'
  | 'STUDY_END_DATE'
  | 'STUDY_PARTICIPANT_LEAVE'
  | 'STUDY_PARTICIPANT_LEAVE_APPLY'
  | 'STUDY_APPLICANT_RESULT'
>;

// 리뷰 알림 키
export type REVIEW_NOTIFICATION_KEYS = keyof Pick<
  typeof NOTIFICATIONS,
  'REVIEW_START' | 'REVIEW_RECEIVE' | 'REVIEW_PEER_FINISH'
>;

// 알림 이벤트 공통 타입
export interface NotificationEvent<T extends NotificationsType> {
  type: T;
  notificationId: number;
  title: string;
  content: string;
  createdAt: string;
  read: false;
}

// 모집공고 알림 응답 타입
export interface RecruitmentNotification extends NotificationEvent<RECRUITMENT_NOTIFICATION_KEYS> {
  type: RECRUITMENT_NOTIFICATION_KEYS;
  params: {
    recruitmentId: number;
  };
}

// 스터디 알림 응답 타입
export interface StudyNotification extends NotificationEvent<STUDY_NOTIFICATION_KEYS> {
  type: STUDY_NOTIFICATION_KEYS;
  params: {
    studyId: number | null;
  };
}

// 리뷰 알림 응답 타입
export interface ReviewNotification extends NotificationEvent<REVIEW_NOTIFICATION_KEYS> {
  type: REVIEW_NOTIFICATION_KEYS;
  params: {
    studyId: number | null;
    userId: number | null;
  };
}

// SSE 실시간 알림 응답 타입
export type NotificationSSEType = RecruitmentNotification | StudyNotification | ReviewNotification;

export interface NotificationsSetting {
  allConfig: {
    type: 'ALL_CONFIG';
    on: boolean;
  };
  studyApplicantConfig: {
    type: 'STUDY_APPLICANT_CONFIG';
    on: boolean;
  };
  studyApplicantResultConfig: {
    type: 'STUDY_APPLICANT_RESULT_CONFIG';
    on: boolean;
  };
  studyEndDateConfig: {
    type: 'STUDY_END_DATE_CONFIG';
    on: boolean;
  };
  studyParticipantLeaveConfig: {
    type: 'STUDY_PARTICIPANT_LEAVE_CONFIG';
    on: boolean;
  };
  reviewConfig: {
    type: 'REVIEW_CONFIG';
    on: boolean;
  };
  recruitmentConfig: {
    type: 'RECRUITMENT_CONFIG';
    on: boolean;
    categoryKeywords: { categoryId: number; name: string }[];
    positionKeywords: { positionId: number; name: string }[];
    stackKeywords: { stackId: number; name: string }[];
  };
}
