export const BASE_KEY = {
  recruitment: 'recruitment',
  study: 'study',
  stack: 'stack',
};

export const RECRUITMENT = {
  popular: [BASE_KEY.recruitment, 'popular'],
  recruitments: (filterOptions: object) => [BASE_KEY.recruitment, filterOptions],
  recruitment: (recruitmentId: number) => [BASE_KEY.recruitment, recruitmentId],
};

export const STUDY = {
  STUDY: (studyId: number) => [BASE_KEY.study, studyId],
  APPLY: (recruitmentId: number) => [BASE_KEY.study, recruitmentId, 'APPLY'],
  APPLY_REFUSE: (studyId: number, applicantId: number) => [BASE_KEY.study, studyId, applicantId, 'REFUSE'],
  APPLY_ACCEPT: (studyId: number, applicantId: number) => [BASE_KEY.study, studyId, applicantId, 'ACCEPT'],
  APPLY_CANCEL: (recruitmentId: number) => [BASE_KEY.study, recruitmentId, 'CANCEL'],
  APPLICNATS: (studyId: number) => [BASE_KEY.study, studyId, 'APPLICANTS'],
  MYPAGE_INFO: () => [BASE_KEY.study, 'MYPAGE'],
};
