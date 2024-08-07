import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import LoginPage from '@/Pages/Login';
import MainPage from '@/Pages/Main';
import RecruitmentDetailPage from '@/Pages/RecruitmentDetail';
import RecruitmentsPage from '@/Pages/Recruitments';
import SignUpPage from '@/Pages/SignUp';
import { ApplicantsPage } from '@/Pages/Applicants';
import StudyDetailPage from '@/Pages/StudyDetail';
import CreateStudyPage from '@/Pages/Studies/CreateStudy';
import ModifyStudyPage from '@/Pages/Studies/EditStudy';
import CreateRecruitmentPage from '@/Pages/CreateRecruitment';
import LoginFailPage from '@/Pages/LoginFail';
import SignUpFailPage from '@/Pages/SignUpFail';
import MyPage from '@/Pages/MyPage/index';
import { Saved } from '@/Pages/Saved';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ErrorBoundary from '@/Components/ErrorBoundary';
import { EditRecruitmentPage } from '@/Pages/EditRecruitment';
import { MyPageLayout } from '@/Layout/MyPageLayout';
import { SettingLayout } from '@/Layout/SettingLayout';
import { NotificationsSettings } from '@/Pages/NotificationsSettings';
import { ReviewPage } from '@/Pages/Review';
import { Notifications } from '@/Pages/Notifications';
import { MyPageReviews } from '@/Pages/MyPageReviews';
import { ProfileLayout } from '@/Layout/ProfileLayout';
import UTbanner from '@/Components/UTbanner';

export const RouterPath = createBrowserRouter([
  {
    element: (
      <>
        <UTbanner />
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
            element: <MyPage />,
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
              // {
              //   // 프로필 설정
              //   path: ROUTES.MYPAGE.PROFILE_SETTINGS,
              //   element: <>TODO</>,
              // },
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
    element: <ReviewPage />,
  },
  {
    // 스터디 생성 페이지
    path: ROUTES.STUDY.CREATE,
    element: <CreateStudyPage />,
  },
  {
    // 스터디 수정 페이지
    path: ROUTES.STUDY.MODIFY,
    element: <ModifyStudyPage />,
  },
  {
    // 스터디 지원자 페이지
    path: ROUTES.STUDY.APPLICANTS,
    element: <ApplicantsPage />,
  },
  {
    // 모집공고 생성 페이지
    path: ROUTES.RECRUITMENT.CREATE,
    element: <CreateRecruitmentPage />,
  },
  // 모집공고 수정 페이지
  {
    path: ROUTES.RECRUITMENT.EDIT,
    element: <EditRecruitmentPage />,
  },
]);
