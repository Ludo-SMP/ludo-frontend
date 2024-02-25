<<<<<<< HEAD
import { createBrowserRouter } from 'react-router-dom';
=======
import { Outlet, createBrowserRouter } from 'react-router-dom';
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
import { ROUTER_PATH } from '../Constants/Router_Path';
import { MyPage } from '../Pages/MyPage';
import { Login } from '../Pages/Login';
import { CreateStudy } from '../Pages/Studies/CreateStudy';
import { ModifyStudy } from '../Pages/Studies/ModifyStudy';
import { GatherStudy } from '../Pages/Studies/GatherStudy';
import { StudyDetail } from '../Pages/StudyDetail';
<<<<<<< HEAD
import { Main } from '../Pages/Main';
import { RecruitmentDetail } from '../Pages/RecruitmentDetail';
import StudyList from '../Pages/StudyList';
import { Test } from '../Pages/test';

export const RouterPath = createBrowserRouter([
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
    element: <GatherStudy />,
  },

  {
    path: ROUTER_PATH.study,
    element: <StudyDetail />,
  },
  {
    path: ROUTER_PATH.recruitmentDetail,
    element: <RecruitmentDetail />,
  },
  {
    path: ROUTER_PATH.studyList,
    element: <StudyList />,
  },
  {
    path: ROUTER_PATH.test,
    element: <Test />,
=======
import Main from '../Pages/Main';
import RecruitmentDetail from '../Pages/RecruitmentDetail';
import Recruitments from '../Pages/Recruitments';
import SignUp from '@/Pages/SignUp';
import Header from '@/Components/Header';
import Applicants from '@/Pages/Applicants';

export const RouterPath = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
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
        element: <GatherStudy />,
      },

      {
        path: ROUTER_PATH.study,
        element: <StudyDetail />,
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
        element: <Applicants />,
      },
    ],
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  },
]);
