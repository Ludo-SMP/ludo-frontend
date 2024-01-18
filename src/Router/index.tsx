import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../Constants/Router_Path';
import { My } from '../Pages/My';
import { Login } from '../Pages/Login';
import App from '../App';

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
  //  라우터 추가할려면 path와 element 쓰면 됨
]);
