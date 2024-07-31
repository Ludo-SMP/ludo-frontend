const DEV_ORIGIN_URL = `https://local.ludo.study:3000`;

const PAGE_ROUTES = {
  MAIN: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    DEACTIVATE: '/deactivate',
    LOGINFAIL: '/login/fail',
    SIGNUPFAIL: '/signup/fail',
  },
  MYPAGE: {
    HOME: '/mypage',
    REVIEWS: '/mypage/reviews',
    SAVED: '/mypage/saved',
    SETTINGS: '/mypage/settings',
    PROFILE_SETTINGS: '/mypage/settings/profile',
    NOTIFICATIONS_SETTINGS: '/mypage/settings/notifications',
    NOTIFICATIONS: '/mypage/notifications',
  },
  RECRUITMENT: {
    CREATE: '/studies/:studyId/recruitments/create',
    RECRUITMENTS: '/studies',
    DETAIL: '/studies/:recruitmentId/recruitment',
    EDIT: '/studies/:studyId/recruitments/:recruitmentId/edit',
  },
  STUDY: {
    CREATE: '/studies/create',
    DETAIL: '/studies/:studyId',
    MODIFY: '/studies/:studyId/edit',
    APPLICANTS: '/studies/:studyId/applicants',
    REVIEW: '/studies/:studyId/:userId/review',
  },
};

const LH_MONITORING_PAGE_NAMES = [
  '메인',
  '마이페이지(홈)',
  '마이페이지(리뷰)',
  '마이페이지(임시저장)',
  '마이페이지(알림설정)',
  '마이페이지(알림)',
  '모집공고 모아보기',
  '모집공고 상세',
  '모집공고 생성',
  '스터디 상세',
  '스터디 생성',
  '스터디 지원자 확인',
  '스터디원 리뷰',
];

const LH_MONITORING_PAGE_ROUTES = {
  메인: PAGE_ROUTES.MAIN,
  '마이페이지(홈)': PAGE_ROUTES.MYPAGE.HOME,
  '마이페이지(리뷰)': PAGE_ROUTES.MYPAGE.REVIEWS,
  '마이페이지(임시저장)': PAGE_ROUTES.MYPAGE.SAVED,
  '마이페이지(알림설정)': PAGE_ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS,
  '마이페이지(알림)': PAGE_ROUTES.MYPAGE.NOTIFICATIONS,
  '모집공고 모아보기': PAGE_ROUTES.RECRUITMENT.RECRUITMENTS,
  '모집공고 상세': PAGE_ROUTES.RECRUITMENT.DETAIL,
  '모집공고 생성': PAGE_ROUTES.RECRUITMENT.CREATE,
  '스터디 상세': PAGE_ROUTES.STUDY.DETAIL,
  '스터디 생성': PAGE_ROUTES.STUDY.CREATE,
  '스터디 지원자 확인': PAGE_ROUTES.STUDY.APPLICANTS,
  '스터디원 리뷰': PAGE_ROUTES.STUDY.REVIEW,
};

const getLighthouseMonitoringPageUrls = LH_MONITORING_PAGE_NAMES.map(
  (pageName) => `${DEV_ORIGIN_URL}${LH_MONITORING_PAGE_ROUTES[pageName]}`,
);

const urls = getLighthouseMonitoringPageUrls();

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start:mac',
      url: urls,
      numberOfRuns: 5,
    },

    upload: {
      target: 'filesystem',
      outputDir: './lhci',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%.%%EXTENSION%%',
    },
  },
};
