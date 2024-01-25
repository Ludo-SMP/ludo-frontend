import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../Constants/Router_Path';
import { MyPage } from '../Pages/MyPage';
import { Login } from '../Pages/Login';
import { CreateStudy } from '../Pages/Studies/CreateStudy';
import { ModifyStudy } from '../Pages/Studies/ModifyStudy';
import { GatherStudy } from '../Pages/Studies/GatherStudy';
import { StudyDetail } from '../Pages/StudyDetail';
import { Main } from '../Pages/Main';
import { RecruitmentDetail } from '../Pages/RecruitmentDetail';
import StudyList from '../Pages/StudyList';

export const Router = createBrowserRouter([
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
]);
