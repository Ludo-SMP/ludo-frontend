import Button from '@/Components/Common/Button';
import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { TopBar } from '@/Components/Topbar';
import { ROUTES } from '@/Constants/route';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import { media } from '@/Styles/theme';
import { getTabTitle } from '@/utils/getText';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  const { pathname } = useLocation();

  const { mutate: logoutMutate } = useLogOutMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout $pathname={pathname}>
      <Sidebar />
      <TopBar>{getTabTitle(pathname)}</TopBar>
      {children}
      <LogoutSection>
        <Button type="button" scheme="normal" size="fullWidth" onClick={() => logoutMutate()}>
          로그아웃
        </Button>
      </LogoutSection>
    </Layout>
  );
};
export { MyPageLayout };

const Layout = styled.div<{ $pathname: string }>`
  display: flex;
  width: 100%;
  max-width: 1224px;
  gap: 24px;
  margin: 0 auto;
  padding: 40px 0 72px 0;

  /** Topbar */
  & > div:nth-child(2) {
    display: none;
  }

  ${media.custom(800)} {
    flex-direction: column;
    padding: 0 24px;

    & > nav:first-child {
      display: none;
    }

    & > section {
      display: flex;
    }

    & > div:nth-child(2) {
      ${({ $pathname }) =>
        $pathname !== ROUTES.MYPAGE.HOME &&
        css`
          display: flex;
        `};
    }
  }
`;

const LogoutSection = styled.section`
  display: none;
  padding: 0px 24px 40px 24px;
`;
