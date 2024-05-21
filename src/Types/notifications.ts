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

export type NotificationsType = keyof typeof NOTIFICATIONS;
