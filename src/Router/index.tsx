import { lazy, Suspense } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { Saved } from '@/Pages/Saved';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Loading } from '@/Assets';
import ErrorBoundary from '@/Components/ErrorBoundary';
import { EditRecruitmentPage } from '@/Pages/EditRecruitment';
import { MyPageLayout } from '@/Layout/MyPageLayout';
import { ProfileLayout } from '@/Layout/ProfileLayout';
import { SettingLayout } from '@/Layout/SettingLayout';
import MainPage from '@/Pages/Main';
import RecruitmentsPage from '@/Pages/Recruitments';

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

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export const RouterPath = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
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
        element: (
          <SuspenseWrapper>
            <LoginPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.AUTH.LOGINFAIL,
        element: (
          <SuspenseWrapper>
            <LoginFailPage />
          </SuspenseWrapper>
        ),
      },
      {
        // 마이페이지
        path: ROUTES.MYPAGE.HOME,
        // 마이페이지 공통 사이드바
        element: (
          <MyPageLayout>
            <SuspenseWrapper>
              <Outlet />
            </SuspenseWrapper>
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
            element: <Saved />,
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
        element: (
          <SuspenseWrapper>
            <StudyDetailPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.RECRUITMENT.RECRUITMENTS,
        element: (
          <SuspenseWrapper>
            <RecruitmentsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.RECRUITMENT.DETAIL,
        element: (
          <SuspenseWrapper>
            <RecruitmentDetailPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: (
          <SuspenseWrapper>
            <SignUpPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.AUTH.SIGNUPFAIL,
        element: (
          <SuspenseWrapper>
            <SignUpFailPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    // 스터디원 평가 페이지
    path: ROUTES.STUDY.REVIEW,
    element: (
      <SuspenseWrapper>
        <ReviewPage />
      </SuspenseWrapper>
    ),
  },
  {
    // 스터디 생성 페이지
    path: ROUTES.STUDY.CREATE,
    element: (
      <SuspenseWrapper>
        <CreateStudyPage />
      </SuspenseWrapper>
    ),
  },
  {
    // 스터디 수정 페이지
    path: ROUTES.STUDY.MODIFY,
    element: (
      <SuspenseWrapper>
        <ModifyStudyPage />
      </SuspenseWrapper>
    ),
  },
  {
    // 스터디 지원자 페이지
    path: ROUTES.STUDY.APPLICANTS,
    element: (
      <SuspenseWrapper>
        <ApplicantsPage />
      </SuspenseWrapper>
    ),
  },
  {
    // 모집공고 생성 페이지
    path: ROUTES.RECRUITMENT.CREATE,
    element: (
      <SuspenseWrapper>
        <CreateRecruitmentPage />
      </SuspenseWrapper>
    ),
  },
  // 모집공고 수정 페이지
  {
    path: ROUTES.RECRUITMENT.EDIT,
    element: (
      <SuspenseWrapper>
        <EditRecruitmentPage />
      </SuspenseWrapper>
    ),
  },
]);
