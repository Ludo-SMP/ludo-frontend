export const ROUTES = {
  MAIN: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    DEACTIVATE: '/deactivate',
    LOGINFAIL: '/login/fail',
    SIGNUPFAIL: '/signup/fail',
  },
  MYPAGE: '/mypage',
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
    APPLICNATS: '/studies/:studyId/applicants',
    SAVE: '/mypage/savestudy',
  },
} as const;
