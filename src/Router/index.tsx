import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../Constants/Router_Path';
import { My } from '../Pages/My';
import { Login } from '../Pages/Login';
import { CreateStudy } from '../Pages/Studies/CreateStudy';
import { ModifyStudy } from '../Pages/Studies/ModifyStudy';
import { GatherStudy } from '../Pages/Studies/GatherStudy';

import App from '../App';
import { StudyDetail } from '../Pages/StudyDetail';

export const Router = createBrowserRouter([
  {
    path: ROUTER_PATH.main,
    element: <App />,
  },
  {
    path: ROUTER_PATH.login,
    element: <Login />,
  },
  {
    path: ROUTER_PATH.mypage,
    element: <My />,
  },
  {
    path: ROUTER_PATH.CreateStudy,
    element: <CreateStudy />,
  },
  {
    path: ROUTER_PATH.ModifyStudy,
    element: <ModifyStudy />,
  },
  {
    path: ROUTER_PATH.GatherStudy,
    element: <GatherStudy />,
  },
  //  라우터 추가할려면 path와 element 쓰면 됨
  {
    path: ROUTER_PATH.study,
    element: <StudyDetail />,
  },
]);
