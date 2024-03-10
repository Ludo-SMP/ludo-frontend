import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../Constants/Router_Path';
import MyPage from '../Pages/MyPage';
import { Login } from '../Pages/Login';
import { CreateStudy } from '../Pages/Studies/CreateStudy';
import { ModifyStudy } from '../Pages/Studies/ModifyStudy';
import { CreateRecruitment } from '../Pages/Studies/CreateRecruitment';
import Main from '../Pages/Main';
import RecruitmentDetail from '../Pages/RecruitmentDetail';
import Recruitments from '../Pages/Recruitments';
import SignUp from '@/Pages/SignUp';
import Header from '@/Components/Header';
import ApplicantsPage from '@/Pages/Applicants';
import StudyDetailPage from '@/Pages/StudyDetail';
import { Footer } from '@/Components/Footer/Footer';
import { SaveStudy } from '@/Pages/Studies/SaveStudy';

export const RouterPath = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: ROUTER_PATH.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATH.login,
        element: <Login />,
      },
      {
        path: ROUTER_PATH.mypage,
        element: <MyPage />,
      },
      {
        path: ROUTER_PATH.createStudy,
        element: <CreateStudy />,
      },
      {
        path: ROUTER_PATH.modifyStudy,
        element: <ModifyStudy />,
      },
      {
        path: ROUTER_PATH.gatherStudy,
        element: <CreateRecruitment />,
      },

      {
        path: ROUTER_PATH.study,
        element: <StudyDetailPage />,
      },
      {
        path: ROUTER_PATH.recruitmentDetail,
        element: <RecruitmentDetail />,
      },
      {
        path: ROUTER_PATH.recruitments,
        element: <Recruitments />,
      },
      {
        path: ROUTER_PATH.signup,
        element: <SignUp />,
      },
      {
        path: ROUTER_PATH.applicants,
        element: <ApplicantsPage />,
      },
      {
        path: ROUTER_PATH.savestudy,
        element: <SaveStudy />,
      },
    ],
  },
]);
