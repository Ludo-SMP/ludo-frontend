export const BASE_KEY = {
  recruitment: 'recruitment',
  study: 'study',
};

export const RECRUITMENT = {
  popular: [BASE_KEY.recruitment, 'popular'],
  recruitments: (filterOptions: object) => [BASE_KEY.recruitment, filterOptions],
  recruitment: (recruitmentId: number) => [BASE_KEY.recruitment, recruitmentId],
};

export const STUDY = {
  study: (studyId: number) => [BASE_KEY.study, studyId],
  applicants: (studyId: number) => [BASE_KEY.study, 'applicants', studyId],
  myStudies: () => [BASE_KEY.study, 'myStudy'],
};
