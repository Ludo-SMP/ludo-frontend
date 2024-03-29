export const BASE_KEY = {
  RECRUITMENT: 'RECRUITMENT',
  STUDY: 'STUDY',
  STACK: 'STACK',
  USER: 'USER',
};

export const RECRUITMENT = {
  POPULAR: [BASE_KEY.RECRUITMENT, 'POPULAR'],
  RECRUITMENTS: (filterOptions: object) => [BASE_KEY.RECRUITMENT, filterOptions],
  RECRUITMENT: (recruitmentId: number) => [BASE_KEY.RECRUITMENT, recruitmentId],
  CLOSE_RECRUITMENT: (studyId: number) => [BASE_KEY.RECRUITMENT, studyId, 'CLOSE'],
};

export const STUDY = {
  STUDY: (studyId: number) => [BASE_KEY.STUDY, studyId],
  APPLY: (studyId: number, recruitmentId: number) => [BASE_KEY.STUDY, studyId, recruitmentId, 'APPLY'],
  APPLY_REFUSE: (studyId: number, applicantId: number) => [BASE_KEY.STUDY, studyId, applicantId, 'REFUSE'],
  APPLY_ACCEPT: (studyId: number, applicantId: number) => [BASE_KEY.STUDY, studyId, applicantId, 'ACCEPT'],
  APPLY_CANCEL: (studyId: number, recruitmentId: number) => [BASE_KEY.STUDY, studyId, recruitmentId, 'CANCEL'],
  APPLICNATS: (studyId: number) => [BASE_KEY.STUDY, studyId, 'APPLICANTS'],
  MYPAGE_INFO: () => [BASE_KEY.STUDY, 'MYPAGE'],
  DELETE: (studyId: number) => [BASE_KEY.STUDY, studyId, 'DELETE'],
  LEAVE: (studyId: number) => [BASE_KEY.STUDY, studyId, 'LEAVE'],
};

export const USER = {
  EDIT_PROFILE: () => [BASE_KEY.USER, 'NICKNAME'],
};

export const STACK = {
  STACK: ['STACK'],
};
