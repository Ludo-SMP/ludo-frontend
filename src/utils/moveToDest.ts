import { NotificationSSEType, NotificationsType } from '@/Types/notifications';

/** 알림 종류에 따라 라우팅 경로를 반환 */
export const moveToDest = (type: NotificationsType, params: NotificationSSEType['params']) => {
  /** 스터디 종료 알림, 스터디 지원 거절 알림 */
  if (type === 'STUDY_END_DATE' || type === 'STUDY_APPLICANT_REJECT') return;
  let destPagePath = null;

  switch (type) {
    /** 모집공고 알림 => 모집공고 페이지 */
    case 'RECRUITMENT':
      if ('recruitmentId' in params) destPagePath = `/studies/${params?.recruitmentId}/recruitment`;
      break;
    /** 리뷰 받았을 때 => 스터디 리뷰 페이지 */
    case 'REVIEW_RECEIVE':
      if ('userId' in params) destPagePath = `/studies/${params.studyId}/${params.userId}/review`;
      break;
    /** 상호 리뷰 완료 => 마이페이지의 리뷰 페이지 */
    case 'REVIEW_PEER_FINISH':
      destPagePath = '/mypage/reviews';
      break;
    /** 상호 리뷰 완료 => 스터디 지원자 확인 페이지 */
    case 'STUDY_APPLICANT':
      if ('studyId' in params) destPagePath = `/studies/${params.studyId}/applicants`;
      break;
    default:
      /** 리뷰 시작, 스터디원 탈퇴, 탈퇴 신청, 지원한 스터디 합격 => 스터디 상세 페이지 */
      if ('studyId' in params) destPagePath = `/studies/${params.studyId}`;
  }
  return destPagePath;
};
