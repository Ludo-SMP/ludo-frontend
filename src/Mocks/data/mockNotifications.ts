import { NOTIFICATIONS, NotificationSSEType, NotificationsSetting } from '@/Types/notifications';

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
      {
        notificationId: 4,
        title: '스터디 LUDO 지원결과가 나왔습니다.',
        content: '스터디 LUDO에 합류하게 되신 것을 축하드립니다.',
        type: 'STUDY_APPLICANT_ACCEPT',
        read: false,
        params: {
          studyId: 3,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 5,
        title: '스터디 LUDO 지원결과가 나왔습니다.',
        content: '스터디 LUDO와 함께할 수 없게 되었습니다. 다음에 좋은 인연으로 만날 수 있으면 좋겠습니다.',
        type: 'STUDY_APPLICANT_REJECT',
        read: false,
        params: {
          studyId: null as null,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 6,
        title: '스터디 종료기간이 임박하였습니다.',
        content: '스터디 종료기간이 임박하였습니다.',
        type: 'STUDY_END_DATE',
        read: false,
        params: {
          studyId: null as null,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 7,
        title: '스터디 탈퇴 신청이 접수되었습니다.',
        content: '스터디 LUDO에서 스터디원의 탈퇴 신청이 접수되었습니다.',
        type: 'STUDY_PARTICIPANT_LEAVE_APPLY',
        read: false,
        params: {
          studyId: 6,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 8,
        title: '스터디 탈퇴자가 발생하였습니다.',
        content: '스터디 탈퇴자가 발생하였습니다.',
        type: 'STUDY_PARTICIPANT_LEAVE',
        read: false,
        params: {
          studyId: 6,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 9,
        title: '스터디원간 상호 리뷰가 완료되었습니다.',
        content: '스터디원간 상호 리뷰가 완료되었습니다.',
        type: 'REVIEW_PEER_FINISH',
        read: false,
        params: {
          studyId: null as null,
          userId: null as null,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
      {
        notificationId: 10,
        title: '진행 완료된 스터디에서 다른 스터디원의 리뷰가 업로드되었습니다.',
        content: '진행 완료된 스터디에서 다른 스터디원의 리뷰가 업로드되었습니다.',
        type: 'REVIEW_RECEIVE',
        read: false,
        params: {
          studyId: 3,
          userId: 3,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
    ] satisfies Array<NotificationSSEType>,
  },
};

export const mockNotificationsSetting: NotificationsSetting = {
  allConfig: {
    type: 'ALL_CONFIG',
    on: true,
  },
  studyApplicantConfig: {
    type: 'STUDY_APPLICANT_CONFIG',
    on: true,
  },
  studyApplicantResultConfig: {
    type: 'STUDY_APPLICANT_RESULT_CONFIG',
    on: true,
  },
  studyEndDateConfig: {
    type: 'STUDY_END_DATE_CONFIG',
    on: true,
  },
  studyParticipantLeaveConfig: {
    type: 'STUDY_PARTICIPANT_LEAVE_CONFIG',
    on: true,
  },
  reviewConfig: {
    type: 'REVIEW_CONFIG',
    on: true,
  },
  recruitmentConfig: {
    type: 'RECRUITMENT_CONFIG',
    on: true,
    categoryKeywords: [
      { categoryId: 1, name: '개발 프로젝트' },
      { categoryId: 2, name: '코딩 테스트' },
      { categoryId: 3, name: '모의 면접' },
    ],
    positionKeywords: [
      { positionId: 1, name: '백엔드' },
      { positionId: 2, name: '프론트엔드' },
      { positionId: 3, name: '디자인' },
    ],
    stackKeywords: [
      { stackId: 93, name: 'ReactJS' },
      { stackId: 115, name: 'Spring' },
      { stackId: 137, name: 'Figma' },
    ],
  },
};
