export const ROUTES = {
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
} as const;
