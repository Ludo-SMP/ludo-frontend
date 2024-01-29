//header.tsx
import { MainHeader } from './MainHeader';
import { BackHeader } from './BackHeader';
import { ROUTER_PATH } from '../../Constants/Router_Path';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isMain = location.pathname === ROUTER_PATH.main;

  if (isMain) {
    return <MainHeader />;
  } else {
    return <BackHeader />;
  }
};
