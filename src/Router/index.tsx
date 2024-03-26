import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import MyPage from '../Pages/MyPage';
import LoginPage from '@/Pages/Login';
import MainPage from '@/Pages/Main';
import RecruitmentDetailPage from '@/Pages/RecruitmentDetail';
import RecruitmentsPage from '@/Pages/Recruitments';
import SignUpPage from '@/Pages/SignUp';
import ApplicantsPage from '@/Pages/Applicants';
import StudyDetailPage from '@/Pages/StudyDetail';
import SaveStudyPage from '@/Pages/Studies/SaveStudy';
import CreateStudyPage from '@/Pages/Studies/CreateStudy';
import ModifyStudyPage from '@/Pages/Studies/ModifyStudy';
import CreateRecruitmentPage from '@/Pages/Studies/CreateRecruitment';
import ModifyRecruitmentPage from '@/Pages/Studies/ModifyRecruitment';
import LoginFailPage from '@/Pages/LoginFail';
import SignUpFailPage from '@/Pages/SignUpFail';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import UTbanner from '@/Components/UTbanner';
import ErrorBoundary from '@/Components/ErrorBoundary';

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
        path: ROUTES.MYPAGE,
        element: <MyPage />,
      },
      {
        path: ROUTES.STUDY.CREATE,
        element: <CreateStudyPage />,
      },
      {
        path: ROUTES.STUDY.MODIFY,
        element: <ModifyStudyPage />,
      },
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
        path: ROUTES.STUDY.SAVE,
        element: <SaveStudyPage />,
      },
      {
        path: ROUTES.RECRUITMENT.MODIFY,
        element: <ModifyRecruitmentPage />,
      },
    ],
  },
]);
