// 알림 설정 키워드
export interface NotificationKeywords {
  categoryIds: number[];
  stackIds: number[];
  positionIds: number[];
}

// 알림 종류 ENUM 타입
export const NOTIFICATIONS = {
  STUDY_APPLICANT: '스터디 지원 현황 알림',
  STUDY_APPLICANT_RESULT: '스터디 지원 결과 알림',
  STUDY_END_DATE: '스터디 종료 기간 알림',
  STUDY_PARTICIPANT_LEAVE: '스터디 탈퇴자 알림',
  RECRUITMENT: '모집 공고 알림',
  REVIEW: '리뷰 평가 알림',
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

export type NotificationsType = keyof typeof NOTIFICATIONS;
export type NotificationsSettingConfigType = keyof typeof NOTIFICATION_SETTINGS_CONFIG;

export interface NotificationsSetting {
  settings: {
    all: boolean;
    study: {
      applicantNotification: boolean;
      applicantNotificationType: Extract<NotificationsSettingConfigType, 'STUDY_APPLICANT_CONFIG'>;
      applicantResultNotification: boolean;
      applicantResultNotificationType: Extract<NotificationsSettingConfigType, 'STUDY_APPLICANT_RESULT_CONFIG'>;
      endDateNotification: boolean;
      endDateNotificationType: Extract<NotificationsSettingConfigType, 'STUDY_END_DATE_CONFIG'>;
      participantLeaveNotification: boolean;
      participantLeaveNotificationType: Extract<NotificationsSettingConfigType, 'STUDY_PARTICIPANT_LEAVE_CONFIG'>;
    };
    recruitment: {
      notification: boolean;
      notificationType: Extract<NotificationsSettingConfigType, 'RECRUITMENT_CONFIG'>;
    };
    review: {
      notification: boolean;
      notificationType: Extract<NotificationsSettingConfigType, 'REVIEW_CONFIG'>;
    };
  };

  /* 기존에 있는 stack, position, category 타입으로 변경 예정
    API 응답에 따라 추후 수정
  **/
  stackKeyword: { stackId: number; name: string }[];
  positionKeyword: { positionId: number; name: string }[];
  categoryKeyword: { categoryId: number; name: string }[];
}

export interface RecruitmentKeywordsForm {
  categoryIds: number[];
  stackIds: number[];
  positionIds: number[];
}
