import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import LoginPage from '@/Pages/Login';
import MainPage from '@/Pages/Main';
import RecruitmentDetailPage from '@/Pages/RecruitmentDetail';
import RecruitmentsPage from '@/Pages/Recruitments';
import SignUpPage from '@/Pages/SignUp';
import ApplicantsPage from '@/Pages/Applicants';
import StudyDetailPage from '@/Pages/StudyDetail';
// import SaveStudyPage from '@/Pages/Studies/SaveStudy';
// import CreateStudyPage from '@/Pages/Studies/CreateStudy';
// import ModifyStudyPage from '@/Pages/Studies/ModifyStudy';
import CreateRecruitmentPage from '@/Pages/CreateRecruitment/page';
import LoginFailPage from '@/Pages/LoginFail';
import SignUpFailPage from '@/Pages/SignUpFail';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ErrorBoundary from '@/Components/ErrorBoundary';
import { EditRecruitmentFetcher } from '@/Pages/EditRecruitment/EditRecruitmentFetcher';

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
          <>
            TODO: <Outlet />
          </>
        ),
        children: [
          {
            // 회원 정보
            index: true,
            element: <>TODO</>,
          },
          {
            // 스터디원이 남긴 나의 리뷰
            path: ROUTES.MYPAGE.REVIEWS,
            element: <>TODO</>,
          },
          {
            // 임시 저장된 글
            path: ROUTES.MYPAGE.SAVED,
            element: <>TODO</>,
          },
          {
            path: ROUTES.MYPAGE.SETTINGS,
            // 설정 페이지 공통 레이아웃
            element: (
              <>
                TODO <Outlet />
              </>
            ),
            children: [
              {
                // 프로필 설정
                path: ROUTES.MYPAGE.PROFILE_SETTINGS,
                element: <>TODO</>,
              },
              {
                // 알림 권한 설정
                path: ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS,
                element: <>TODO</>,
              },
            ],
          },
          {
            // 루도가 알려요
            path: ROUTES.MYPAGE.NOTIFICATIONS,
            element: <>TODO</>,
          },
        ],
      },
      // {
      //   path: ROUTES.STUDY.CREATE,
      //   element: <CreateStudyPage />,
      // },
      // {
      //   path: ROUTES.STUDY.MODIFY,
      //   element: <ModifyStudyPage />,
      // },
      {
        path: ROUTES.RECRUITMENT.CREATE,
        element: <CreateRecruitmentPage />,
      },

      {
        path: ROUTES.STUDY.DETAIL,
        element: <StudyDetailPage />,
      },
      {
        path: ROUTES.RECRUITMENT.DETAIL,
        element: <RecruitmentDetailPage />,
      },
      {
        path: ROUTES.RECRUITMENT.RECRUITMENTS,
        element: <RecruitmentsPage />,
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: ROUTES.AUTH.SIGNUPFAIL,
        element: <SignUpFailPage />,
      },
      {
        path: ROUTES.STUDY.APPLICNATS,
        element: <ApplicantsPage />,
      },
      {
        // 스터디원 평가 페이지
        path: ROUTES.STUDY.REVIEW,
        element: <>TODO</>,
      },
      {
        path: ROUTES.RECRUITMENT.EDIT,
        element: <EditRecruitmentFetcher />,
      },
    ],
  },
]);
