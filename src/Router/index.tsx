import { lazy, Suspense } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ErrorBoundary from '@/Components/ErrorBoundary';
import { MyPageLayout } from '@/Layout/MyPageLayout';
import { ProfileLayout } from '@/Layout/ProfileLayout';
import { SettingLayout } from '@/Layout/SettingLayout';
import { LoadingSpinner } from '@/Components/LoadingSpinner';

const MainPage = lazy(() => import('@/Pages/Main'));
const RecruitmentsPage = lazy(() => import('@/Pages/Recruitments'));
const LoginPage = lazy(() => import('@/Pages/Login'));
const SignUpPage = lazy(() => import('@/Pages/SignUp'));
const RecruitmentDetailPage = lazy(() => import('@/Pages/RecruitmentDetail'));
const StudyDetailPage = lazy(() => import('@/Pages/StudyDetail'));
const ApplicantsPage = lazy(() => import('@/Pages/Applicants'));
const CreateStudyPage = lazy(() => import('@/Pages/Studies/CreateStudy'));
const ModifyStudyPage = lazy(() => import('@/Pages/Studies/EditStudy'));
const CreateRecruitmentPage = lazy(() => import('@/Pages/CreateRecruitment'));
const LoginFailPage = lazy(() => import('@/Pages/LoginFail'));
const SignUpFailPage = lazy(() => import('@/Pages/SignUpFail'));
const MyPageHome = lazy(() => import('@/Pages/MyPageHome/index'));
const NotificationsSettings = lazy(() => import('@/Pages/NotificationsSettings'));
const ReviewPage = lazy(() => import('@/Pages/Review'));
const Notifications = lazy(() => import('@/Pages/Notifications'));
const MyPageReviews = lazy(() => import('@/Pages/MyPageReviews'));
const EditRecruitmentPage = lazy(() => import('@/Pages/EditRecruitment'));
const SavedPage = lazy(() => import('@/Pages/Saved'));

export const RouterPath = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
          <Footer />
        </Suspense>
      </>
    ),

    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.AUTH.LOGINFAIL,
        element: <LoginFailPage />,
      },
      {
        // 마이페이지
        path: ROUTES.MYPAGE.HOME,
        // 마이페이지 공통 사이드바
        element: (
          <MyPageLayout>
            <Outlet />
          </MyPageLayout>
        ),
        children: [
          {
            // 회원 정보
            index: true,
            element: <MyPageHome />,
          },
          {
            // 스터디원이 남긴 나의 리뷰
            path: ROUTES.MYPAGE.REVIEWS,
            element: (
              <ProfileLayout>
                <MyPageReviews />
              </ProfileLayout>
            ),
          },
          {
            // 임시 저장된 글
            path: ROUTES.MYPAGE.SAVED,
            element: <SavedPage />,
          },
          {
            path: ROUTES.MYPAGE.SETTINGS,
            // 설정 페이지 공통 레이아웃
            element: (
              <SettingLayout>
                <Outlet />
              </SettingLayout>
            ),
            children: [
              {
                // 알림 권한 설정
                path: ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS,
                element: <NotificationsSettings />,
              },
            ],
          },
          {
            // 루도가 알려요
            path: ROUTES.MYPAGE.NOTIFICATIONS,
            element: <Notifications />,
          },
        ],
      },
      {
        path: ROUTES.STUDY.DETAIL,
        element: <StudyDetailPage />,
      },
      {
        path: ROUTES.RECRUITMENT.RECRUITMENTS,
        element: <RecruitmentsPage />,
      },
      {
        path: ROUTES.RECRUITMENT.DETAIL,
        element: <RecruitmentDetailPage />,
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: ROUTES.AUTH.SIGNUPFAIL,
        element: <SignUpFailPage />,
      },
    ],
  },
  {
    // 스터디원 평가 페이지
    path: ROUTES.STUDY.REVIEW,
    element: (
      <Suspense>
        <ReviewPage />
      </Suspense>
    ),
  },
  {
    // 스터디 생성 페이지
    path: ROUTES.STUDY.CREATE,
    element: (
      <Suspense>
        <CreateStudyPage />
      </Suspense>
    ),
  },
  {
    // 스터디 수정 페이지
    path: ROUTES.STUDY.MODIFY,
    element: (
      <Suspense>
        <ModifyStudyPage />
      </Suspense>
    ),
  },
  {
    // 스터디 지원자 페이지
    path: ROUTES.STUDY.APPLICANTS,
    element: (
      <Suspense>
        <ApplicantsPage />
      </Suspense>
    ),
  },
  {
    // 모집공고 생성 페이지
    path: ROUTES.RECRUITMENT.CREATE,
    element: (
      <Suspense>
        <CreateRecruitmentPage />
      </Suspense>
    ),
  },
  // 모집공고 수정 페이지
  {
    path: ROUTES.RECRUITMENT.EDIT,
    element: (
      <Suspense>
        <EditRecruitmentPage />
      </Suspense>
    ),
  },
]);
