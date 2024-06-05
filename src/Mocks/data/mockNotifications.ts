import { NotificationsSetting } from '@/Types/notifications';

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
