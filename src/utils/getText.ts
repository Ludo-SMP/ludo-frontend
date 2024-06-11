import { ROUTES } from '@/Constants/route';
import { NotificationsType } from '@/Types/notifications';

export const getNotificationTypeText = (type: NotificationsType) => {
  let notificationTypeText = '';
  switch (type) {
    case 'REVIEW_START':
    case 'REVIEW_RECEIVE':
    case 'REVIEW_PEER_FINISH':
      notificationTypeText = '스터디원 리뷰';
      break;
    case 'STUDY_APPLICANT':
      notificationTypeText = '스터디원 모집';
      break;
    case 'STUDY_APPLICANT_ACCEPT':
    case 'STUDY_APPLICANT_REJECT':
      notificationTypeText = '스터디 지원';
      break;
    case 'STUDY_PARTICIPANT_LEAVE_APPLY':
      notificationTypeText = '스터디 탈퇴 승인';
      break;
    case 'STUDY_PARTICIPANT_LEAVE':
      notificationTypeText = '스터디원 탈퇴';
      break;
    case 'STUDY_END_DATE':
      notificationTypeText = '스터디 마감 임박';
      break;
    case 'RECRUITMENT':
      notificationTypeText = '루도';
      break;
    default:
      notificationTypeText = '스터디';
  }
  return notificationTypeText;
};

export const getTabTitle = (pathName: string) => {
  let tabTitle = '';
  switch (pathName) {
    case ROUTES.MYPAGE.NOTIFICATIONS:
      tabTitle = '루도가 알려요';
      break;
    case ROUTES.MYPAGE.REVIEWS:
      tabTitle = '스터디원이 남긴 나의 리뷰';
      break;
    case ROUTES.MYPAGE.SAVED:
      tabTitle = '임시 저장된 글';
      break;
    case ROUTES.MYPAGE.PROFILE_SETTINGS:
      tabTitle = '프로필 설정';
      break;
    case ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS:
      tabTitle = '알림 권한 설정';
      break;
    default:
      tabTitle = '회원 정보';
  }
  return tabTitle;
};
