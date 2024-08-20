const TEST_RECRUITMENT_ID = 70;
const LH_GREEN_MIN_SCORE = 90;
const LH_ORANGE_MIN_SCORE = 50;

const PAGE_ROUTES = {
  MAIN: '/',
  AUTH: {
    LOGIN: '/login',
  },
  RECRUITMENT: {
    RECRUITMENTS: '/studies',
    DETAIL: `/studies/${TEST_RECRUITMENT_ID}/recruitment`,
  },
};

module.exports = {
  DEV_ORIGIN_URL: `https://local.ludo.study:3000`,
  LH_MONITORING_PAGE_NAMES: ['메인', '로그인', '모집공고 모아보기', '모집공고 상세'],
  LH_MIN_SCORES: { GREEN: LH_GREEN_MIN_SCORE, ORANGE: LH_ORANGE_MIN_SCORE },
  LH_MONITORING_PAGE_ROUTES: {
    메인: PAGE_ROUTES.MAIN,
    로그인: PAGE_ROUTES.AUTH.LOGIN,
    '모집공고 모아보기': PAGE_ROUTES.RECRUITMENT.RECRUITMENTS,
    '모집공고 상세': PAGE_ROUTES.RECRUITMENT.DETAIL,
  },
};
