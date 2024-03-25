import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import MyPage from '../Pages/MyPage';
import { Login } from '../Pages/Login';
import MainPage from '@/Pages/Main';
import RecruitmentDetailPage from '@/Pages/RecruitmentDetail';
import Recruitments from '../Pages/Recruitments';
import SignUp from '@/Pages/SignUp';
import Header from '@/Components/Header';
import ApplicantsPage from '@/Pages/Applicants';
import StudyDetailPage from '@/Pages/StudyDetail';
import Footer from '@/Components/Footer';
import { SaveStudy } from '@/Pages/Studies/SaveStudy';
import CreateStudy from '@/Pages/Studies/CreateStudy';
import ModifyStudy from '@/Pages/Studies/ModifyStudy';
import CreateRecruitment from '@/Pages/Studies/CreateRecruitment';
import ModifyRecruitment from '@/Pages/Studies/ModifyRecruitment';
import ErrorBoundary from '@/Components/ErrorBoundary';
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
        element: <Login />,
      },
      {
        path: ROUTES.MYPAGE,
        element: <MyPage />,
      },
      {
        path: ROUTES.STUDY.CREATE,
        element: <CreateStudy />,
      },
      {
        path: ROUTES.STUDY.MODIFY,
        element: <ModifyStudy />,
      },
      {
        path: ROUTES.RECRUITMENT.CREATE,
        element: <CreateRecruitment />,
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
        element: <Recruitments />,
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: <SignUp />,
      },
      {
        path: ROUTES.STUDY.APPLICNATS,
        element: <ApplicantsPage />,
      },
      {
        path: ROUTES.STUDY.SAVE,
        element: <SaveStudy />,
      },
      {
        path: ROUTES.RECRUITMENT.MODIFY,
        element: <ModifyRecruitment />,
      },
    ],
  },
]);
