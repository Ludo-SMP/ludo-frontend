import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../Constants/Router_Path';
import { MyPage } from '../Pages/MyPage';
import { Login } from '../Pages/Login';
import { StudyDetail } from '../Pages/StudyDetail';
import { Main } from '../Pages/Main';

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
    path: ROUTER_PATH.study,
    element: <StudyDetail />,
  },
]);
