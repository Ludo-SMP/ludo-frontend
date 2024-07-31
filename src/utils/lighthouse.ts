import { ROUTES } from '@/Constants/route';
export const DEV_ORIGIN_URL = `https://local.ludo.study:3000`;

export const LH_MONITORING_PAGE_NAMES = [
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
] as const;

export const LH_MONITORING_PAGE_ROUTES: Record<(typeof LH_MONITORING_PAGE_NAMES)[number], string> = {
  메인: ROUTES.MAIN,
  '마이페이지(홈)': ROUTES.MYPAGE.HOME,
  '마이페이지(리뷰)': ROUTES.MYPAGE.REVIEWS,
  '마이페이지(임시저장)': ROUTES.MYPAGE.SAVED,
  '마이페이지(알림설정)': ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS,
  '마이페이지(알림)': ROUTES.MYPAGE.NOTIFICATIONS,
  '모집공고 모아보기': ROUTES.RECRUITMENT.RECRUITMENTS,
  '모집공고 상세': ROUTES.RECRUITMENT.DETAIL,
  '모집공고 생성': ROUTES.RECRUITMENT.CREATE,
  '스터디 상세': ROUTES.STUDY.DETAIL,
  '스터디 생성': ROUTES.STUDY.CREATE,
  '스터디 지원자 확인': ROUTES.STUDY.APPLICANTS,
  '스터디원 리뷰': ROUTES.STUDY.REVIEW,
};

export const LH_SCORE_CRITERIA = { GREEN_MIN_SCORE: 90, ORANGE_MIN_SCORE: 50, RED_MIN_SCORE: 0 };

export const getLighthouseMonitoringPageUrls = LH_MONITORING_PAGE_NAMES.map(
  (pageName) => `${DEV_ORIGIN_URL}${LH_MONITORING_PAGE_ROUTES[pageName]}`,
);
