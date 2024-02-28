export const BASE_KEY = {
  recruitment: 'recruitment',
};

export const RECRUITMENT = {
  popular: [BASE_KEY.recruitment, 'popular'],
  recruitments: (filterOptions: object) => [BASE_KEY.recruitment, filterOptions],
  recruitment: (recruitmentId: number) => [BASE_KEY.recruitment, recruitmentId],
};
