import { NotificationsSetting } from '@/Types/notifications';

export const mockNotificationsSetting: NotificationsSetting = {
  settings: {
    all: true,
    study: {
      applicantNotification: true,
      applicantNotificationType: 'STUDY_APPLICANT',
      applicantResultNotification: true,
      applicantResultNotificationType: 'STUDY_APPLICANT_RESULT',
      endDateNotification: true,
      endDateNotificationType: 'STUDY_END_DATE',
      participantLeaveNotification: true,
      participantLeaveNotificationType: 'STUDY_PARTICIPANT_LEAVE',
    },
    recruitment: {
      notification: true,
      notificationType: 'RECRUITMENT',
    },
    review: {
      notification: true,
      notificationType: 'REVIEW',
    },
  },

  stackKeyword: [
    { stackId: 93, name: 'ReactJS' },
    { stackId: 115, name: 'Spring' },
    { stackId: 137, name: 'Figma' },
  ],
  positionKeyword: [
    { positionId: 1, name: '백엔드' },
    { positionId: 2, name: '프론트엔드' },
    { positionId: 3, name: '디자이너' },
  ],
  categoryKeyword: [
    { categoryId: 1, name: '프로젝트' },
    { categoryId: 2, name: '코딩 테스트' },
    { categoryId: 3, name: '모의 면접' },
  ],
};
