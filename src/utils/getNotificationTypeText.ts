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
