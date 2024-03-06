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
  study: (studyId: number) => [BASE_KEY.study, studyId],
  REFUSE: (studyId: number, recruitmentId: number, applicantId: number) => [
    BASE_KEY.study,
    studyId,
    recruitmentId,
    applicantId,
  ],
  ACCEPT: (studyId: number, recruitmentId: number, applicantId: number) => [
    BASE_KEY.study,
    studyId,
    recruitmentId,
    applicantId,
  ],
  MYPAGE_INFO: () => [BASE_KEY.study, 'myPage'],
};
