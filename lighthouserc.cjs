const DEV_ORIGIN_URL = `https://local.ludo.study:3000`;
const TEST_RECRUITMENT_ID = 70;

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

const LH_MONITORING_PAGE_NAMES = ['메인', '로그인', '모집공고 모아보기', '모집공고 상세'];

const LH_MONITORING_PAGE_ROUTES = {
  메인: PAGE_ROUTES.MAIN,
  로그인: PAGE_ROUTES.AUTH.LOGIN,
  '모집공고 모아보기': PAGE_ROUTES.RECRUITMENT.RECRUITMENTS,
  '모집공고 상세': PAGE_ROUTES.RECRUITMENT.DETAIL,
};

const urls = LH_MONITORING_PAGE_NAMES.map((pageName) => `${DEV_ORIGIN_URL}${LH_MONITORING_PAGE_ROUTES[pageName]}`);

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start:mac',
      url: urls,
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--ignore-certificate-errors',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%.%%EXTENSION%%',
    },
  },
};
