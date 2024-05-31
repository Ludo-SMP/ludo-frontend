import { NOTIFICATIONS } from '@/Types/notifications';

export const mockNotifications = {
  data: {
    notification: [
      {
        notificationId: 1,
        title: NOTIFICATIONS.STUDY_APPLICANT,
        content: NOTIFICATIONS.STUDY_APPLICANT,
        type: 'STUDY_APPLICANT',
        read: false,
        params: {
          studyId: 3,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 2,
        title: NOTIFICATIONS.REVIEW_START,
        content: NOTIFICATIONS.REVIEW_START,
        type: 'REVIEW_START',
        read: false,
        params: {
          studyId: 3,
          userId: 5,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 3,
        title: NOTIFICATIONS.RECRUITMENT,
        content: NOTIFICATIONS.RECRUITMENT,
        type: 'RECRUITMENT',
        read: false,
        params: {
          recruitmentId: 6,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
    ],
  },
};
