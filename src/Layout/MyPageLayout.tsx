import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { TopBar } from '@/Components/Topbar';
import { media } from '@/Styles/theme';
import { getTabTitle } from '@/utils/getText';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <TopBar>{getTabTitle(pathname)}</TopBar>
      <Sidebar />
      {children}
    </Layout>
  );
};
export { MyPageLayout };

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1224px;
  gap: 24px;
  margin: 0 auto;
  padding: 40px 0 72px 0;

  ${media.mobile} {
    display: block;
    padding: 0;
  }

  & > div:first-child {
    display: none;

    ${media.mobile} {
      display: flex;
    }
  }

  nav {
    width: 288px;

    ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;
