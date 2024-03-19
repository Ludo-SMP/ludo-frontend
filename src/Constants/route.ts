export const ROUTES = {
  MAIN: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    DEACTIVATE: '/deactivate',
  },
  MYPAGE: '/mypage',
  RECRUITMENT: {
    CREATE: '/studies/:studyId/recruitments/create',
    RECRUITMENTS: '/studies',
    DETAIL: '/studies/:recruitmentId/recruitment',
    MODIFY: '/studies/:studyId/recruitments/edit',
  },
  STUDY: {
    CREATE: '/studies/create',
    DETAIL: '/studies/:studyId',
    MODIFY: '/studies/:studyId/edit',
    APPLICNATS: '/studies/:studyId/applicants',
    SAVE: '/mypage/savestudy',
  },
} as const;
